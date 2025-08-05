import { useState } from "react";
import DataImage from "./data";
import { listTools, listProyek } from "./data";
import ProjectDetail from "./components/ProjectDetail.jsx";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (proyek) => {
    setSelectedProject(proyek);
    window.scrollTo(0, 0); 
  };

  const handleBackClick = () => {
    setSelectedProject(null);
    
    setTimeout(() => {
      const projectSection = document.getElementById('project');
      if (projectSection) {
        projectSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  };

  if (selectedProject) {
    return <ProjectDetail project={selectedProject} onBack={handleBackClick} />;
  }

  return (
    <>
      {/* Hero section */}
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Avatar Image" className="w-10 rounded-md" loading="lazy"></img>
            <q>Always be the best version of yourself</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, I’m Geraldo Pannanda Lutan 👋 </h1>
          <p className="text-base/loose mb-6 opacity-50">
            I have a strong interest in software engineering, particularly in mobile application development. Over the past two years, I’ve been continuously deepening my skills and remain eager to keep learning and growing in this field.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="https://drive.google.com/file/d/1ESl8ySX2YeNDL39riFlhEIoOF9ULmY4F/view?usp=sharing" className="bg-gray-600 p-4 rounded-2xl hover:bg-gray-500">Download CV <i className="ri-download-line ri-lg"></i> </a>
            <a href="#project" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">See Project <i className="ri-arrow-right-line ri-lg"></i> </a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Avatar Image" className="lg:w-[500px] lg:h-[500px] md:w-[350px] md:h-[350px] sm:w-[300px] sm:h-[300px] w-[300px] h-[300px] md:ml-auto animate__animated animate__fadeInUp animate__delay-1s rounded-full" loading="lazy"></img>
      </div>

      {/* About section */}
      <div className="about mt-32 py-10" id="about">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <img src={DataImage.HeroImage} alt="Avatar Image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy"></img>
          <p className="text-base/loose mb-10 ">
            Hi, let me intoduce myself my name Geraldo Pannanda Lutan, I'm iOS mobile developer and alumni from Apple Developer Academy @BINUS. Currently I looking for opportunity to be iOS Engineer, feel free to contact me.
          </p>
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="Avatar Image" className="w-12 rounded-md sm:block hidden" loading="lazy"></img>
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1  ">
                  7<span className=" ">+</span> 
                </h1>
                <p>Finished Project</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1  ">
                  2<span className=" ">+</span> 
                </h1>
                <p>Year Programming Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience & Education Section */}
      <div className="experience-education mt-32 py-10">
        <h1 className="text-center text-4xl font-bold mb-12" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Experience & Education</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Work Experience Column */}
          <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true">
            <h2 className="text-3xl font-semibold mb-6">Work Experience</h2>
            <div className="space-y-6">
              <div className="p-6 bg-zinc-800 rounded-lg border border-zinc-700">
                <p className="text-sm text-gray-400 mb-1">Feb 2024 – Jan 2025</p>
                <h3 className="text-xl font-bold">Apple Developer Academy @BINUS</h3>
                <p className="mt-2 text-gray-300">Alumni iOS Developer Apprentice Batch 7</p>
                <ul className="list-disc list-inside mt-2 text-gray-400 text-sm space-y-1">
                  <li>Create 7 CBL (Challenge Base Learning) Project</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education Column */}
          <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
            <h2 className="text-3xl font-semibold mb-6">Education</h2>
            <div className="space-y-6">
              <div className="p-6 bg-zinc-800 rounded-lg border border-zinc-700">
                <p className="text-sm text-gray-400 mb-1">Sep 2024 – Jul 2025</p>
                <h3 className="text-xl font-bold">Bina Nusantara University</h3>
                <p className="mt-2 text-gray-300">Bachelor of Computer Science – Mobile Application & Technology</p>
                <ul className="list-disc list-inside mt-2 text-gray-400 text-sm space-y-1">
                  <li>Current GPA 3.44/4.00.</li>
                  <li>Specialized in functional front end mobile app development.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tools section */}
      <div className="tech mt-32">
        <h1 className="text-4xl/snug font-bold mb-4 " data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tools</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50 " data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">My workspace</p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map((tool) =>(
            <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
              <img src={tool.gambar} alt="Tools" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy"></img>
              <div>
                <h4 className="font-bold ">{tool.nama}</h4>
                <p className="opacity-50 ">{tool.ket}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Project section */}
      <div className="project mt-32 py-10 " id="project">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Project</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Some project i Finish</p>
        <div className="project-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once="true">
              <img src={proyek.gambar[0]} alt="project image" loading="lazy" className="rounded-md"></img>
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <button onClick={() => handleProjectClick(proyek)} className="bg-gray-600 p-3 rounded-lg block border border-zinc-600 hover:bg-gray-500 w-full">
                    Check Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Contact section */}
      <div className="contact mt-32 sm:p-10 p-0 " id="contact">
          <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Contact</h1>
          <p className="textbase/loose text-center mb-19 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Lets connect together.</p>
          <form action="https://formsubmit.co/gpannandalutan@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
            <div  className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Name</label>
                <input type="text" name="Name" placeholder="Enter your name..." className="border border-zinc-500 p-2 rounded-md" required/>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Email</label>
                <input type="text" name="Email" placeholder="Enter your email adress..." className="border border-zinc-500 p-2 rounded-md" required/>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold" htmlFor="message">Message</label>
                <textarea name="message" id="Message" cols="45" rows="7" placeholder="Enter your message..." className="border border-zinc-500 p-2 rounded-md"></textarea>
              </div>
              <div>
                <button className="bg-gray-600 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-gray-500" type="submit">Submit</button>
              </div>
            </div>
          </form>
      </div>
    </>
  )
}

export default App;
