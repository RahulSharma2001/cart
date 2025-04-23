import React from "react";

const Cart = ({ products, setProducts, setTotalQuantity }) => {
  const [price, setPrice] = React.useState(0);
  const TotalPrice = products.reduce(
    (acc, product) => acc + product.quantity * product.price,
    0
  );
  const IncreaseHandler = (id) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        setTotalQuantity((prev) => prev + 1);
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });

    setProducts(updatedProducts);
    setPrice(TotalPrice());
  };

  const DecreaseHandler = (id) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id && product.quantity > 0) {
        setTotalQuantity((prev) => prev - 1);
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });

    setProducts(updatedProducts);
    setPrice(TotalPrice());
  };
  return (
    <div className="cart-container">
      <div className="left">
        {products.map((product) => {
          return (
            <div key={product.id} className="content-container">
              <div className="details">
                <img
                  src={product.image}
                  alt={product.name}
                  width={100}
                  height={100}
                />
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
              </div>
              <div className="quantity">{product.quantity}</div>
              <div className="btn-grp">
                <button onClick={() => IncreaseHandler(product.id)}>
                  Increase
                </button>
                <button onClick={() => DecreaseHandler(product.id)}>
                  Decrease
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="right">
        <h2>Order Summary</h2>
        <div className="summary-container">
          Total Amount :<span className="price">$ {TotalPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
