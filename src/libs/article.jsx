import {
  FaArrowsRotate,
  FaBasketShopping,
  FaArrowRotateLeft,
} from "react-icons/fa6";
import { IoHomeSharp } from "react-icons/io5";
import { BsEmojiSmile, BsPlugin } from "react-icons/bs";

const cardsServices = [
  {
    id: 1,
    icon: <FaArrowsRotate size={30} />,
    title: "Marketing Consulting",
  },
  {
    id: 2,
    icon: <IoHomeSharp size={30} />,
    title: "Market Analysis",
  },
  {
    id: 3,
    icon: <FaBasketShopping size={30} />,
    title: "Easy Purchase",
  },
  {
    id: 4,
    icon: <FaArrowRotateLeft size={30} />,
    title: "Free Updates",
  },
  {
    id: 5,
    icon: <BsEmojiSmile size={30} />,
    title: "100% Satistified",
  },
  {
    id: 6,
    icon: <BsPlugin size={30} />,
    title: "Easy Plugin",
  },
];

const ourTeam = [
  {
    id: 1,
    image: "/image1.webp",
    name: "Cloe Marena",
    skill: "PRESIDENT",
  },
  {
    id: 2,
    image: "/image2.webp",
    name: "John Rooster",
    skill: "MARKETING",
  },
  {
    id: 3,
    image: "/image3.webp",
    name: "Will Turner",
    skill: "MARKETING",
  },
  {
    id: 4,
    image: "/image4.webp",
    name: "Nicolas Stainer",
    skill: "FINANCING",
  },
  {
    id: 5,
    image: "/image5.webp",
    name: "George Brook",
    skill: "FOUNDER",
  },
  {
    id: 6,
    image: "/image6.webp",
    name: "Emely Hopson",
    skill: "MARKETING",
  },
];

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    image: "/image3.webp",
    text: "Lorem ipsum dolor sit amet consectetur adipisincing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiane explicabo animi minima fuga beatae ilum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.",
  },
  {
    id: 2,
    name: "Robert Aguilar",
    image: "/image2.webp",
    text: "Lorem ipsum dolor sit amet consectetur adipisincing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiane explicabo animi minima fuga beatae ilum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.",
  },
  {
    id: 3,
    name: "Roger Spears",
    image: "/image4.webp",
    text: "Lorem ipsum dolor sit amet consectetur adipisincing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiane explicabo animi minima fuga beatae ilum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.",
  },
  {
    id: 4,
    name: "Kyle McDonald",
    image: "/image1.webp",
    text: "Lorem ipsum dolor sit amet consectetur adipisincing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiane explicabo animi minima fuga beatae ilum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.",
  },
];

const blogs = [
  {
    id: 1,
    title: "Make Your Business More Profitable",
    sou: "Ham Brook",
    image: "/imageBlog1.webp",
  },
  {
    id: 2,
    title: "Make Your Business More Profitable",
    sou: "James Phelps",
    image: "/imageBlog2.webp",
  },
  {
    id: 3,
    title: "Make Your Business More Profitable",
    sou: "James Phelps",
    image: "/imageBlog3.webp",
  },
];

export { cardsServices, ourTeam, testimonials, blogs };
