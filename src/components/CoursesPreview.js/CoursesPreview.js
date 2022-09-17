import styles from "./CoursesPreview.module.css";
import CourseList from "../CourseList/CourseList";

const CoursesPreview = (props) => {
  return (
    <section className={styles.coursesPreview}>
      <div className={styles.coursesPreviewHeader}>
        <h1>A broad selection of courses</h1>
        <h3>
          Choose from 204,000 online video courses with new additions published
          every month
        </h3>
      </div>
      <CourseList
        pythonCourses={props.pythonCourses}
        searchKey={props.searchKey}
      />
    </section>
  );
};

export default CoursesPreview;
