import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../context/categories.context";
import Loading from "../../components/Loading/Loading";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import Pagemetadata from "../../components/Pagemetadata/Pagemetadata";
import CategoriesSkeleton from "../../components/Skeleton/CategoriesSkeleton";

export default function Categories() {
  const { categories, isLoading } = useContext(CategoriesContext);

  if (isLoading) {
    return <CategoriesSkeleton />;
  }
  return (
    <>
      <Pagemetadata title="Categories" />
      <section className="p-10">
        <div className="container">
          <div className="header flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div className="flex flex-col gap-2 mb-4 md:mb-0">
              <h1 className="text-xl font-bold text-black">
                Shop by categories
              </h1>
              <p className="text-gray-500">
                Browse our wide selection of fresh products by category
              </p>
            </div>
          </div>

          <div className="grid xl:grid-cols-3 gap-10">
            {categories?.map((category) => (
              <Link
                key={category._id}
                to={`/categories/${category._id}`}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-200 overflow-hidden"
              >
                <div className="">
                  <div className="aspect-[4/3] w-full">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
