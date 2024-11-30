import aboutImage from "../../assets/images/ah.jpg";

const About = () => {
  return (
    <div className="bg-slate-600 py-9">
      <div className="container mx-auto">
        <h1 className="text-white text-4xl text-center font-semibold">About</h1>
        <div className="flex flex-col-reverse md:gap-48 gap-5 md:flex-row items-center md:mx-0 mx-3">
          <div className="w-full md:w-[50%] mb-4 md:mb-0">
            <img
              src={aboutImage}
              className="h-96 w-96 md:rounded-[30%] rounded-full mx-auto"
              alt="aboutImage"
            />
          </div>

          <div className="w-full md:w-[50%] md:mr-8">
            <h1 className="text-white text-2xl font-medium mb-2">About Me</h1>
            <h2 className="text-white text-xl mb-2">
              Better Web Design & Development
            </h2>
            <p className="text-black-200 mb-2">
              I am a web designer & developer, and I am very passionate and
              dedicated to my work. I have acquired the skills and knowledge
              necessary to make your project a success. I enjoy every step of
              the design & development process, from discussion and
              collaboration.
            </p>

            <h2 className="text-gray-200 font-medium">HTML</h2>
            <div className="w-full bg-gray-200 h-1.5 rounded-md mb-2">
              <div className="w-full bg-indigo-600 h-1.5 rounded-md"></div>
            </div>
            <h2 className="text-gray-200 font-medium">CSS</h2>
            <div className="w-full bg-gray-200 h-1.5 rounded-md mb-2">
              <div className="w-full bg-indigo-600 h-1.5 rounded-md"></div>
            </div>
            <h2 className="text-gray-200 font-medium">JavaScript</h2>
            <div className="w-full bg-gray-200 h-1.5 rounded-md mb-2">
              <div className="w-4/6 bg-indigo-600 h-1.5 rounded-md"></div>
            </div>
            <h2 className="text-gray-200 font-medium">React</h2>
            <div className="w-full bg-gray-200 h-1.5 rounded-md mb-2">
              <div className="w-5/6 bg-indigo-600 h-1.5 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
