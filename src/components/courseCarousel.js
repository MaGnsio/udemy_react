import React from 'react';
import pythonCourses from '../coursesData';
import CourseCard from './courseCard';
import styles from '../styles/coursesCarousel.module.css'

function LoadCourses() {
    return (
        pythonCourses.map(data => 
            <CourseCard image={data.image} title={data.title} author={data.instructors[0].name} rating={data.rating} price={data.price}/>
        )
    );
}

function CoursesCarousel() {
    return (
        <div className={styles.coursesCarousel}>
            <LoadCourses/>
        </div>
    );
}

export default CoursesCarousel;