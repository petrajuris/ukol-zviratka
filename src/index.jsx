import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import AnimalDetail from "./Components/AnimalDetail";
import AnimalList from "./Components/AnimalList";
import "./style.css";

const App = () => {
  const [data, setData] = useState({});
  const [selectedAnimal, setSelectedAnimal] = useState(0);

  useEffect(() => {
    fetch("https://lrolecek.github.io/zviratka-api/zvirata.json")
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
      });
  }, []);

  return (
    <>
      <h1>Zvířátka v ZOO</h1>

      <div className="container">
        <AnimalList animals={data.zvirata} onAnimalChange={setSelectedAnimal} />
        {data.zvirata && <AnimalDetail animal={data.zvirata[selectedAnimal]} />}
      </div>
    </>
  );
};

render(<App />, document.querySelector("#app"));
