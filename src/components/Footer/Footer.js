import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import inverted_logo from "../../media/logo-udemy-inverted.svg";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerLinks}>
        <div className={styles.col}>
          <Link to="/UnderConstruction">Udemy Business</Link>
          <Link to="/UnderConstruction">Tech on Udemy</Link>
          <Link to="/UnderConstruction">Get the app</Link>
          <Link to="/UnderConstruction">About us</Link>
          <Link to="/UnderConstruction">Contact us</Link>
        </div>
        <div className={styles.col}>
          <Link to="/UnderConstruction">Careers</Link>
          <Link to="/UnderConstruction">Blog</Link>
          <Link to="/UnderConstruction">Help and Support</Link>
          <Link to="/UnderConstruction">Affiliate</Link>
          <Link to="/UnderConstruction">Investors</Link>
        </div>
        <div className={styles.col}>
          <Link to="/UnderConstruction">Terms</Link>
          <Link to="/UnderConstruction">Privacy policy</Link>
          <Link to="/UnderConstruction">Cookie settings</Link>
          <Link to="/UnderConstruction">Sitemap</Link>
          <Link to="/UnderConstruction">Accessibility statement</Link>
        </div>
      </div>
      <div className={styles.footerCr}>
        <Link to="/">
          <img className={styles.footerLogo} src={inverted_logo} alt="udemy" />
        </Link>
        <p>&copy; 2022 Udemy, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
