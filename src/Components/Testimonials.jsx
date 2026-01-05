import React, { useState } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'Project Manager, TechCorp',
      content: 'Jashim delivered our project ahead of schedule with exceptional quality. His attention to detail and problem-solving skills are remarkable.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=200'
    },
    {
      name: 'Michael Chen',
      position: 'CEO, StartupXYZ',
      content: 'Working with Jashim was a game-changer for our startup. He understood our vision perfectly and delivered beyond expectations.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200'
    },
    {
      name: 'Emma Rodriguez',
      position: 'Product Lead, DigitalAgency',
      content: 'Jashim\'s technical expertise and communication skills are outstanding. He transformed our complex requirements into a beautiful application.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="section-padding bg-base-200">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in-up">
          Client <span className="text-primary">Testimonials</span>
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          What people say about working with me
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="card bg-base-100 shadow-xl">
                      <div className="card-body">
                        <div className="text-4xl text-primary/20 mb-4">
                          <FaQuoteLeft />
                        </div>
                        
                        <p className="text-lg italic text-gray-600 mb-6">
                          "{testimonial.content}"
                        </p>
                        
                        <div className="flex items-center gap-4">
                          <div className="avatar">
                            <div className="w-16 rounded-full ring-2 ring-primary ring-offset-2">
                              <img src={testimonial.image} alt={testimonial.name} />
                            </div>
                          </div>
                          <div>
                            <h4 className="font-bold text-xl">{testimonial.name}</h4>
                            <p className="text-gray-600">{testimonial.position}</p>
                            <div className="flex gap-1 mt-1">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <FaStar key={i} className="text-yellow-500" />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 btn btn-circle btn-primary"
            >
              <FaChevronLeft />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 btn btn-circle btn-primary"
            >
              <FaChevronRight />
            </button>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;