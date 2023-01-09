import "./App.css";
import Content from "./common/components/Content";
import Nav from "./common/components/Nav";
import Footer from "./common/components/Footer";
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
