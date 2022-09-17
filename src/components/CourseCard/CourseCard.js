import React from "react";
import { Link } from "react-router-dom";
import styles from "./CourseCard.module.css";

const CourseImg = (props) => {
  return (
    <img className={styles.courseImg} src={props.image} alt={props.title} />
  );
};

const CourseTitle = (props) => {
  return <p className={styles.courseTitle}>{props.title}</p>;
};

const CourseAuthor = (props) => {
  return (
    <p className={styles.courseAuthor}>
      {props.instructors.map((instructor, idx) => {
        return (
          <span key={idx}>
            {idx ? "," : ""}
            {instructor.name}
          </span>
        );
      })}
    </p>
  );
};

const stars = [1, 2, 3, 4, 5];

function GetStar(props) {
  if (props.x <= props.rating) {
    return <span className={`fa fa-star ${styles.checked}`}></span>;
  } else if (props.x - 1 <= props.rating) {
    return <span className={`fa fa-star-half-full ${styles.checked}`}></span>;
  } else {
    return <span className={`fa fa-star`}></span>;
  }
}

function LoadStars(props) {
  return stars.map((idx) => (
    <GetStar key={idx} x={idx} rating={props.rating} />
  ));
}

const CourseRating = (props) => {
  return (
    <div className={styles.courseRating}>
      <span className={styles.courseRate}>{props.rating.toPrecision(2)}</span>
      <LoadStars rating={props.rating.toPrecision(2)} />
    </div>
  );
};

const CoursePrice = (props) => {
  return <span className={styles.coursePrice}>E£{props.price}</span>;
};

function CourseCard(props) {
  if (
    props.searchKey != null &&
    props.searchKey !== "" &&
    props.courseData.title
      .toLowerCase()
      .indexOf(props.searchKey.toLowerCase()) === -1
  ) {
    return <></>;
  }
  return (
    <Link to={`/coursepage/${props.index}`} className={styles.cardLink}>
      <div className={styles.courseCard}>
        <CourseImg
          image={props.courseData.image}
          title={props.courseData.title}
        />
        <CourseTitle title={props.courseData.title} />
        <CourseAuthor instructors={props.courseData.instructors} />
        <CourseRating rating={props.courseData.rating} />
        <CoursePrice price={props.courseData.price} />
      </div>
    </Link>
  );
}

export default CourseCard;
