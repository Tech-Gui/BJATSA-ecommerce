import React, { useState, useEffect } from "react";

const Cart = ({ temp }) => {
  const [cart, setCart] = useState(temp);

  // create an object that groups items by class and diameter
  const groupedItems = cart.reduce((groups, item) => {
    const { name, id, class: productClass, diameter, price } = item;
    const key = `${productClass}-${diameter}`;
    if (!groups[key]) {
      groups[key] = {
        name,
        id,
        class: productClass,
        diameter,
        price,
        count: 1,
      };
    } else {
      groups[key].count += 1;
      groups[key].price += price;
    }
    return groups;
  }, {});

  // convert the object to an array and sort by product class and diameter
  const groupedItemsArray = Object.values(groupedItems).sort(
    (a, b) => a.class.localeCompare(b.class) || a.diameter - b.diameter
  );

  // calculate the total price of all items in the cart
  const totalPrice = groupedItemsArray.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {groupedItemsArray.map((item) => (
            <div key={`${item.class}-${item.diameter}`}>
              <p>
                {item.count} x {item.name} {item.class} - {item.diameter} (total
                price: R{item.price})
              </p>
            </div>
          ))}
          <p>Total price: R{totalPrice}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
