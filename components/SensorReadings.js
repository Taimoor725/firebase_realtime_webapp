"use client";
import { useEffect, useState } from "react";
import { db, ref, onValue } from "../components/firebase";
import ChartComponent from "./ChartComponent";

const Sensorvalues = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const sensorRef = ref(db, "SensorData");

        onValue(sensorRef, (snapshot) => {
            const data = snapshot.val();
            setData(data);

            // Transform the data for the chart
            const transformedData = [];
            let readingNo = 1;

            Object.entries(data).forEach(([sensor, values]) => {
                if (sensor !== "restart") {
                    Object.entries(values).forEach(([timestamp, readings]) => {
                        transformedData.push({
                            x: readingNo++, // Sequential reading number
                            y: readings.X,  // X value from the sensor
                        });
                    });
                }
            });

            setChartData(transformedData);
            setLoading(false);
        });

        return () => {
            sensorRef.off();
        };
    }, []);

    if (loading) {
        return <p>Loading sensor data...</p>;
    }

    return (
        <div className="w-screen flex">
            {/* Chart Section */}
            <div className="flex flex-col w-1/2">
                <div className="font-bold text-4xl">Controls and Graphs</div>
                <div className="font-bold text-2xl">{`Restart Value : ${data.restart}`}</div>
                <div>
                    <ChartComponent data={chartData} />
                </div>
            </div>

            {/* Sensor Readings Section */}
            <div className="w-1/2">
                <h1>Sensor values</h1>
                {Object.keys(data).length === 0 ? (
                    <p>No data available.</p>
                ) : (
                    <div>
                        {Object.entries(data).map(([key, value]) => (
                            <div key={key}>
                                {key === "restart" ? <></> : <strong>{key}</strong>}
                                <div className="flex flex-col">
                                    {Object.entries(value).map(([timestamp, values]) => (
                                        <div className="flex" key={timestamp}>
                                            <strong>{timestamp}</strong>: X = {values.X}, Y = {values.Y}, Z = {values.Z}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sensorvalues;
