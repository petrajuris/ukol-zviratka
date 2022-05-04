import React from "react";
import Animal from "../Animal";

const AnimalList = ({ animals, onAnimalChange }) => {
  return (
    <>
      <div className="animal-list">
        {animals &&
          animals.map((animal, index) => (
            <div onClick={() => onAnimalChange(index)} key={index}>
              <Animal animal={animal} animalIndex={index} />
            </div>
          ))}
      </div>
    </>
  );
};

export default AnimalList;
