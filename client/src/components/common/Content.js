import Home from "../../pages/Home";
import { Routes, Route } from "react-router-dom";
import SignIn from "../../pages/SignIn";

const Content = () => {
  return (
    <div className="content">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default Content;
