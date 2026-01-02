import Sidebar from '../../components/Sidebar';
import { navigationItems } from '../../types/navigation';
import { Award, Users, Target, TrendingUp } from 'lucide-react';

export default function Profile() {
  const aboutItems = navigationItems.find(item => item.label === 'About Us')?.subItems || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-28 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar title="About Us" items={aboutItems} />

          <main className="flex-1">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-xl p-8 lg:p-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Company <span className="text-yellow-500">Profile</span>
              </h1>

              <div className="text-gray-300 space-y-8 leading-relaxed text-lg">
                <p>
                  ANTCLLC is a premier construction and infrastructure development company with over 25 years of industry experience. We specialize in delivering world-class projects across residential, commercial, and industrial sectors.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-12">
                  <div className="bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20 rounded-xl p-6">
                    <Award className="w-12 h-12 text-yellow-500 mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-3">ISO Certified</h3>
                    <p className="text-gray-400">
                      Certified for quality management systems ensuring excellence in every project
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20 rounded-xl p-6">
                    <Users className="w-12 h-12 text-yellow-500 mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-3">Expert Team</h3>
                    <p className="text-gray-400">
                      100+ skilled professionals dedicated to delivering exceptional results
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20 rounded-xl p-6">
                    <Target className="w-12 h-12 text-yellow-500 mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-3">500+ Projects</h3>
                    <p className="text-gray-400">
                      Successfully completed projects across multiple sectors and regions
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20 rounded-xl p-6">
                    <TrendingUp className="w-12 h-12 text-yellow-500 mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-3">98% Satisfaction</h3>
                    <p className="text-gray-400">
                      Outstanding client satisfaction rate reflecting our commitment to quality
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-yellow-500 mb-4">Our Expertise</h2>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3">▸</span>
                      Residential Construction and High-Rise Buildings
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3">▸</span>
                      Commercial and Industrial Infrastructure
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3">▸</span>
                      Road and Bridge Construction
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3">▸</span>
                      Water Supply and Drainage Systems
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-3">▸</span>
                      Project Management and Consulting
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-yellow-500 mb-4">Our Values</h2>
                  <p>
                    At ANTCLLC, we are driven by core values that define who we are and how we operate. Integrity, excellence, innovation, sustainability, and customer satisfaction are at the heart of everything we do. We believe in building lasting relationships based on trust, transparency, and mutual respect.
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
