export default function ProductCard({
  title,
  price,
  oldPrice,
  des,
  image,
  brand,
  category,
}) {
  const priceDifference = parseFloat(oldPrice) - parseFloat(price);

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-content">
        <h2>{title}</h2>
        <p className="product-brand">{brand}</p>
        <p className="product-category">{category}</p>
        <p className="product-price">
          ${price} <span className="old-price">${oldPrice}</span>
        </p>
        <p className="price-diff">Скидка: ${priceDifference.toFixed(2)}</p>
        <p className="product-description">{des}</p>
      </div>
    </div>
  );
}
