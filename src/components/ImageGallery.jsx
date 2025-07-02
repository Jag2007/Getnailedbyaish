export default function ImageGallery({ placeholderCount = 6 }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: placeholderCount }).map((_, i) => (
        <div
          key={i}
          className="w-full h-40 rounded-xl flex items-center justify-center text-sm"
          style={{
            backgroundColor: "#e7b2c6",
            border: "2px dashed #fff",
            color: "#e28dac",
          }}
        >
          Image {i + 1}
        </div>
      ))}
    </div>
  );
}
