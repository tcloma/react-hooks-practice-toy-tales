import React from "react";
// { useState, useEffect }

function ToyCard({ toy, deleteAToy, incrementLikes }) {

  const { id, name, image, likes } = toy;
  // const [toyLikes, setToyLikes] = useState(likes)

  const handleDeleteClick = () => {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'DELETE'
    })
    deleteAToy(id)
  }

  // useEffect(() => {
  //   setToyLikes(toyLikes => toyLikes+1)
  //   console.log(toyLikes)
  // },[likes])

  const handleLikeClick = () => {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        'likes': toy.likes + 1
      })
    })
      .then(response => response.json())
      .then(newToy => {
        incrementLikes(newToy)
      })
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button
        onClick={handleLikeClick}
        className="like-btn">Like {"<3"}</button>
      <button
        onClick={handleDeleteClick}
        className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
