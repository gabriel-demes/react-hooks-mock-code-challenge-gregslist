import {useState} from "react";

function ListingCard({item, removeItem}) {

  const [fav, setFav] = useState(false)
  const handleFav = () => {
    setFav((fav)=> !fav)
  }
  const handleDelete =() => {
    removeItem(item)
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={item.image} alt={item.description} />
      </div>
      <div className="details">
        {fav ? (
          <button className="emoji-button favorite active" onClick={handleFav}>★</button>
        ) : (
          <button onClick={handleFav} className="emoji-button favorite">☆</button>
        )}
        <strong>{item.description}</strong>
        <span> · {item.location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
