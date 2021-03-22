import {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")

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
      .then(setListings(()=> listings.filter(listing => listing !== item )))
  }

  const filteredListings = () =>{
    const filtered = listings.filter(listing => listing.description.toLowerCase().includes(search.toLowerCase()))
    return filtered
  }



  

  return (
    <div className="app">
      <Header setSearch={setSearch} />
      <ListingsContainer listings={filteredListings()} removeItem={removeItem}/>
    </div>
  );
}

export default App;
