import React, { useEffect, useState, useCallback, useRef } from "react";

const SearchAutoSuggest = () => {
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // const cacheRef = useRef({});

  const getProducts = useCallback(async () => {
    const query = input.trim();
    if (!query) {
      setProducts([]);
    }

    // if (cacheRef.current[query]) {
    //   setProducts(cacheRef.current[query]);      1st way
    //   return;
    // }

    // const cached = sessionStorage.getItem(query);
    // if (cached) {
    //   setProducts(JSON.parse(cached))     2nd way
    //   return
 
    // }
    setLoading(true);
    try {
      const data = await fetch(
        "https://dummyjson.com/recipes/search?q=" + input
      );
      const productsData = await data.json();
      // cacheRef.current[query] = productsData.recipes 1st way
      // sessionStorage.setItem(query, JSON.stringify(productsData.recipes)); 2nd way
      setProducts(productsData.recipes);

      console.log(productsData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [input]);

  useEffect(() => {
    const timer = setTimeout(getProducts, 300);
    return () => clearTimeout(timer);
  }, [getProducts]);

  return loading ? (
    <h1
      style={{ margin: "auto", alignItems: "center", justifyContent: "center" }}
    >
      {" "}
      Loading UI{" "}
    </h1>
  ) : (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Auto generated items</h1>
      <div style={{ width: "400px", display: "flex" }}>
        <input
          style={{
            width: "300px",
            alignItems: "center",
            margin: "auto",
            border: "1px solid black",
          }}
          value={input}
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      {products && products.length > 0 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid black",
            width: "300px",
          }}
        >
          {products.map((p) => (
            <>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => setInput(p.name)}
                key={p.id}
              >
                {p.name}
              </span>
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchAutoSuggest;
