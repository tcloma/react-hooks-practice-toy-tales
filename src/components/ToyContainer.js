import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toyData, deleteAToy, incrementLikes }) {
  return (
    <div id="toy-collection">
      {toyData.map((toy) => {
        return(
          <ToyCard key={toy.id} toy={toy} deleteAToy={deleteAToy} incrementLikes={incrementLikes}/>
        )
      })}
    </div>
  );
}

export default ToyContainer;
