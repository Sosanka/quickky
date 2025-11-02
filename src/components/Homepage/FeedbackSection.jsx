import React from "react";

const FeedbackSection = () => {
  const feedbacks = [
    {
      name: "Sosanka Sarmah",
      feedback: "The Photograper I booked was fantastic. Highly recommended.",
    },
    {
      name: "Rahul Saikia",
      feedback: "Photographer service was top-notch.",
    },
    {
      name: "Ritu Barua",
      feedback: "Loved the quick booking process. Easy and smooth",
    },
  ];
  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-3xl font-heading text-center mb-10 text-primary">
        Customer <span className="text-accent">Feedback</span>
      </h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {feedbacks.map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <p className="text-gray-600 italic mb-4">“{item.feedback}”</p>
            <h4 className="text-primary font-semibold">{item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeedbackSection;
