import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar.js";
import Header from "./components/Header.js";
import Category from "./components/Category";
import ItemsList from "./components/ItemsList";
import { items } from "./data";
import React, { useState } from "react";

function App() {
  const [itemsData, setItemsData] = useState(items);
  // Get All Unique categories
  const AllCategories = ["الكل", ...new Set(items.map((i) => i.category))];
  console.log(AllCategories);
  //Filter by Category
  const filterByCategory = (cat) => {
    if (cat === "الكل") {
      setItemsData(items);
    } else {
      const newArray = items.filter((item) => item.category === cat);
      setItemsData(newArray);
    }
  };
  return (
    <div className="color-body font">
      <NavBar />
      <Container>
        <Header />
        <Category
          filterByCategory={filterByCategory}
          AllCategories={AllCategories}
        />
        <ItemsList itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;
