import React, { useState } from "react";

function ToyForm({ handleAddNewToy }) {

  const [toyName, setToyName] = useState('')
  const [toyImage, setToyImage] = useState('')
  // const [toyLikes, setToyLikes] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3001/toys', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        'name': toyName,
        'image': toyImage,
        'likes': 0
      })
    })
      .then(response => response.json())
      .then(responseData => handleAddNewToy(responseData))
      setToyName('')
      setToyImage('')
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          value={toyName}
          onChange={(e) => setToyName(e.target.value)}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          value={toyImage}
          onChange={(e) => setToyImage(e.target.value)}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
