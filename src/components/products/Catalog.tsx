import React, { useEffect, useState } from "react";
import { IProduct } from "../../models/IProduct";
import styles from "./catalogStyle.module.css";
import {Link} from "react-router-dom";
import {getDataFromDB} from "../../services/api.service";

const Catalog = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const getResp = async () => {
            const resp = await getDataFromDB.products();
            setProducts(resp);
        };
        getResp();
    }, []);

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={styles.catalogWrapper}>
            <div className={styles.header}>
                <h1 className={styles.title}>Product Catalog</h1>

                <div className={styles.searchContainer}>
                    <button
                        className={styles.searchButton}
                        onClick={() => setSearchVisible(!searchVisible)}
                    >
                        🔍 Search
                    </button>

                    <input
                        type="text"
                        placeholder="Search products..."
                        className={`${styles.searchInput} ${
                            searchVisible ? styles.visible : ""
                        }`}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className={styles.cardContainer}>
                {filteredProducts.map((product) => (
                    <Link to={""}>
                        <div key={product.id} className={styles.card}>
                            <img
                                src={product.images?.[0]}
                                alt={product.title}
                                className={styles.image}
                            />
                            <div className={styles.cardBody}>
                                <h3 className={styles.productTitle}>{product.title}</h3>
                                <p className={styles.price}>${product.price}</p>
                                <button className={styles.btn}>Add to Cart</button>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Catalog;
