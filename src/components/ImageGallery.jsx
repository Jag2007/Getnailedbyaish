export default function ImageGallery({ placeholderCount = 6 }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: placeholderCount }).map((_, i) => (
        <div
          key={i}
          className="w-full h-40 bg-white border border-dashed border-pink-300 rounded-xl flex items-center justify-center text-pink-400 text-sm"
        >
          Image {i + 1}
        </div>
      ))}
    </div>
  );
}
