import Image from "next/image";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

export default function Home() {
  return (
    <div className="flex justify-center flex-col items-center">
      <Navbar/>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-4 mt-2 ">

        <Card title="点石成金" mp3Path="/点石成金.mp3"/>
        <Card title="西方有锅吗" mp3Path="/西方有锅吗.mp3"/>
        <Card title="这怎么可能啊" mp3Path="/这怎么可能啊.mp3"/>
        <Card title="那个。你等一下" mp3Path="/那个。你等一下.mp3"/>
        <Card title="捏...你你你这样的话" mp3Path="/捏...你你你这样的话.mp3"/>
        <Card title="ok" mp3Path="/ok.mp3"/>

      </div>
    </div>
  );
}
