import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import CoursePage from "./components/CoursePage/CoursePage";
import Footer from "./components/Footer/Footer";
import UnderConstruction from "./components/UnderConstruction/UnderConstruction";
import data from "./data/data.json";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage coursesData={data.python} />} />
        <Route
          path="/coursepage/:courseId"
          element={<CoursePage coursesData={data.python} />}
        />
        <Route path="/*" element={<UnderConstruction />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
