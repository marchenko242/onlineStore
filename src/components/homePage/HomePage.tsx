import React from 'react';
import styles from "./homePageStyles.module.css";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className={styles.homePage}>
            <header className={styles.header}>
                <div className={styles.logo}>✨ Essential Finds</div>
                <nav className={styles.nav}>
                    <Link to="/catalog" className={styles.navLink}>Catalog</Link>
                    <a href="#heroSection" className={styles.navLink}>About us</a>
                    <a href="#contacts" className={styles.navLink}>Contacts</a>
                </nav>
                <div className={styles.actions}>
                    <button className={styles.actionButton}>👤</button>
                    <Link to={"/cart"}>
                        <button className={styles.actionButton}>🧺</button>
                    </Link>
                </div>
            </header>

            <section id="heroSection" className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        New Era of Shopping <br/>Quality, Style, Innovation.
                    </h1>
                    <p className={styles.heroSubtitle}>
                        We create a space where high quality and modern design meet. Discover an inspiring collection.
                    </p>
                    <div className={styles.heroButtons}>
                        <Link to={"/catalog"}>
                            <button className={styles.primaryButton}>
                                To the Catalog
                            </button>
                        </Link>
                        <button className={styles.secondaryButton}>
                            Learn more
                        </button>
                    </div>
                </div>
            </section>

            <footer className={styles.footer} id="contacts">
                <div className={styles.footerText}>
                    &copy; {new Date().getFullYear()} BrandName. We turn dreams into purchases.
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
