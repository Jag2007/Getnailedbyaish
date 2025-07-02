export default function HeroSection() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center text-center">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50 z-0"
        src="https://files.catbox.moe/keqh25.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Soft overlay with custom blur */}
      <div className="absolute inset-0 bg-pink-100/40 backdrop-blur-[0.2px] z-10" />

      {/* Hero Text */}
      <div className="relative z-20 px-4">
        <h1
          className="text-5xl md:text-6xl font-extrabold drop-shadow-md"
          style={{
            WebkitTextStroke: "1px white",
            color: "#ec4899", // pink-500
          }}
        >
          Get Nailed by Aish
        </h1>
        <p className="text-lg mt-5 text-pink-200 drop-shadow-sm">
          Classy. Cute. Custom.
        </p>
      </div>
    </section>
  );
}
