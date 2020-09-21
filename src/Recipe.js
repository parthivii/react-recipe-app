import React from "react";
import styles from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={styles.recipe}>
      <h2>{title}</h2>
      <ol>
        {ingredients.map((ingredient) => (
          <li key={Math.random()}>{ingredient.text}</li>
        ))}
      </ol>
      <p>Calories: {calories}</p>
      <img className={styles.image} src={image} alt="" />
    </div>
  );
};

export default Recipe;
