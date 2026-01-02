import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-28 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get In <span className="text-yellow-500">Touch</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500/20 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Address</h3>
                    <p className="text-gray-400">
                      123 Business Avenue<br />
                      Corporate District<br />
                      City 500001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500/20 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <p className="text-gray-400">
                      +1 (234) 567-890<br />
                      +1 (234) 567-891
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500/20 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <p className="text-gray-400">
                      info@antcllc.com<br />
                      projects@antcllc.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Business Hours</h2>
              <div className="space-y-2 text-gray-400">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-white">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-white">Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">First Name</label>
                  <input
                    type="text"
                    className="w-full bg-black/40 border border-yellow-500/20 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:outline-none transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Last Name</label>
                  <input
                    type="text"
                    className="w-full bg-black/40 border border-yellow-500/20 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:outline-none transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">Email</label>
                <input
                  type="email"
                  className="w-full bg-black/40 border border-yellow-500/20 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:outline-none transition-colors"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">Phone</label>
                <input
                  type="tel"
                  className="w-full bg-black/40 border border-yellow-500/20 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:outline-none transition-colors"
                  placeholder="+1 (234) 567-890"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">Subject</label>
                <input
                  type="text"
                  className="w-full bg-black/40 border border-yellow-500/20 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:outline-none transition-colors"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">Message</label>
                <textarea
                  rows={6}
                  className="w-full bg-black/40 border border-yellow-500/20 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us more about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-xl overflow-hidden">
          <div className="aspect-[21/9] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648718453!2d-73.98784368459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635959543251!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
