import React from 'react';
import { Link } from "react-router-dom";
import styles from "./styles-menu.module.css"
import logo from "./images/logo.webp"

const Menu = () => {
    const menuItems = [
        { path: "home", label: "HOME" },
        { path: "catalog", label: "CATALOG" },
        { path: "categories", label: "CATEGORIES" },
        { path: "cart", label: "CART" },
        { path: "wishes", label: "WISHES" },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.sidebarHeader}>
                <img src={logo} alt="Brand Logo" className={styles.logoImage}/>
            </div>
            <ul className={styles.itemsOfMenu}>
                {menuItems.map((item) => (
                    <li key={item.path} className={styles.menuItem}>
                        <Link
                            className={styles.linkStyle}
                            to={item.path}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;