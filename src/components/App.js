import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [toyData, setToyData] = useState([])
  const [showForm, setShowForm] = useState(false);

  
  useEffect(() => {
    const fetchData = async() => {
      let request = await fetch('http://localhost:3001/toys')
      let response = await request.json()
      setToyData(response)
      console.log(toyData)
    }
    fetchData()
  }, [])
  
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  const handleAddNewToy = (newToy) => {
    const newToyArray = [...toyData, newToy]
    setToyData(newToyArray)
  }

  const deleteAToy = (idOfToy) => {
    const newToyArray = toyData.filter((toy) => toy.id !== idOfToy)
    setToyData(newToyArray)
  }

  const incrementLikes = (updatedToy) => {
    // console.log(updatedToy)
    const newToyArray = toyData.map((toy) => {
        if(toy.id === updatedToy.id){
          return updatedToy
        } else {
          return toy
        }
      })
    setToyData(newToyArray)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleAddNewToy={handleAddNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyData={toyData} deleteAToy={deleteAToy} incrementLikes={incrementLikes}/>
    </>
  );
}

export default App;
