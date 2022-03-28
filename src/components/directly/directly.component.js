import CategoryItem from "../categort-item/category-item.component";
import "./directly.styles.scss";
const Directly = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directly;
