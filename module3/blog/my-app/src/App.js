import React from "react";
// import Header from "./Header";
import BlogList from "./BlogList";
import Footer from "./Footer";
import Navbar from "./content/Navbar";
// import BlogPost from "./content/BlogPost";
import "./style.css";
function App() {
  return (
    <div>
      <Navbar />
      <BlogList />
      <Footer />
    </div>
  );
}
export default App;