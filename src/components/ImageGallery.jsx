import { Image as ImageIcon } from "lucide-react";

export default function ImageGallery({ placeholderCount = 6 }) {
  return (
    <div className="bg-gradient-to-br from-[#f8d4e6] via-white to-[#f8d4e6] rounded-3xl p-2 sm:p-4 md:p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-8">
        {Array.from({ length: placeholderCount }).map((_, i) => (
          <div
            key={i}
            className="group flex flex-col items-center bg-white rounded-2xl shadow-xl border-2 border-[#f8d4e6] transition-transform duration-200 hover:scale-105 hover:border-[#e10053] overflow-hidden w-full"
          >
            <div className="w-full aspect-square flex items-center justify-center bg-gradient-to-tr from-[#e7b2c6] via-[#fff0f6] to-[#e28dac]">
              <ImageIcon className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#e10053] opacity-60" />
            </div>
            <div className="p-1 sm:p-2 md:p-4 flex flex-col gap-1 w-full">
              <h3 className="text-[#e10053] font-bold text-xs sm:text-sm md:text-base mb-1 text-center">
                Collection Name {i + 1}
              </h3>
              <p className="text-[#c3547d] text-[10px] sm:text-xs md:text-sm text-center leading-snug">
                Decription of the collection .<br />
                Decription of the collection.
                <br />
                Decription of the collection.
                <br />
                Decription of the collection.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
