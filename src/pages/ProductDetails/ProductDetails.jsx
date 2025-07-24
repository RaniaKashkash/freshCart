import { useEffect, useState } from "react";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import ProductTabs from "../../components/ProductTabs/ProductTabs";
import RelatedProduct from "../../components/RelatedProduct/RelatedProduct";
import { getProductById } from "../../services/products-service";
import { useParams } from "react-router";
import Pagemetadata from "../../components/Pagemetadata/Pagemetadata";
import ProductDetailsSkeleton from "../../components/Skeleton/ProductDetailsSkeleton";

export default function ProductDetalis() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  async function fetchProductDetails() {
    try {
      const response = await getProductById({ id });
      if (response.success) {
        setIsLoading(false);
        setProductDetails(response.data.data);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(error);
    }
  }
  useEffect(() => {
    fetchProductDetails();
  }, [id]);
  if (isLoading) {
    return <ProductDetailsSkeleton />;
  }
  return (
    <>
      <div className="bg-gray-50">
        <Pagemetadata
          title={productDetails.title}
          description={productDetails.description}
        />
        <ProductInfo productDetails={productDetails} />
        <ProductTabs productDetails={productDetails} />
        <RelatedProduct productDetails={productDetails} />
      </div>
    </>
  );
}
