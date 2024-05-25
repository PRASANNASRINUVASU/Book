import Input from "../../COMPONENT/input";
import "./category.css";


function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Comedy"
          title="Infant"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Romance"
          title="Child"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Thriller"
          title="Adult"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Manga"
          title="Senior"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;