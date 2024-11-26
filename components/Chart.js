// "use client";

// import React, { useEffect, useState } from "react";
// import Chart from "react-apexcharts";

// const App = ({ data }) => {
//   const [timestamps, setTimestamps] = useState([]); // Store all timestamps
//   const [xValues, setXValues] = useState([]); // Store all X values

//   const chartConfig = {
//     options: {
//       chart: {
//         id: "dynamic-data-chart",
//       },
//       xaxis: {
//         categories: timestamps, // x-axis labels (timestamps)
//       },
//     },
//     series: [
//       {
//         name: "X-values",
//         data: xValues, // y-axis values (X from sensor readings)
//       },
//     ],
//   };

//   useEffect(() => {
//     if (data && Object.keys(data).length > 0) {
//       const newTimestamps = Object.keys(data); // Extract new timestamps
//       const newXValues = newTimestamps.map((timestamp) => data[timestamp]?.X || 0);

//       console.log("New Timestamps:", newTimestamps);
//       console.log("New X Values:", newXValues);

//       // Update state incrementally
//       setTimestamps((prev) => [...prev, ...newTimestamps]); // Append new timestamps
//       setXValues((prev) => [...prev, ...newXValues]); // Append new X values
//     }
//   }, [data]); // Re-run whenever `data` changes

//   return (
//     <div>
//       <Chart
//         options={chartConfig.options}
//         series={chartConfig.series}
//         type="line"
//         width="500"
//       />
//     </div>
//   );
// };

// export default App;
