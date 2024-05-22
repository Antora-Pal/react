//all images imported from images directory
import product_01_image_01 from "../images/product_01.jpg";
import product_01_image_02 from "../images/product_01.1.jpg";
import product_01_image_03 from "../images/product_01.3.jpg";

import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";

import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_03_image_03 from "../images/product_3.3.jpg";

import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";
import product_04_image_03 from "../images/product_4.3.png";

import product_05_image_01 from "../images/product_04.jpg";
import product_05_image_02 from "../images/product_08.jpg";
import product_05_image_03 from "../images/product_09.jpg";

import product_06_image_01 from "../images/c1.jpg";
import product_06_image_02 from "../images/c2.jpg";
import product_06_image_03 from "../images/c3.jpeg";

import product_07_image_01 from "../images/c2.jpg";
import product_07_image_02 from "../images/c2.jpg";
import product_07_image_03 from "../images/c3.jpeg";


import product_08_image_01 from "../images/b1.jpg";
import product_08_image_02 from "../images/b2.jpeg";
import product_08_image_03 from "../images/b3.jpg";

import product_09_image_01 from "../images/b2.jpeg";
import product_09_image_02 from "../images/b2.jpeg";
import product_09_image_03 from "../images/b3.jpg";

import product_10_image_01 from "../images/b3.jpg";
import product_10_image_02 from "../images/b2.jpeg";
import product_10_image_03 from "../images/b3.jpg";


import product_11_image_01 from "../images/l1.jpeg";
import product_11_image_02 from "../images/l2.jpeg";
import product_11_image_03 from "../images/l3.jpg";

import product_12_image_01 from "../images/l2.jpeg";
import product_12_image_02 from "../images/l2.jpeg";
import product_12_image_03 from "../images/l3.jpg";

import product_13_image_01 from "../images/l3.jpg";
import product_13_image_02 from "../images/l2.jpeg";
import product_13_image_03 from "../images/l3.jpg";

const products = [
{
  id: "01",
 title: "Chicken Burger",
   price: 24.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Burger",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
  },

  {
    id: "02",
    title: "Vegetarian Pizza",
    price: 115.0,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: "Pizza",
    
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "03",
    title: "Double Cheese Margherita",
    price: 110.0,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: "Pizza",
    
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "04",
    title: "Maxican Green Wave",
    price: 110.0,
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: "Pizza",
    
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

 {
  id: "05",
  title: "Cheese Burger",
   price: 24.0,
   image01: product_05_image_01,
   image02: product_05_image_02,
    image03: product_05_image_03,
    category: "Burger",
 
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
   id: "06",
   title: "Royal Cheese Burger",
   price: 24.0,
   image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
   category: "Burger",

   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
 },

  {
    id: "07",
    title: "Seafood Pizza",
    price: 115.0,
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: "Pizza",
    
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "08",
    title: "Thin Cheese Pizza",
    price: 110.0,
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: "Pizza",
    
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "09",
    title: "Pizza With Mushroom",
    price: 110.0,
    image01: product_04_image_02,
    image02: product_04_image_01,
    image03: product_04_image_03,
    category: "Pizza",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

{
  id: "10",
   title: "Classic Hamburger",
    price: 24.0,
  image01: product_05_image_02,
  image02: product_05_image_01,
   image03: product_05_image_03,
   category: "Burger",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
   },

   {
    id: "11",
    title: "Chowmin & Manchurian",
    price: 35.0,
    image01: product_06_image_01,
    image02: product_06_image_02,
    image03: product_06_image_03,
   category: "Chowmin",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
   },

   {
    id: "12",
   title: "Chinese Chowmin & Manchurian ",
  price: 35.0,
  image01: product_06_image_01,
  image02: product_06_image_02,
   image03: product_06_image_03,
   category: "Chowmin",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

{
  id: "13",
 title: "Spicy Veg Chowmin & Chicken Manchurian",
price: 35.0,
image01: product_07_image_01,
image02: product_07_image_02,
 image03: product_07_image_03,
 category: "Chowmin",

  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
},
{
  id: "14",
 title: "Spicy Chicken Biriyani ",
price: 35.0,
image01: product_08_image_01,
image02: product_08_image_02,
 image03: product_08_image_03,
 category: "Biriyani",

  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
},
{
  id: "15",
 title: "Chicken Handi Biriyani",
price: 35.0,
image01: product_09_image_01,
image02: product_09_image_02,
 image03: product_09_image_03,
 category: "Biriyani",

  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
},
{
  id: "16",
 title: "Mutton Handi Biriyani ",
price: 35.0,
image01: product_10_image_01,
image02: product_10_image_02,
 image03: product_10_image_03,
 category: "Biriyani",

  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
},
{
  id: "17",
 title: "Spicy Chicken Lolipop",
price: 35.0,
image01: product_11_image_01,
image02: product_11_image_02,
 image03: product_11_image_03,
 category: "Lolipop",

  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
},
{
  id: "18",
 title: "Dry Chicken Lolipop ",
price: 35.0,
image01: product_12_image_01,
image02: product_12_image_02,
 image03: product_12_image_03,
 category: "Lolipop",

  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
},
{
  id: "19",
 title: "Gravy Chicken Lolipop ",
price: 35.0,
image01: product_13_image_01,
image02: product_13_image_02,
 image03: product_13_image_03,
 category: "Lolipop",

  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
},

];

export default products;
