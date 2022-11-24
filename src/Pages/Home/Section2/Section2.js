import React, { useEffect, useState } from "react";
import Category from "./Category";

const Section2 = () => {
  const [categories, setCategories] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);
  return (
    <section className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div>
        <h2 className="text-3xl font-bold text-center py-10">Book Category</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {categories?.map((category) => (
          <Category key={category._id} category={category}></Category>
        ))}
      </div>
    </section>
  );
};

export default Section2;
