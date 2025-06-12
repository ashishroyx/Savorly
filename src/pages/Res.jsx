import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import React from "react";

function Recipe() {
  const { name } = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${name}/information?apiKey=${import.meta.env.VITE_FOODIE_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [name]);

  return (
    <div className="min-h-screen bg-[#A3B18A] px-4 py-8 mt-20">
      <motion.div
        className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-center text-[#344e41] mb-6">
          {details.title}
        </h1>

        <img
          src={details.image}
          alt={details.title}
          className="w-full max-h-[400px] object-cover rounded-xl mb-6 shadow-md"
        />

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setActiveTab("instructions")}
            className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeTab === "instructions"
                ? "bg-[#588157] text-white shadow-md"
                : "bg-gray-200 text-[#344e41] hover:bg-gray-300"
            }`}
          >
            Instructions
          </button>
          <button
            onClick={() => setActiveTab("ingredients")}
            className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeTab === "ingredients"
                ? "bg-[#588157] text-white shadow-md"
                : "bg-gray-200 text-[#344e41] hover:bg-gray-300"
            }`}
          >
            Ingredients
          </button>
        </div>

        {/* Conditional Content */}
        {activeTab === "instructions" && (
          <div className="space-y-4">
            <div
              className="text-gray-800 text-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: details.summary }}
            />
            <div
              className="text-gray-800 text-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: details.instructions }}
            />
          </div>
        )}

        {activeTab === "ingredients" && (
          <ul className="list-disc list-inside space-y-2 text-gray-800 text-base">
            {details.extendedIngredients?.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  );
}

export default Recipe;
