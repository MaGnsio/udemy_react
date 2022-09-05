import React from 'react';
import ReactDOM from 'react-dom/client';
import CoursesCarousel from './courseCarousel';
import styles from '../styles/coursesList.module.css'

function CoursesList() {
    return (
        <div className={styles.coursesList}>
            <div className={styles.coursesInfo}>
                <h4>
                    Expand your career opportunities with Python
                </h4>
                <p>
                    Take one of Udemy’s range of Python courses and learn how to code using this 
                    incredibly useful language. Its simple syntax and readability makes Python 
                    perfect for Flask, Django, data science, and machine learning. 
                    You’ll learn how to build everything from games to sites to apps. 
                    Choose from a range of courses that will appeal to both beginners and advanced developers alike.
                </p>
            </div>
            <button className={styles.exploreBtn} type="button">Explore Python</button>
            <CoursesCarousel/>
        </div>
    );
}

export default CoursesList;