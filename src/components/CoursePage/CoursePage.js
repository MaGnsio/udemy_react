import { useParams } from "react-router-dom";
import styles from "./CoursePage.module.css";

const CoursePage = (props) => {
  const params = useParams();
  const courseId = params.courseId;
  console.log(courseId);
  console.log(props.courseData[courseId]);
  return (
    <h1 className={styles.underConstruction}>
      COURSE PAGE UNDER CONSTRUCTION!!
    </h1>
  );
};

export default CoursePage;
