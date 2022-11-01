import React, { useEffect, useState } from "react";
import {useDispatch} from "react-redux";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [getProducts, setGetProducts] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (getProducts) {
      fetch(
        "https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const loadedProducts = [];
          for (const key in data) {
            loadedProducts.push({
              id: key,
              productName: data[key].productName,
              newPrice: data[key].newPrice,
              oldPrice: data[key].oldPrice,
              productImage: data[key].productImage,
            });
          }
          console.log(loadedProducts);
          setProducts(loadedProducts);
        });
      setGetProducts(false);
    }
  }, [getProducts]);

  return (
    <>
      <h3 className="product heading">Products</h3>
      <div className="productList">
        {products &&
          products.map((item, index) => {
            return (
              <div className="product-container">
                <div className="product-inner-container">
                    <div className="product-image">
                      <img src={item.productImage} />
                    </div>
                    <div className="product-name">{item.productName}</div>
                    <div className="rating-price">
                      <div className="starIcon">
                        <img src={require("../../Assets/Star 1.png")} />
                        <img src={require("../../Assets/Star 1.png")} />
                        <img src={require("../../Assets/Star 1.png")} />
                        <img src={require("../../Assets/Star 1.png")} />
                        <img src={require("../../Assets/Star 1.png")} />
                      </div>
                      <div className="old-new-price">
                        <div className="old-price">{item.oldPrice}/-</div>
                        <div className="new-price">{item.newPrice}/-</div>
                      </div>
                    </div>
                    <div className="addtocart-button">
                      <button onClick={() => {
                        dispatch({type: 'UPDATE_CART_COUNT'})
                      }}>Add to Cart </button>
                    </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Products;
// onClick={
  // () => {
  //   dispatch({type: 'UPDATE_CART_COUNT'})
  // }
