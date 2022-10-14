import "./App.css";
import Content from "./components/common/Content";
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
// import { useSelector } from "react-redux";

function App() {
  // const user = useSelector((state) => state.user);

  return (
    <div className="App">
      <Nav />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
