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

      const transformedData = [];
      let readingNo = 1;
      Object.entries(data).forEach(([sensor, values]) => {
        if (sensor !== "restart") {
            if(readingNo>=200){
                readingNo=1;
            }
          Object.entries(values).forEach(([timestamp, readings]) => {
            transformedData.push({
              x: readingNo++, 
              y: readings.X,
            });
          });
        }
      });

      setChartData(transformedData);
      setLoading(false);
    });

    // return () => {
    //   sensorRef.off();
    // };
  }, []);

  if (loading) {
    return <p>Loading sensor data...</p>;
  }

  // Create an array of sensor keys to iterate over
  const sensorKeys = Object.keys(data);

  return (
    // <div className="overflow-hidden">
    <div className="flex-1 h-screen p-40 overflow-hidden">
      {/* Sensor Readings Section */}
      <div className="p-5 _bg-gray-100 h-[99%]  overflow-y-scroll bg-gray-100 rounded-2xl border-[2px] border-black">
      <div className="w-full h-auto min-h-[50vh] flex flex-wrap p-5">
        <h1 className="w-full text-xl font-bold">Sensor values</h1>
        {sensorKeys.length === 0 ? (
          <p>No data available.</p>
        ) : (
          sensorKeys.map((sensorKey) => (
            sensorKey !== "restart" && (
              <div className="flex-1 m-2" key={sensorKey}>
                <h2 className="font-semibold">{sensorKey}</h2>
                <div className="flex flex-col space-y-2">
                  {Object.entries(data[sensorKey]).map(([timestamp, values]) => (
                    <div className="flex" key={timestamp}>
                      <strong>{timestamp}</strong>: X = {values.X}
                      {/* You can also display Y, Z values if needed */}
                    </div>
                  ))}
                </div>
              </div>
            )
          ))
        )}
      </div>
      </div>
    </div>
    // </div>
  );
};

export default Sensorvalues;
