import styles from "./Offers.module.css";
import alarm from "../../media/alarm.png";

const Offers = () => {
  return (
    <section className={styles.offers}>
      <div className={styles.offerText}>
        <h1>New to Udemy? Lucky you.</h1>
        <h5>
          Courses start at E£169.99. Get your new-student offer before it
          expires.
        </h5>
      </div>
      <img className="offerImg" src={alarm} alt="alarm" />
    </section>
  );
};

export default Offers;
