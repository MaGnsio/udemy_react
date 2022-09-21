import React from "react";
import CourseCard from "../CourseCard/CourseCard";
import styles from "./CoursesCarousel.module.css";

const LoadCourses = (props) => {
  return props.pythonCourses.map((data, idx) => (
    <CourseCard
      key={data.id}
      index={idx}
      courseData={data}
      searchKey={props.searchKey}
    />
  ));
};

const CoursesCarousel = (props) => {
  return (
    <div className={styles.coursesCarousel}>
      <LoadCourses
        pythonCourses={props.pythonCourses}
        searchKey={props.searchKey}
      />
    </div>
  );
};

export default CoursesCarousel;
