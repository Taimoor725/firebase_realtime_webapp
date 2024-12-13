"use client"
import dynamic from "next/dynamic";
import React from "react";

// Dynamically import ReactApexChart to ensure proper rendering in Next.js
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ChartComponent = ({ data }) => {
  const options = {
    series: [
      {
        name: "XYZ MOTORS",
        data: data,
      },
    ],
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
      text: "Stock Price Movement",
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
      labels: {
        formatter: function (val) {
          return (val / 1000000).toFixed(0);
        },
      },
      title: {
        text: "Price",
      },
    },
    xaxis: {
      type: "datetime",
    },
    tooltip: {
      shared: false,
      y: {
        formatter: function (val) {
          return (val / 1000000).toFixed(0);
        },
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={options.series} type="area" height={350} />
    </div>
  );
};

export default ChartComponent;
