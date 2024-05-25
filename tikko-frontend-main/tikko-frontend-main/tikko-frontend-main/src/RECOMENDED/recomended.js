
import Button from "../COMPONENT/button";
import "./recomended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <br></br>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} className="b" value="" title="All Products" />
          <Button onClickHandler={handleClick} className="b" value="Nike" title="Dark" />
          <Button onClickHandler={handleClick} className="b" value="Adidas" title="Light" />
          <Button onClickHandler={handleClick} className="b" value="Puma" title="Philosophical" />
          <Button onClickHandler={handleClick} className="b" value="Vans" title="Comedy" />
        </div>
      </div>
    </>
  );
};

export default Recommended;