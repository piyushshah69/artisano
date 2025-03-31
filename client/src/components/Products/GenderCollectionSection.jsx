import { Link } from "react-router-dom";
import mensCollectionImage from "../../assets/bags.webp";
import womensCollectionImage from "../../assets/jwellery.avif";

function GenderCollectionSection() {
  return (
    <section className="py-6 md:py-8 lg:py-12 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        <div className="relative flex-1">
          <img src={womensCollectionImage} className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover" />
          <div className="absolute bottom-8 left-8 bg-white/80 p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Handcrafted Jewellery</h2>
            <Link to='/collections/all?category=Jewellery' className="text-gray-900 underline">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="relative flex-1">
          <img src={mensCollectionImage} className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover" />
          <div className="absolute bottom-8 left-8 bg-white/80 p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Handcrafted Bags</h2>
            <Link to='/collections/all?category=bags' className="text-gray-900 underline">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GenderCollectionSection;