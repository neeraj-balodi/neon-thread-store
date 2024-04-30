import React from "react";
import CategoriesDisplay from "./components/CategoriesDisplay";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      subtitle: "Buy Now",
      imageUrl:
        "https://images.unsplash.com/photo-1534215754734-18e55d13e346?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Jackets",
      subtitle: "Buy Now",

      imageUrl:
        "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Sneakers",
      subtitle: "Buy Now",

      imageUrl:
        "https://images.unsplash.com/photo-1619203442942-d7b682cc2fd3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Women",
      subtitle: "Buy Now",

      imageUrl:
        "https://images.unsplash.com/photo-1529446486093-51f0efc1178b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      title: "Men",
      subtitle: "Buy Now",

      imageUrl:
        "https://images.unsplash.com/photo-1613940102170-122544f054e3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      title: "Kids",
      subtitle: "Buy Now",
      imageUrl:
        "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return <CategoriesDisplay categories={categories} />;
};

export default App;
