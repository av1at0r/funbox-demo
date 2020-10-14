import React, { useCallback, useState } from "react";
import FoodCard from "../../components/FoodCard/FoodCard";
import RootLayout from "../../components/RootLayout/RootLayout";
import classes from "./HomeView.module.scss";

const items = [
  {
    id: 1,
    title: "Нямушка",
    subtitle: "с фуа-гра",
    description: "<b>10</b> порций <br> мышь в подарок",
    detailDescription: "Печень утки разварная с артишоками.",
    weight: "0.5",
    weightUnit: "кг",
  },
  {
    id: 2,
    title: "Нямушка",
    subtitle: "с рыбой",
    description: "<b>40</b> порций <br> <b>2</b> мыши в подарок",
    detailDescription: "Головы щучьи с чесноком да свежайшая сёмгушка.",
    weight: "2",
    weightUnit: "кг",
  },
  {
    id: 3,
    title: "Нямушка",
    subtitle: "с курой",
    description:
      "<b>100</b> порций <br> <b>5</b> мышей в подарок <br> заказчик доволен",
    detailDescription: "Филе из цыплят с трюфелями в бульоне.",
    weight: "5",
    weightUnit: "кг",
    disabled: true,
  },
];

export default function HomeView() {
  const [selected, setSelected] = useState({});

  const handleClick = useCallback(
    (id) => {
      setSelected({ ...selected, [id]: !selected[id] });
    },
    [selected]
  );
  return (
    <RootLayout contentClassName={classes.root}>
      <ul className={classes.list}>
        {items.map((item) => (
          <li key={item.id} className={classes.listItem}>
            <FoodCard
              selected={selected[item.id]}
              onClick={handleClick}
              {...item}
            />
          </li>
        ))}
      </ul>
    </RootLayout>
  );
}
