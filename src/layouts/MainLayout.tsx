import React from 'react';
import Menu from "../menu/Menu";
import { Outlet } from "react-router-dom";
import styles from "./styles-layout.module.css";

const MainLayout = () => {
    return (
        <div className={styles.layoutContainer}>
            <aside className={styles.sidebar}>
                <Menu/>
            </aside>
            <main className={styles.mainContent}>
                <Outlet/>
            </main>
        </div>
    );
};

export default MainLayout;
