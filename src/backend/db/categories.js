import { v4 as uuid } from "uuid";
import { Carousel1, Carousel2, Carousel3 } from "../../frontend/assets";
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Hercules",
    img: Carousel1,
    imgAltText: "Mud Utensils",
    imgId: "monitor-img",
  },
  {
    _id: uuid(),
    categoryName: "BMX",
    img: Carousel2,
    imgAltText: "vegetables",
    imgId: "chair-img",
  },
  {
    _id: uuid(),
    categoryName: "Mountain Bikes",
    img: Carousel3,
    imgAltText: "farming tools",
    imgId: "keyboard-img",
  },
];
