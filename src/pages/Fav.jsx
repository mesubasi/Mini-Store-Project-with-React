import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";

function Fav({ user }) {
  const [favs, setFavs] = useState([]);
  useEffect(() => {
    setFavs(JSON.parse(localStorage.getItem("favs")) ?? []);
  }, []);

  return (
    <>
      <h1>Favorites</h1>

      <div className="list-group">
        {favs.map((item) => (
          <Link
            key={item.id}
            className="list-group-item list-group-item-action"
            to={`/products/product/${item.id}`}
          >
            {item.title.toUpperCase()}
          </Link>
        ))}
      </div>
    </>
  );
}

export default Fav;
