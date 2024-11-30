import bannerImg from "../../assets/images/hb.jpg";

const Banner = () => {
  return (
    <div className="bg-slate-600 py-16">
      <div className="container mx-auto">
        <div className="main flex flex-col md:flex-row md:gap-96 gap-0 items-center">
          <div className="menu text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-cyan-500 text-5xl font-semibold mb-4">
              Hello!
            </h1>
            <h2 className="text-white text-5xl font-semibold mb-4">
              My Name is Rony
            </h2>
            <p className="text-3xl text-slate-400 font-semibold mb-4">
              Frontend Developer
            </p>
            <button
              className="text-xl border rounded-lg px-3 py-2 bg-cyan-500 font-semibold
                         text-white hover:bg-teal-500 hover:text-orange-200 duration-300 ease-in"
            >
              Contact Me
            </button>
          </div>
          <div className="banner">
            <img
              src={bannerImg}
              className="h-[400px] w-full md:w-60% rounded-[50%]"
              alt="bannerImg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
