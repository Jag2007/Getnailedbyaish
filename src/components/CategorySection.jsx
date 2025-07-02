import ImageGallery from "./ImageGallery";

export default function CategorySection() {
  return (
    <section id="categories" className="p-6 space-y-10">
      {["Solid Hues", "Best in the Market", "Customer Favourites"].map(
        (label, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold mb-4">
              <span className="bg-[#e10053] text-[#f8d4e6] px-3 py-1 rounded-xl shadow-sm inline-block">
                💅 {label}
              </span>
            </h2>
            <ImageGallery placeholderCount={6} />
          </div>
        )
      )}
    </section>
  );
}
