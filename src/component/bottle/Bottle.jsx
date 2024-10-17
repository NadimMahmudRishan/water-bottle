import "./bottle.css";

const bottle = ({ bottle, handelCart }) => {
  const { name, seller, stock, price, img } = bottle;
  return (
    <div className="bottle-container">
      <h3>{name}</h3>
      <img className="bottle-image" src={img} alt="Bottle.png" />
      <p>Price : {price}</p>
      <p>Seller : {seller}</p>
      <p>Stoke : {stock}</p>
      <button onClick={() => handelCart(bottle)}>Add To Cart</button>
    </div>
  );
};

export default bottle;
