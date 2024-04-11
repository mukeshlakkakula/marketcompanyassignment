import "./App.css";

import MainContent from "./components/MainContent";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import CourseCard from "./components/CourseCard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Classes from "./components/Classes";
import NotFound from "./components/NotFound";
import Register from "./components/Register";
import CourseProvider from "./components/CourseContext";
import Products from "./components/Products";
function App() {
  return (
    <CourseProvider>
      <BrowserRouter>
        <div className="">
          <Header />
          <Routes>
            <Route exact path="/" Component={MainContent} />
            <Route exact path="/aboutus" Component={AboutUs} />
            <Route exact path="/products" Component={CourseCard} />
            <Route exact path="/classes" Component={Classes} />
            <Route exact path="/register" Component={Register} />
            <Route exact path="/addedProducts" Component={Products} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CourseProvider>
  );
}

export default App;
