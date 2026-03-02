import { Star } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Reviews() {
  const reviews = [
    {
      name: "Michael Chen",
      date: "1 week ago",
      rating: 5,
      text: "Called Heat Inc for an emergency AC repair on the hottest day of summer. They were here in under 90 minutes and had us back up and running. Professional, fast, and fairly priced. This is how HVAC service should be done."
    },
    {
      name: "Sarah Rodriguez",
      date: "2 weeks ago",
      rating: 5,
      text: "Just had a new system installed. The team was incredibly knowledgeable about energy efficiency and helped me choose the perfect unit for my home. Installation was clean and quick. Really impressed with this company."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section className="py-24 bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white mb-4 tracking-tight">
            Client Reviews
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-xl text-neutral-400 font-light">
            New company, already making an impact
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative h-[300px]">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-500 ${
                index === currentIndex 
                  ? 'opacity-100 translate-x-0' 
                  : index < currentIndex 
                    ? 'opacity-0 -translate-x-full' 
                    : 'opacity-0 translate-x-full'
              }`}
            >
              <div className="p-10 bg-neutral-900 border border-neutral-800 rounded-2xl h-full flex flex-col justify-center">
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-lg text-neutral-300 mb-8 leading-relaxed font-light">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between border-t border-neutral-800 pt-6">
                  <div>
                    <p className="font-bold text-white">{review.name}</p>
                    <p className="text-sm text-neutral-500">{review.date}</p>
                  </div>
                  <div className="text-neutral-600 text-sm font-medium">Google Review</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-red-500 w-8' 
                  : 'bg-neutral-700 hover:bg-neutral-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
