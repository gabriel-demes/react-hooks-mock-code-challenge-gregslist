import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, removeItem}) {
  const showListings = () => listings.map(listing => <ListingCard item={listing} key={listing.id} removeItem={removeItem}/>)

  
  return (
    <main>
      <ul className="cards">
        {showListings()}
      </ul>
    </main>
  );
}

export default ListingsContainer;
