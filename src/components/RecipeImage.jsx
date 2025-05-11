export default function RecipeImage({ path, alt }) {
  return (
    <div className="recipe-image">
      <img src={path} alt={alt} />
    </div>
  );
}
