import Sidebar from '../../components/Sidebar';
import { navigationItems } from '../../types/navigation';
import { MapPin, CheckCircle, Award } from 'lucide-react';

const executedProjects = [
  {
    title: 'Grand Plaza Shopping Complex',
    location: 'City Center',
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
    year: '2024',
    description: 'State-of-the-art shopping complex with 200+ retail spaces',
    award: 'Best Commercial Project 2024',
  },
  {
    title: 'Riverside Luxury Apartments',
    location: 'Waterfront District',
    image: 'https://images.pexels.com/photos/236381/pexels-photo-236381.jpeg?auto=compress&cs=tinysrgb&w=800',
    year: '2023',
    description: '300-unit premium residential complex with panoramic views',
    award: 'Excellence in Residential Development',
  },
  {
    title: 'Central Business Park',
    location: 'Technology Hub',
    image: 'https://images.pexels.com/photos/1169084/pexels-photo-1169084.jpeg?auto=compress&cs=tinysrgb&w=800',
    year: '2023',
    description: 'Modern office park spanning 50 acres with sustainable design',
    award: 'Green Building Award',
  },
  {
    title: 'City Ring Road Phase II',
    location: 'Metropolitan Area',
    image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800',
    year: '2022',
    description: '25km highway project connecting major city districts',
    award: 'Infrastructure Excellence Award',
  },
  {
    title: 'Heritage Hospital Complex',
    location: 'Medical District',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
    year: '2022',
    description: '500-bed multi-specialty hospital with advanced facilities',
    award: 'Healthcare Infrastructure Award',
  },
  {
    title: 'Innovation Tech Campus',
    location: 'Silicon Valley Zone',
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
    year: '2021',
    description: 'Corporate campus for leading technology companies',
    award: 'Smart Building Award',
  },
];

export default function ExecutedProjects() {
  const projectItems = navigationItems.find(item => item.label === 'Projects')?.subItems || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-28 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar title="Projects" items={projectItems} />

          <main className="flex-1">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-xl p-8 lg:p-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Executed <span className="text-yellow-500">Projects</span>
              </h1>

              <p className="text-gray-300 text-lg leading-relaxed mb-12">
                Celebrating our legacy of successfully completed projects that stand as testaments to our commitment to quality and excellence. Each project has contributed to building better communities and infrastructure.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {executedProjects.map((project, index) => (
                  <div key={index} className="group bg-black/40 border border-yellow-500/20 rounded-xl overflow-hidden hover:border-yellow-500/50 transition-all hover:transform hover:scale-105 duration-300">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        {project.year}
                      </div>
                      <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full flex items-center space-x-1">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-sm font-semibold">Completed</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <div className="flex items-center text-gray-400 mb-3">
                        <MapPin className="w-4 h-4 text-yellow-500 mr-2" />
                        <span className="text-sm">{project.location}</span>
                      </div>
                      <p className="text-gray-400 mb-4">{project.description}</p>
                      <div className="flex items-center text-yellow-500 bg-yellow-500/10 px-3 py-2 rounded-lg">
                        <Award className="w-5 h-5 mr-2" />
                        <span className="text-sm font-semibold">{project.award}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
