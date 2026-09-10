function ProductCard({ title, price }) {
  return (
    <div className="card">
      <div className="image"></div>

      <h3>{title}</h3>

      <p>${price}</p>
    </div>
  );
}

export default ProductCard;