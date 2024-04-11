import React from "react";
import { createContext, useContext, useState } from "react";

const CourseContext = createContext();
const CourseProvider = ({ children }) => {
  const [activeRoute, setActiveRoute] = useState("home");

  return (
    <CourseContext.Provider value={{ activeRoute, setActiveRoute }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = () => useContext(CourseContext);
export default CourseProvider;
