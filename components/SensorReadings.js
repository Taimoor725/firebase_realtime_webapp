"use client"
import { useEffect, useState } from "react";
import { db, ref, onValue } from "../components/firebase";
import App from "./Chart";

const Sensorvalues = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const sensorRef = ref(db, "SensorData");

        onValue(sensorRef, (snapshot) => {
            const data = snapshot.val();
            setData(data);
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
            <div>
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


            <div className="flex flex-col">
                <div className="font-bold text-4xl">Controls and Graphs</div>
                <div className="font-bold text-2xl">{`Restart Value : ${data.restart}`}</div>


                <div>
                    {/* <App data={data.ADXL1}/> */}
                </div>
            </div>
        </div>
    );
};

export default Sensorvalues;

