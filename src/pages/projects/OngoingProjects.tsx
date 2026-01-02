import Sidebar from '../../components/Sidebar';
import { navigationItems } from '../../types/navigation';
import { MapPin, Calendar, DollarSign } from 'lucide-react';

const projects = [
  {
    title: 'Metro Rail Phase III Extension',
    location: 'Downtown District',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
    budget: '$250M',
    completion: '45%',
    timeline: 'Dec 2026',
    description: 'Expanding the metro rail network with state-of-the-art infrastructure',
  },
  {
    title: 'Skyline Business Tower',
    location: 'Corporate District',
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
    budget: '$180M',
    completion: '60%',
    timeline: 'Jun 2026',
    description: '45-story commercial complex with modern amenities',
  },
  {
    title: 'Green Valley Residential Complex',
    location: 'North Suburbs',
    image: 'https://images.pexels.com/photos/236381/pexels-photo-236381.jpeg?auto=compress&cs=tinysrgb&w=800',
    budget: '$120M',
    completion: '70%',
    timeline: 'Mar 2026',
    description: 'Sustainable residential community with 500+ luxury apartments',
  },
  {
    title: 'Coastal Highway Expansion',
    location: 'Eastern Corridor',
    image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800',
    budget: '$300M',
    completion: '35%',
    timeline: 'Sep 2027',
    description: 'Major highway expansion project improving regional connectivity',
  },
];

export default function OngoingProjects() {
  const projectItems = navigationItems.find(item => item.label === 'Projects')?.subItems || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-28 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar title="Projects" items={projectItems} />

          <main className="flex-1">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-xl p-8 lg:p-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ongoing <span className="text-yellow-500">Projects</span>
              </h1>

              <p className="text-gray-300 text-lg leading-relaxed mb-12">
                Explore our current projects that are shaping the future of infrastructure development. Each project represents our commitment to excellence and innovation.
              </p>

              <div className="space-y-8">
                {projects.map((project, index) => (
                  <div key={index} className="bg-black/40 border border-yellow-500/20 rounded-xl overflow-hidden hover:border-yellow-500/50 transition-all">
                    <div className="md:flex">
                      <div className="md:w-2/5">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-3/5 p-6">
                        <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                        <p className="text-gray-400 mb-4">{project.description}</p>

                        <div className="space-y-3 mb-6">
                          <div className="flex items-center text-gray-300">
                            <MapPin className="w-5 h-5 text-yellow-500 mr-3" />
                            <span>{project.location}</span>
                          </div>
                          <div className="flex items-center text-gray-300">
                            <DollarSign className="w-5 h-5 text-yellow-500 mr-3" />
                            <span>Budget: {project.budget}</span>
                          </div>
                          <div className="flex items-center text-gray-300">
                            <Calendar className="w-5 h-5 text-yellow-500 mr-3" />
                            <span>Expected Completion: {project.timeline}</span>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-sm text-gray-400 mb-2">
                            <span>Project Progress</span>
                            <span>{project.completion}</span>
                          </div>
                          <div className="w-full bg-gray-800 rounded-full h-3">
                            <div
                              className="bg-gradient-to-r from-yellow-500 to-yellow-600 h-3 rounded-full transition-all"
                              style={{ width: project.completion }}
                            />
                          </div>
                        </div>
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
