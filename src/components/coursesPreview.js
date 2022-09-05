import CoursesList from './coursesList';
import styles from '../styles/coursesPreview.module.css';

function CoursesPreview() {
  return (
    <section className={styles.CoursesPreview}>
      <div className={styles.coursesPreviewHeader}>
        <h1>A broad selection of courses</h1>
        <h3>Choose from 204,000 online video courses with new additions published every month</h3>
      </div>
      <CoursesList />
    </section>
  );
}

export default CoursesPreview;
