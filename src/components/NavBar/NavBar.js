import { useRef, useState } from "react";
import { createSearchParams, Link, useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";
import menu from "../../media/menu.png";
import logo from "../../media/logo-udemy.svg";
import search_icon from "../../media/search-icon.svg";
import cart from "../../media/cart.webp";
import glope from "../../media/glope.png";

const Menu = () => {
  return (
    <img
      className={`${styles.navMenu} ${styles.hidden}`}
      src={menu}
      alt="menu"
    />
  );
};

const Logo = () => {
  return (
    <Link to="/">
      <img className={styles.navLogo} src={logo} alt="udemy" />
    </Link>
  );
};

const NavLink = (props) => {
  return (
    <Link
      to="/UnderConstruction"
      className={`${styles.navLinks} ${styles.smallText} ${styles.hiddenSmall}`}
    >
      {props.name}
    </Link>
  );
};

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchKey, setSearchKey] = useState("");
  const inputRef = useRef(null);
  const changeKey = (event) => {
    const key = event.target.value;
    setSearchKey(key);
  };
  const clicked = (event) => {
    event.preventDefault();
    navigate({
      pathname: "/",
      search: createSearchParams({ search: searchKey }).toString(),
    });
  };
  return (
    <form className={styles.navSearch} action="">
      <button className={styles.searchButton} type="submit" onClick={clicked}>
        <img src={search_icon} alt="search" />
      </button>
      <input
        className={`${styles.searchBar} ${styles.hiddenSmall}`}
        input={inputRef}
        value={searchKey || ""}
        type="text"
        placeholder="Search for anything"
        onChange={changeKey}
      />
    </form>
  );
};

const Cart = () => {
  return (
    <Link to="/UnderConstruction">
      <img className={styles.navCart} src={cart} alt="cart" />
    </Link>
  );
};

const LogIn = () => {
  return (
    <Link
      to="/UnderConstruction"
      className={`${styles.navLog} ${styles.hiddenSmall}`}
    >
      Log in
    </Link>
  );
};

const SignUp = () => {
  return (
    <Link
      to="/UnderConstruction"
      className={`${styles.navSign} ${styles.hiddenSmall}`}
    >
      Sign up
    </Link>
  );
};

const SetLang = () => {
  return (
    <Link to="/UnderConstruction">
      <img
        className={`${styles.navLanguage} ${styles.hiddenSmall}`}
        src={glope}
        alt="languages"
      />
    </Link>
  );
};

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <Menu />
      <Logo />
      <NavLink name={"Categories"} />
      <SearchBar />
      <NavLink name={"Udemy Business"} />
      <NavLink name={"Teach on Udemy"} />
      <Cart />
      <LogIn />
      <SignUp />
      <SetLang />
    </nav>
  );
};

export default NavBar;
