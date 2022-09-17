import React from "react";
import { Link } from "react-router-dom";
import CoursesCarousel from "../CoursesCarousel/CoursesCarousel";
import styles from "./CourseList.module.css";

const CoursesList = (props) => {
  return (
    <div className={styles.coursesList}>
      <div className={styles.coursesInfo}>
        <h4>Expand your career opportunities with Python</h4>
        <p>
          Take one of Udemy’s range of Python courses and learn how to code
          using this incredibly useful language. Its simple syntax and
          readability makes Python perfect for Flask, Django, data science, and
          machine learning. You’ll learn how to build everything from games to
          sites to apps. Choose from a range of courses that will appeal to both
          beginners and advanced developers alike.
        </p>
      </div>
      <Link to="/UnderConstruction">
        <button className={styles.exploreBtn} type="button">
          Explore Python
        </button>
      </Link>
      <CoursesCarousel
        pythonCourses={props.pythonCourses}
        searchKey={props.searchKey}
      />
    </div>
  );
};

export default CoursesList;
