export default function About() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-tr from-blue-100 via-white to-blue-200">
      <main className="flex flex-col items-center justify-center flex-grow">
        <div className="bg-white shadow-xl rounded-3xl p-10 max-w-2xl mx-auto mt-16 mb-8">
          {/* Put your brand logo or an image here */}
          <img
            src="https://user-gen-media-assets.s3.amazonaws.com/seedream_images/65a3bc16-16cf-450b-8c83-16eecd755700.png" // Use your actual logo path or relevant image
            alt="Quickky Logo"
            className="mx-auto mb-5 h-16 w-16 rounded-full shadow-md"
          />
          <h1 className="text-5xl font-extrabold mb-6 text-blue-600 tracking-tight drop-shadow-sm">
            About Quickky
          </h1>
          <p className="text-gray-700 leading-relaxed text-xl mb-2">
            Quickky helps you find and book trusted local service providers instantly.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Whether you need a photographer, plumber, or makeup artist — we bring professionals to your doorstep.
          </p>
        </div>
      </main>
      <footer className="bg-blue-50 shadow-inner py-6 mt-auto text-center text-gray-500 text-sm rounded-t-2xl">
        © 2025 Quickky. All rights reserved.
      </footer>
    </div>
  );
}
