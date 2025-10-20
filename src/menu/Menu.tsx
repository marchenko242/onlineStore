import React from 'react';
import {Link} from "react-router-dom";
import styles from "./styles-menu.module.css"
import logo from "./images/logo.webp"

const Menu = () => {
    return (
        <div className={styles.container}>
            <img src={logo} alt="logo"/>
            <ul className={styles.itemsOfMenu}>
                <li><Link className={styles.linkStyle} to={"home"}>Home</Link></li>
                <li><Link className={styles.linkStyle} to={"products"}>Products</Link></li>
                <li><Link className={styles.linkStyle} to={"categories"}>Categories</Link></li>
                <li><Link className={styles.linkStyle} to={"cart"}>Cart</Link></li>
                <li><Link className={styles.linkStyle} to={"wishes"}>Wishes</Link></li>

            </ul>
        </div>
    );
};

export default Menu;