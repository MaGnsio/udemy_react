import { useParams } from "react-router-dom";
import styles from "./CoursePage.module.css";

const CourseImg = (props) => {
  return (
    <img className={styles.courseImg} src={props.image} alt={props.title} />
  );
};

const CoursePrice = (props) => {
  return <h2 className={styles.coursePrice}>E£{props.price}</h2>;
};

const CourseArticles = (props) => {
  const article = require("../../media/article.png");
  if (props.articles === 0) {
    return <></>;
  }
  return (
    <li className={styles.feature}>
      <img className={styles.featureImg} src={article} />
      <p className={styles.featureTxt}>{props.articles} article</p>
    </li>
  );
};

const CourseDownloadables = (props) => {
  const file = require("../../media/file.png");
  if (props.articles === 0) {
    return <></>;
  }
  return (
    <li className={styles.feature}>
      <img className={styles.featureImg} src={file} />
      <p className={styles.featureTxt}>
        {props.downloadable_resources} downloadable resources
      </p>
    </li>
  );
};

const CourseFeatures = (props) => {
  const playbtn = require("../../media/play-button.png");
  const infinty = require("../../media/infinity.png");
  const phone = require("../../media/smartphone-call.png");
  const trophy = require("../../media/trophy.png");
  return (
    <div className={styles.featureList}>
      <p className={styles.featureHeader}>This course includes:</p>
      <ul>
        <li className={styles.feature}>
          <img className={styles.featureImg} src={playbtn} />
          <p className={styles.featureTxt}>
            {props.courseDetails.hours} hours on-demand video
          </p>
        </li>
        <CourseArticles articles={props.courseDetails.articles} />
        <CourseDownloadables
          downloadable_resources={props.courseDetails.downloadable_resources}
        />
        <li className={styles.feature}>
          <img className={styles.featureImg} src={infinty} />
          <p className={styles.featureTxt}>Full lifetime access</p>
        </li>
        <li className={styles.feature}>
          <img className={styles.featureImg} src={phone} />
          <p className={styles.featureTxt}>Access on mobile and TV</p>
        </li>
        <li className={styles.feature}>
          <img className={styles.featureImg} src={trophy} />
          <p className={styles.featureTxt}>Certificate of completion</p>
        </li>
      </ul>
    </div>
  );
};

const CourseDetails = (props) => {
  return (
    <section className={styles.courseDetails}>
      <CourseImg
        image={props.courseDate.image}
        title={props.courseDate.title}
      />
      <CoursePrice price={props.courseDate.price} />
      <button className={styles.cartBtn}>Add to cart</button>
      <button className={styles.buyBtn}>Buy now</button>
      <span className={styles.refundInfo}>30-Day Money-Back Guarantee</span>
      <CourseFeatures courseDetails={props.courseDate} />
    </section>
  );
};

const CoursePage = (props) => {
  const courseId = useParams().courseId;
  return (
    <div className={styles.coursePage}>
      <CourseDetails courseDate={props.coursesData[courseId]} />
    </div>
  );
};

export default CoursePage;
