import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content:
      "EasyConstruct has been my go-to for all construction materials. The quality of their products and customer service is unmatched. Highly recommended!",
    author: "Rajesh Sharma",
    role: "Independent Contractor",
    image:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: 2,
    content:
      "I've been running my construction business for 15 years, and EasyConstruct has made sourcing materials so much easier. Their delivery is always on time and products are top-notch.",
    author: "Priya Patel",
    role: "Construction Company Owner",
    image:
      "https://images.pexels.com/photos/3776932/pexels-photo-3776932.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: 3,
    content:
      "As an architect, I recommend EasyConstruct to all my clients. They have a wide range of quality products at reasonable prices, which makes my job easier.",
    author: "Vikram Singh",
    role: "Senior Architect",
    image:
      "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">What Our Customers Say</h2>
          <p className="mt-3 max-w-2xl mx-auto text-base text-gray-300">
            Hear from professionals who rely on EasyConstruct for their construction needs.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-800 rounded-lg shadow-lg p-6 relative overflow-hidden group"
            >
              <div className="absolute -top-4 -right-4 text-[#CF5C36]/20 transform transition-transform group-hover:scale-110">
                <Quote size={80} />
              </div>

              <p className="text-gray-300 relative z-10 mb-8">{testimonial.content}</p>

              <div className="flex items-center mt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">{testimonial.author}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
