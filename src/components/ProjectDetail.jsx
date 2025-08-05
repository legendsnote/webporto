import { Carousel } from 'react-responsive-carousel';

const ProjectDetail = ({ project, onBack }) => {
  if (!project) {
    return null;
  }

  return (
    <div className="project-detail py-10 animate__animated animate__fadeIn">
      <button onClick={onBack} className="bg-zinc-700 p-3 rounded-lg mb-8 hover:bg-zinc-600 flex items-center gap-2 transition-colors">
        <i className="ri-arrow-left-line"></i>
        Back
      </button>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="project-image" data-aos="fade-right" data-aos-duration="1000">
          <Carousel
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            showStatus={false}
            className="rounded-lg overflow-hidden"
          >
            {project.gambar.map((img, index) => (
              <div key={index}>
                <img src={img} alt={`${project.nama} - slide ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="project-info" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
          <h1 className="text-4xl font-bold mb-4">{project.nama}</h1>

          {/* Updated Description Section */}
          <div className="text-base/loose text-gray-400 mb-6">
            {Array.isArray(project.detailedDesc) ? (
              project.detailedDesc.map((paragraph, index) => (
                <p key={index} className="mb-4"> {/* Added margin-bottom for spacing */}
                  {paragraph}
                </p>
              ))
            ) : (
              <p>{project.detailedDesc || project.desk}</p>
            )}
          </div>

          <h2 className="text-2xl font-semibold mb-4 mt-8">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.tools.map((tool, index) => (
              <span key={index} className="py-2 px-4 border border-zinc-600 bg-zinc-700 rounded-lg font-semibold text-sm">
                {tool}
              </span>
            ))}
          </div>

          {project.prototypeLink && (
            <div className="mt-8">
              <a
                href={project.prototypeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-600 p-3 rounded-lg border border-zinc-600 hover:bg-gray-500 transition-colors font-semibold"
              >
                <i className="ri-download-2-line ri-lg"></i>
                Download Prototype
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
