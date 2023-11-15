
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Side = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    return (
        <div className="space-y-10 underline">
            {
                categories.map(category => <Link to={`/categories.json/${category.id}`} className="mt-2 text-xl lg:ml-6" key={category.id}>{category.name}</Link>)
            }
        </div>
    );
};

export default Side;