import React from "react";
import s from "./Categories.module.scss";

const categories = [
  {
    name: "all",
    text: "전체",
  },
  {
    name: "petshop",
    text: "펫샵",
  },
  {
    name: "shelter",
    text: "보호소",
  },
];

function Categories({ category, onSelect }) {
  return (
    <div className={s.CategoryBlock}>
      {categories.map((c) => (
        <div
          className={`${s.CategoryItem} ${
            category === c.name ? `${s.active}` : ""
          }`}
          key={c.name}
          onClick={() => onSelect(c.name)}
        >
          {c.text}
        </div>
      ))}
    </div>
  );
}

export default Categories;
