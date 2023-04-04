import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

const ProductTable = ({ selectedproduct, updateCart }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      setCart(JSON.parse(cartData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCart(cart); // Call the function to update the cart in App.js
  }, [cart, updateCart]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Class</th>
            <th>Diameter</th>
            <th>Price</th>
            <th>Add to Cart</th>
          </tr>
        </thead>
        <tbody>
          {selectedproduct?.classes.map((productClass, index) =>
            selectedproduct.diameters.map((diameter, index2) => {
              const product = {
                name: selectedproduct.name,
                id: `${selectedproduct.id}-${index}-${index2}`,
                class: productClass,
                diameter,
                price: selectedproduct.prices[index][index2],
              };
              return (
                <tr key={product.id}>
                  <td>{product.class}</td>
                  <td>{product.diameter}</td>
                  <td>R{product.price}</td>
                  <td className="text-center">
                    <button
                      onClick={() => addToCart(product)}
                      style={{
                        border: "none",
                        background: "transparent",
                        transition: "transform 0.3s ease",
                      }}
                      className="cart-button"
                    >
                      <i
                        className="fa fa-solid fa-cart-plus"
                        style={{ fontSize: "24px", color: "#911212" }}
                      />
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductTable;
