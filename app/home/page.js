"use client";
import SideBar from "@/components/SideBar";
import React from "react";

function HomePage() {
  return (
    <div className="w-[80%] ml-[20%] flex h-screen bg-gray-100 text-gray-800">
        {/* <SideBar/> */}
      <div className="w-[80%] p-10">
      <h1 className="text-4xl font-bold text-center text-[#00274D] mb-8">
        Structural Health Monitoring System
      </h1>

      {/* Introduction Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p>
          Structural health monitoring (SHM) is a critical field in ensuring the
          safety and longevity of structures by identifying and assessing
          potential damage in a timely manner. This report outlines the
          development and demonstration of an SHM system using an ADXL-345
          accelerometer and ESP-32 microcontroller to monitor vibrations on a
          window pane, serving as a proof-of-concept.
        </p>
      </section>

      {/* Proposed Method and Experimental Setup */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          Proposed Method and Experimental Setup
        </h2>
        <ul className="list-disc ml-6">
          <li>
            <strong>ADXL-345 Accelerometer:</strong> Captures vibration data.
          </li>
          <li>
            <strong>ESP-32 Microcontroller:</strong> Processes sensor data.
          </li>
          <li>
            <strong>Data Analysis:</strong> Includes FFT for frequency analysis
            and anomaly detection.
          </li>
          <li>
            <strong>User Interface:</strong> Real-time visualization of
            vibration data.
          </li>
        </ul>
      </section>

      {/* Results and Analysis */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Results and Analysis</h2>
        <p>
          The system demonstrated accurate vibration amplitude and frequency
          measurements, along with effective anomaly detection. Real-time data
          visualization provided clear insights into structural health.
        </p>
      </section>

      {/* Conclusion */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
        <p>
          The SHM system successfully demonstrated the feasibility of using
          low-cost sensors like the ADXL-345 for real-time structural
          monitoring. The ESP-32 provided effective data processing and
          communication capabilities, making the system scalable for larger
          structures.
        </p>
      </section>

      {/* Future Work */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Future Work</h2>
        <ul className="list-disc ml-6">
          <li>Integrating wireless communication for remote monitoring.</li>
          <li>Monitoring additional structural elements like beams.</li>
          <li>
            Using machine learning techniques for anomaly detection and
            predictive analytics.
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="mt-10 text-center text-gray-600">
        <p>
          Submitted by: Muhammad Abdullah Akhtar, Taimoor Tanveer, Hammad Saeed,
          Hatem Ali Mafleh Saleh Abo Hatem
        </p>
        <p>University of Engineering & Technology, Lahore</p>
        {/* <p>14-December-2024</p> */}
      </footer>
      </div>
    </div>
  );
}

export default HomePage;
