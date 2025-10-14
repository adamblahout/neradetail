import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import { Header } from "./components/header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Services" element={<Services />}></Route>
      </Routes>
    </>
  );
}

export default App;
