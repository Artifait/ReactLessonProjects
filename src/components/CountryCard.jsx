export default function CountryCard({
  name,
  capital,
  population,
  phone,
  media,
}) {
  return (
    <div className="country-card">
      <img
        src={media.emblem}
        alt={`${name} emblem`}
        className="country-emblem"
      />
      <div className="country-content">
        <h2>{name}</h2>
        <p>
          <strong>Столица:</strong> {capital}
        </p>
        <p>
          <strong>Тел. код:</strong> +{phone}
        </p>
        <p>
          <strong>Население:</strong> {population}
        </p>
      </div>
    </div>
  );
}
