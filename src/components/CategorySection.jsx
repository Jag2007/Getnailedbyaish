import ImageGallery from "./ImageGallery";

export default function CategorySection() {
  return (
    <section id="categories" className="p-6 space-y-10">
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-pink-700">
          💅 Under ₹500
        </h2>
        <ImageGallery placeholderCount={6} />
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-pink-700">
          💅 ₹500 – ₹999
        </h2>
        <ImageGallery placeholderCount={6} />
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-pink-700">💅 ₹1000+</h2>
        <ImageGallery placeholderCount={6} />
      </div>
    </section>
  );
}
