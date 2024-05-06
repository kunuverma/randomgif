import Random from "./components/Random.js";
import Tag from "./components/Tag.js"

export default function App() {
  return (

    <div className = "flex flex-col w-full h-screen relative items-center background overflow-x-hidden">
      <h1 className="bg-white w-11/12 font-bold text-4xl px-10 py-2 mt-9 text-center rounded-2xl">Random Gif</h1>
      <div className = "flex flex-col justify-center items-center w-full">
        <Random/>
        <Tag/>
      </div>
    </div>

  );
}
