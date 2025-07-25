import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import { useContext } from "react";
import HomeCatogoriesSkeleton from "../Skeleton/HomeCategoriesSkeleton";
import { CategoriesContext } from "../../context/categories.context";

export default function HomeCatogories() {
  const { categories, isLoading } = useContext(CategoriesContext);
  
  if (isLoading) {
    return <HomeCatogoriesSkeleton />;
  }
  return (
    <>
      <div className="bg-gray-100">
        <div className="container py-10">
          <div className="flex items-center justify-between py-8">
            <h2 className="font-bold text-xl">Shop By Category</h2>
            <Link
              to={"categories"}
              className="text-primary-600 font-semibold flex items-center gap-1 hover:text-primary-700"
            >
              <span>View All Categories </span>
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>

          <div className="grid xl:grid-cols-6 gap-10">
            {categories?.map((category) => (
              <Link
                key={category._id}
                to={`categories/${category._id}`}
                className="card rounded-md bg-white  shadow-lg hover:shadow-xl transition-shadow duration-200 flex flex-col gap-2 items-center justify-center p-3"
              >
                <img
                  src={category.image}
                  alt=""
                  className="size-16 rounded-full "
                />
                <span>{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
