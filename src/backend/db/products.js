import { v4 as uuid } from "uuid";
import {
  tool1,
  tool2,
  tool3,
  veg1,
  veg2,
  veg3,
  utensil1,
  utensil2,
  utensil3,
} from "../../frontend/assets";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Sickle",
    discountPrice: 1790,
    originalPrice: 2999,
    categoryName: "tool",
    tag: "Best Seller",
    savePercent: 40,
    img: tool1,
    rating: 4.7,
  },
  {
    _id: uuid(),
    name: "Spade",
    discountPrice: 4099,
    originalPrice: 9999,
    categoryName: "tool",
    tag: "",
    savePercent: 59,
    img: tool2,
    rating: 3.7,
  },
  {
    _id: uuid(),
    name: "Spade Fork",
    discountPrice: 6999,
    originalPrice: 9999,
    categoryName: "tool",
    tag: "",
    savePercent: 59,
    img: tool3,
    rating: 3.7,
  },
  {
    _id: uuid(),
    name: "Green Chilli",
    discountPrice: 299,
    originalPrice: 699,
    categoryName: "veg",
    tag: "",
    savePercent: 57,
    img: veg1,
    rating: 4.1,
  },
  {
    _id: uuid(),
    name: "Tomato",
    discountPrice: 1999,
    originalPrice: 1999,
    categoryName: "veg",
    tag: "Limited Time Deal",
    savePercent: 0,
    img: veg2,
    rating: 2.7,
  },
  {
    _id: uuid(),
    name: "Spinach",
    discountPrice: 1999,
    originalPrice: 2599,
    categoryName: "veg",
    tag: "Limited Time Deal",
    savePercent: 0,
    img: veg3,
    rating: 4.7,
  },
  {
    _id: uuid(),
    name: "Pot",
    discountPrice: 2999,
    originalPrice: 6499,
    categoryName: "utensil",
    tag: "Best Seller",
    savePercent: 54,
    img: utensil1,
    rating: 1.7,
  },
  {
    _id: uuid(),
    name: "Vessel",
    discountPrice: 500,
    originalPrice: 1000,
    categoryName: "utensil",
    tag: "",
    savePercent: 0,
    img: utensil2,
    rating: 4.9,
  },
  {
    _id: uuid(),
    name: "Glasses",
    discountPrice: 14350,
    originalPrice: 14350,
    categoryName: "utensil",
    tag: "",
    savePercent: 0,
    img: utensil3,
    rating: 4.9,
  },
];