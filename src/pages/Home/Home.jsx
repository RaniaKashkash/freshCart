import HomeSlider from "../../components/HomeSlider/HomeSlider";
import HomeCatogories from "../../components/HomeCatogories/HomeCatogories";
import HomeFeatures from "../../components/HomeFeatures/HomeFeatures";
import HomeDeals from "../../components/HomeDeals/HomeDeals";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Pagemetadata from "../../components/Pagemetadata/Pagemetadata";
import NewsletterSubscription from "../../components/NewsletterSubscription/NewsletterSubscription";

export default function Home() {
  
  return (
    <>
      <Pagemetadata title="Home Page" />
      <HomeSlider />
      <HomeFeatures />
      <HomeCatogories />
      <HomeDeals />
      <FeaturedProducts />
      <NewsletterSubscription/>
    </>
  );
}
