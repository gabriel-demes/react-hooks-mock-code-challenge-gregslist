import {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([])

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
      .then(r => r.json())
      .then(listings => setListings(listings))
  }, [])

  const removeItem = item => {
    fetch(`http://localhost:6001/listings/${item.id}`, {
      method: "DELETE",
      headers: {"Text-Content" : "application/json"}
    })
      .then(r => r.json())
      .then(setListings((listings)=> listings.filter(listing => listing !== item )))
  }

  const searchFilter = term => {
    const filtered = listings.filter((listing) => listing.description.toLowerCase().includes(term.toLowerCase()))
    setListings(filtered)
  }

  return (
    <div className="app">
      <Header searchFilter={searchFilter} />
      <ListingsContainer listings={listings} removeItem={removeItem}/>
    </div>
  );
}

export default App;
