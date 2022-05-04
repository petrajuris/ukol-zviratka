import React from "react";
import Animal from "../Animal";

const AnimalList = ({ animals, onAnimalChange }) => {
  return (
    <>
      <div className="animal-list">
        {animals &&
          animals.map((animal, index) => (
            <Animal
              animal={animal}
              animalIndex={index}
              onAnimalChange={onAnimalChange}
            />
          ))}
      </div>
    </>
  );
};

export default AnimalList;
