import { X, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function GetStarted() {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsApp = () => {
    const phoneNumber = "+91 86885 47851"; // 👈 replace with your WhatsApp number
    const message = encodeURIComponent("Hi! I’d like to know more about your interior design services.");
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      {/* Floating Get Started Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 bg-[#433673] text-white px-6 py-3 rounded-lg hover:bg-[#5a48a6] transition-all shadow-lg hover:shadow-xl z-40 cursor-pointer"
      >
        Get Started
      </button>

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-24 right-8 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-transform duration-300 z-40"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Get Started Today</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form className="p-6 space-y-4">
              <div>
                <label htmlFor="gs-name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="gs-name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#433673] focus:border-transparent outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="gs-email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="gs-email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#433673] focus:border-transparent outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="gs-phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="gs-phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#433673] focus:border-transparent outline-none transition-all"
                  placeholder="+91 9876543210"
                />
              </div>

              <div>
                <label htmlFor="gs-project" className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Type
                </label>
                <select
                  id="gs-project"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#433673] focus:border-transparent outline-none transition-all"
                >
                  <option>Select a project type</option>
                  <option>4 BHK</option>
                  <option>3 BHK</option>
                  <option>2 BHK</option>
                  <option>Villa</option>
                </select>
              </div>

              <div>
                <label htmlFor="gs-budget" className="block text-sm font-semibold text-gray-700 mb-2">
                  Budget Range
                </label>
                <select
                  id="gs-budget"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#433673] focus:border-transparent outline-none transition-all"
                >
                  <option>Select budget range</option>
                  <option>Immediately(0-15 days)</option>
                  <option>Within 1 Month</option>
                  <option>Within 3 Months</option>
                  <option>₹50L+</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-[#433673] text-white py-2 rounded-lg hover:bg-[#5a48a6] transition-colors font-semibold mt-6"
              >
                Schedule Consultation
              </button>
            </form>

            {/* WhatsApp CTA inside modal */}
            <div className="flex justify-center items-center p-4 border-t border-gray-200">
              <button
                onClick={handleWhatsApp}
                className="flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
