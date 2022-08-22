import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Products from "./components/Products";
import Footer from "./components/Footer";

function App() {
  //Total six components. Two components further included in Main and Products respectively

  return (
    <>
      <Navbar />
      <Main />
      <Products />
      <Footer />
    </>
  );
}

export default App;
