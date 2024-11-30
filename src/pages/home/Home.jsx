
import Banner from "../../pages/banner/Banner";
import Portfolio from "../Portfolio";
import About from "../about/About";
import All from "../portfolio/All";
// import Brand from "../portfolio/Brand";

const Home = () => {
    return (
        <div>
            {/* <h1>home</h1> */}
           <Banner></Banner>
           <About></About>
           <Portfolio></Portfolio>
           <All></All>
           {/* <Brand></Brand> */}
        </div>
    );
};

export default Home;