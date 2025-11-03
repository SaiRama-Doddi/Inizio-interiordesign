import { useRef } from "react";
import emailjs from "emailjs-com";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",   // replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID",  // replace with your EmailJS template ID
        form.current,
        "YOUR_PUBLIC_KEY"    // replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Message sent successfully!");
          e.target.reset(); // clear form
        },
        (error) => {
          console.log(error.text);
          alert("❌ Failed to send message. Try again later.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Create Something Beautiful Together
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ready to transform your space? Get in touch with our team for a free consultation and let's bring your vision to life.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#BDB8D9] p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-[#433673]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Call Us</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#BDB8D9] p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-[#433673]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email Us</p>
                  <p className="text-gray-600">sairama1026@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-[#BDB8D9] p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-[#433673]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Visit Us</p>
                  <p className="text-gray-600">123 Design Street, New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <form ref={form as React.RefObject<HTMLFormElement>} onSubmit={sendEmail} className="space-y-6">
              <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="user_name"
                id="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                placeholder="John Doe"
              />
              </div>

              <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="user_email"
                id="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                placeholder="john@example.com"
              />
              </div>

              <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none resize-none"
                placeholder="Tell us about your project..."
              ></textarea>
              </div>

              <button
              type="submit"
              className="w-full bg-[#362C59] text-white py-3 rounded-lg hover:bg-[#433673] transition-colors font-semibold"
              >
              Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
