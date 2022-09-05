import React from 'react';
import styles from '../styles/courseCard.module.css'

const stars = [1, 2, 3, 4, 5];

function GetStar(props) {
    if (props.x <= props.rating) {
        return(<span className={`fa fa-star ${styles.checked}`}></span>);
    } else if (props.x - 1 <= props.rating) {
        return(<span className={`fa fa-star-half-full ${styles.checked}`}></span>);
    } else {
        return(<span className={`fa fa-star`}></span>);
    }
}

function LoadStars(props) {
    return (
        stars.map(idx => 
            <GetStar x={idx} rating={props.rating}/>
        )
    );
}

function CourseCard(props) {
    return (
        <div className={styles.courseCard}>
            <img className={styles.courseImg} src={props.image} alt={props.title}></img>
            <p className={styles.courseTitle}>{props.title}</p>
            <p className={styles.courseAuthor}>{props.author}</p>
            <div className={styles.courseRating}>
                <span className={styles.courseRate}>{props.rating.toPrecision(2)}</span>
                <LoadStars rating={props.rating.toPrecision(2)}/>
            </div>
            <span className={styles.coursePrice}>E£{props.price}</span>
        </div>
    );
}

export default CourseCard;