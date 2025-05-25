import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

export default function CountryList() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(
          "https://api.sampleapis.com/countries/countries"
        );
        if (!res.ok) throw new Error("Ошибка при получении данных");
        const data = await res.json();
        setCountries(data);
      } catch (err) {
        setError("Не удалось загрузить данные.");
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <p>Загружаем страны...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="loader-container">
        <h1>{error}</h1>
      </div>
    );
  }

  return (
    <div className="country-list">
      {countries.map((country) => (
        <CountryCard key={country.id} {...country} />
      ))}
    </div>
  );
}
