import React, { useState } from "react";
//function that renders the products section and has the html and css
const Products = ({ products = [] }) => {
  const [expandedStates, setExpandedStates] = useState(
    Array(products.length).fill(false)
  );

  const toggleExpanded = (index) => {
    const newExpandedStates = [...expandedStates];
    newExpandedStates[index] = !newExpandedStates[index];
    setExpandedStates(newExpandedStates);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((product, index) => {
            const { id, title, price, description, category, image } = product;
            return (
              <div
                className="lg:w-1/4 md:w-1/2 p-2 w-full shadow-sm m-2"
                key={id}
              >
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt={title}
                    className="object-contain object-center w-full h-full block"
                    src={image}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {title}
                  </h2>
                  {expandedStates[index] ? (
                    <div>
                      <p className="mt-1 text-md font-semibold">
                        {description}
                      </p>
                      <button
                        onClick={() => toggleExpanded(index)}
                        className="text-blue-500 hover:underline focus:outline-none"
                      >
                        Show Less
                      </button>
                    </div>
                  ) : (
                    <p className="mt-1 text-md font-semibold">
                      {description.slice(0, 100)}
                      {description.length > 100 && (
                        <>
                          <span>...</span>{" "}
                          <button
                            onClick={() => toggleExpanded(index)}
                            className="text-blue-500 hover:underline focus:outline-none"
                          >
                            Show More
                          </button>
                        </>
                      )}
                    </p>
                  )}
                  <p className="mt-1 text-md font-semibold">${price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
