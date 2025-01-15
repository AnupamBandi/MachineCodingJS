import React, { useEffect, useState, useCallback } from "react";
import "./styles.css";
const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableloadMoreBtn, setDisableLoadMoreBtn] = useState(false);

  const url = "https://dummyjson.com/products?limit=20&skip=";

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    const response = await fetch(`${url}${count === 0 ? 0 : count * 20}`);

    const result = await response.json();

    if (result && result.products && result.products.length > 0) {
      setProducts((prevdata) => [...prevdata, ...result.products]);
      setLoading(false);
    }
  }, [count]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    if (products && products.length === 100) {
      setDisableLoadMoreBtn(true);
    }
  }, [products]);

  if (loading) {
    return <div> The context is loading</div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length > 0
          ? products.map((item, idx) => (
              <div key={item.idx}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
                {/* <button onClick={handleAddItem(item.id)}>Add to cart</button> */}
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button
          disabled={disableloadMoreBtn}
          onClick={() => setCount(count + 1)}
        >
          Load More products
        </button>
        {disableloadMoreBtn && <p>You have fetched 100 products</p>}
      </div>
    </div>
  );
};

export default LoadMoreData;
