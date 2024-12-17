import SideBar from "@/components/SideBar";
import SensorReadings from "../components/SensorReadings";

export default function Home() {
  return (
    <div className="flex bg-[#F5F5F5] w-screen h-screen overflow-hidden">
      {/* <h1>Welcome to Sensor Values Viewer</h1> */}
      {/* <SensorReadings /> */}
      <SideBar/>
    </div>
  );
}
