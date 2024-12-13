"use client";
import dynamic from "next/dynamic";
import React from "react";

// Dynamically import ReactApexChart to ensure proper rendering in Next.js
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ChartComponent = ({ data, data1 }) => {
  const options = {
    series: [
      {
        name: "Acceleration 1",
        data: data,
      },
      {
        name: "Acceleration 2", 
        data: data1,
      },
    ],
    stroke: {
      width: [2, 2],
    },
    chart: {
      type: "area",
      stacked: false,
      height: 350,
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true,
      },
      toolbar: {
        autoSelected: "zoom",
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    title: {
      text: "ADXL 1", // Title
      align: "left",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    yaxis: {
      min: 1.5,  // Fixed y-axis min value
      max: 2.5,  // Fixed y-axis max value
      labels: {
        formatter: function (val) {
          return val.toFixed(5);  // Format labels with two decimals
        },
      },
      title: {
        text: "Acceleration Range", 
      },
    },
    xaxis: {
      min: 1, 
      max: 200, 
      type: "numeric",
      title: {
        text: "Reading Number",
      },
    },
    tooltip: {
      shared: true,
      y: {
        formatter: function (val) {
          return val.toFixed(5); 
        },
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={options.series} type="area" height={600} />
    </div>
  );
};

export default ChartComponent;
