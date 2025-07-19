export default function ContactUsPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg">We would love to hear from you!</p>
      <form className="mt-6 w-full max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 mb-4 border rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 mb-4 border rounded"
          rows={4}
        ></textarea>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
