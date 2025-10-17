export default function Contact() {
  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Contact Us</h1>
      <form className="max-w-lg mx-auto bg-white shadow-md p-8 rounded-xl">
        <input type="text" placeholder="Your Name" className="w-full border p-3 rounded mb-4" />
        <input type="email" placeholder="Your Email" className="w-full border p-3 rounded mb-4" />
        <textarea placeholder="Your Message" className="w-full border p-3 rounded mb-4" rows="4"></textarea>
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Send Message</button>
      </form>
    </div>
  );
}
