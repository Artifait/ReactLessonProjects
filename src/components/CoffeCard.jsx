
export default function CoffeCard({ title, price, description, image, ingredients, totalSales }) {
  return (
    <div className="coffee-card">
      <img src={image} alt={title} className="coffee-card-image" />
      <div className="coffee-card-content">
        <h2>{title}</h2>
        <p className="coffee-card-price">${price.toFixed(2)}</p>
        <p>{description}</p>
        {ingredients.length > 0 && (
          <ul className="coffee-card-ingredients">
            {ingredients.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
        <p className="coffee-card-sales">Sold: {totalSales}</p>
      </div>
    </div>
  );
}
