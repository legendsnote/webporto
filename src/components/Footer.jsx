const Footer = () => {
  return (
    <div className="text-white mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
        <h1 className="text-2xl font-bold">Geraldo Portofolio</h1>
        <div className="flex gap-7">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#project">Project</a>
        </div>
        <div className=" flex items-center gap-3">
            <a href="https://github.com/legendsnote">
                <i className="ri-github-fill ri-2x"></i>
            </a>
            <a href="https://www.instagram.com/g.lutan_pl?igsh=MTgxYWl2cmVuemo1YQ%3D%3D&utm_source=qr">
                <i className="ri-instagram-fill ri-2x"></i>
            </a>
            <a href="https://www.facebook.com/share/16sLuyQGKT/">
                <i className="ri-facebook-fill ri-2x"></i>
            </a>
            <a href="www.linkedin.com/in/geraldo-pannanda-lutan">
                <i className="ri-linkedin-fill ri-2x"></i>
            </a>
        </div>
    </div>
  );
};

export default Footer