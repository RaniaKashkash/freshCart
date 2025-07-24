import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ReviewsTab() {
  return (
    <>
      <section className="p-5 space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-bold ">Reviews</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="">
            <h4 className="text-md font-semibold ">Benefits</h4>
            <ul className="space-y-2 list-disc px-4 py-2 text-gray-600">
              <li>Rich in vitamins C and K</li>
              <li>Good source of fiber and antioxidants</li>
              <li>Supports heart health</li>
              <li>Helps regulate blood sugar</li>
              <li> Promotes healthy skin</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-md font-semibold">Product Details</h4>
            <div className="flex gap-4 semibold ">
              <div className="flex flex-col gap-2 text-gray-600">
                <span>Organic:</span>
                <span>Cultivation:</span>
                <span>Storage:</span>
                <span>Organic:</span>
              </div>
              <div className="flex flex-col gap-2 text-gray-600">
                <span>California, USA</span>
                <span>Organic</span>
                <span>Refrigerate upon arrival</span>
                <span>5-7 days when refrigerated</span>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-md font-semibold">How to Store</h4>
          <p className="text-gray-600">
            For optimal freshness, refrigerate strawberries unwashed in their
            original container or in a paper towel-lined container. Wash just
            before eating. To extend shelf life, remove any damaged berries as
            soon as possible.
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="text-md font-semibold">Certifications</h4>
          <ul className="text-gray-600 flex gap-3 *:flex *:gap-2 *:items-center *:p-2 *:border-gray-200 *:border-1 *:rounded-md ">
            <li>
              <FontAwesomeIcon icon={faLeaf} className="text-primary-600" />
              <span>USDA Organic</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faLeaf} className="text-primary-600" />
              <span>Non-GMO</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
