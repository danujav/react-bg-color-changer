import { useState } from "react";
import Button from "./component/Button";

function App() {
  const [color, setColor] = useState("bg-slate-900");

  const changeColor = (name: string) => {
    if (name == "green") {
      setColor("bg-green-200");
    } else if (name == "purple") {
      setColor("bg-purple-400");
    } else if (name == "pink") {
      setColor("bg-pink-200");
    }
  };

  return (
    <div
      className={`max-w-full min-h-screen ${color} flex items-end justify-end`}
    >
      <div className="flex space-x-5 m-5">
        <Button
          btnName="Green"
          color="bg-green-500"
          hoverColor="hover:bg-green-700"
          onClick={() => changeColor("green")}
        />
        <Button
          btnName="Purple"
          color="bg-purple-500"
          hoverColor="hover:bg-purple-700"
          onClick={() => changeColor("purple")}
        />
        <Button
          btnName="Pink"
          color="bg-pink-500"
          hoverColor="hover:bg-pink-700"
          onClick={() => changeColor("pink")}
        />
      </div>
    </div>
  );
}

export default App;
