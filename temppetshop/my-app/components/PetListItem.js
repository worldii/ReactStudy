import React from "react";
import Image from "next/image";
import s from "./PetListItem.module.scss";

function PetListItem({ petitem }) {
  const { text, kind, islike, price, description, date, img } = petitem;
  const imgsrc = `/${img}.jpg`;

  return (
    <div className={s.PetListItem}>
      <div className={s.PetListItemImage}>
        <Image src={imgsrc} alt="Vercel Logo" width={150} height={100} />
      </div>
      <div className={s.PetListItemContent}>
        <div className={s.PetListItemTitle}>{text}</div>
        <div className={s.PetListItemPrice}>{price}원</div>
        <div className={s.PetListItemDescription}>{description}</div>
        <div className={s.PetListItemDate}>{date}</div>
      </div>
    </div>
  );
}

export default PetListItem;
