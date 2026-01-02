import Sidebar from '../../components/Sidebar';
import { navigationItems } from '../../types/navigation';
import { Eye, Target, Lightbulb } from 'lucide-react';

export default function OurVision() {
  const aboutItems = navigationItems.find(item => item.label === 'About Us')?.subItems || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-28 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar title="About Us" items={aboutItems} />

          <main className="flex-1">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-xl p-8 lg:p-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-yellow-500">Vision</span>
              </h1>

              <div className="space-y-12">
                <div className="bg-gradient-to-r from-yellow-500/20 to-transparent border-l-4 border-yellow-500 p-6 rounded-r-xl">
                  <Eye className="w-16 h-16 text-yellow-500 mb-4" />
                  <h2 className="text-3xl font-bold text-white mb-4">Vision Statement</h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    To be the most trusted and respected construction company globally, recognized for our unwavering commitment to quality, innovation, and sustainable development. We envision a future where ANTCLLC sets the benchmark for excellence in infrastructure development, creating lasting value for all stakeholders while contributing positively to society and the environment.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-yellow-500/20 to-transparent border-l-4 border-yellow-500 p-6 rounded-r-xl">
                  <Target className="w-16 h-16 text-yellow-500 mb-4" />
                  <h2 className="text-3xl font-bold text-white mb-4">Mission Statement</h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Our mission is to deliver exceptional construction and infrastructure solutions that exceed client expectations through innovative approaches, superior craftsmanship, and a dedicated team of professionals. We are committed to maintaining the highest standards of quality, safety, and environmental responsibility in every project we undertake.
                  </p>
                </div>

                <div>
                  <Lightbulb className="w-16 h-16 text-yellow-500 mb-6" />
                  <h2 className="text-3xl font-bold text-yellow-500 mb-6">Strategic Objectives</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-black/40 border border-yellow-500/20 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-3">Quality Excellence</h3>
                      <p className="text-gray-400">
                        Maintain ISO certification and continuously improve quality management systems to deliver flawless projects
                      </p>
                    </div>
                    <div className="bg-black/40 border border-yellow-500/20 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-3">Innovation Leadership</h3>
                      <p className="text-gray-400">
                        Embrace cutting-edge technology and innovative construction methods to stay ahead in the industry
                      </p>
                    </div>
                    <div className="bg-black/40 border border-yellow-500/20 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-3">Sustainable Growth</h3>
                      <p className="text-gray-400">
                        Implement environmentally responsible practices and contribute to sustainable development goals
                      </p>
                    </div>
                    <div className="bg-black/40 border border-yellow-500/20 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-3">Team Development</h3>
                      <p className="text-gray-400">
                        Invest in our people through continuous training and create opportunities for professional growth
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-gray-300 text-lg leading-relaxed space-y-4">
                  <h2 className="text-3xl font-bold text-yellow-500 mb-4">Our Commitment</h2>
                  <p>
                    We are committed to building a future where quality infrastructure development goes hand in hand with environmental stewardship and social responsibility. Our vision extends beyond profit to creating meaningful impact in the communities we serve.
                  </p>
                  <p>
                    Through strategic partnerships, continuous innovation, and an unwavering focus on excellence, we aim to shape the future of construction and set new standards for the industry.
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
