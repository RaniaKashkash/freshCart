import { useEffect, useState } from "react";
import { getAllBrands } from "../../services/brands-service";
import { Link } from "react-router";
import BrandsSkeleton from "../../components/Skeleton/BrandsSkeleton";

export default function Brands() {
  const [brands, setBrands] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getBrands() {
    try {
      setIsLoading(true);

      const response = await getAllBrands();
      if (response.success) {
        setIsLoading(false);
        setBrands(response.data.data);
        console.log(brands);
      }
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  }
  useEffect(() => {
    getBrands();
  }, []);

  if (isLoading) return <BrandsSkeleton />;
  return (
    <>
      <section className="p-10">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {brands?.map((brand) => (
              <Link
                key={brand._id}
                to={`/brands/${brand._id}`}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-200 overflow-hidden"
              >
                <div className="">
                  <div className="aspect-[4/3] w-full">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {brand.name}
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
