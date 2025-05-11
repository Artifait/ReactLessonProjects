import './App.css';
import RecipeTitle from './components/RecipeTitle';
import Ingredients from './components/Ingredients';
import Instructions from './components/Instructions';
import RecipeImage from './components/RecipeImage';

function App() {
  const recipe = {
    title: "Паста с соусом Альфредо",
    image: "images/Pasta.jpg",
    ingredients: [
      { name: "Паста", amount: "200 г" },
      { name: "Сливки 20%", amount: "100 мл" },
      { name: "Пармезан", amount: "50 г" },
      { name: "Чеснок", amount: "2 зубчика" },
      { name: "Масло сливочное", amount: "20 г" }
    ],
    instructions: [
      "Отварите пасту до готовности.",
      "Обжарьте чеснок на сливочном масле.",
      "Добавьте сливки и тертый пармезан, перемешайте.",
      "Смешайте соус с пастой и подавайте горячим."
    ]
  };

  return (
    <div className="App">
      <RecipeTitle title={recipe.title} />
      <RecipeImage path={recipe.image} alt={recipe.title} />
      <Ingredients list={recipe.ingredients} />
      <Instructions steps={recipe.instructions} />
    </div>
  );
}

export default App;
