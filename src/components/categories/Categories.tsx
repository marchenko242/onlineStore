import React, { useEffect, useState } from "react";
// import { getProducts } from "../../services/api.service";
import { Link } from "react-router-dom";

const Categories = () => {
    const [categories, setCategories] = useState<string[]>([]);

    // useEffect(() => {
    //     const fetchCategories = async () => {
    //         const products = await getProducts();
    //         const uniqueCategories = Array.from(new Set(products.map(p => p.category)));
    //         setCategories(uniqueCategories);
    //     };
    //     fetchCategories();
    // }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h2>Categories</h2>
            {categories.map((category) => (
                <p key={category}>
                    <Link to={`/category/${category}`}>{category}</Link>
                </p>
            ))}
        </div>
    );
};

export default Categories;
