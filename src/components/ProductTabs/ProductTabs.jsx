import { useState } from "react"
import ProductTabInfo from "./ProductTabInfo";
import ReviewsTab from "./ReviewsTab";
import ShippingTab from "./ShippingTab";

export default function ProductTabs({productDetails}) {
  const [activeTab,setActiveTab]=useState('details');
  function getActiveTab(){
  switch(activeTab)
  {
    case 'details':
      return <ProductTabInfo productDetails={productDetails}/>
    case 'reviews':
      return <ReviewsTab/>
    case 'shipping':
      return <ShippingTab/>
    default:
      return <ProductTabInfo/>
  }
}

  return <>
  <section>
    <div className="container bg-white p-0">
     <div className="tabs space-x-6 *:p-3 border-b-1 border-gray-100">
      <button className= {`${activeTab=='details'?" border-b-2 border-b-primary-600 text-primary-600":"text-gray-600"}`} onClick={()=>{setActiveTab('details')}}>Product Details</button>
      <button className= {`${activeTab=='reviews'?" border-b-2 border-b-primary-600 text-primary-600":"text-gray-600"}`} onClick={()=>{setActiveTab('reviews')}}>Reviews (149)</button>
      <button className= {`${activeTab=='shipping'?" border-b-2 border-b-primary-600 text-primary-600":"text-gray-600"}`} onClick={()=>{setActiveTab('shipping')}}>Shipping & Returns</button>
      </div>
      {getActiveTab()}
     </div>
  </section>
  </>
}
