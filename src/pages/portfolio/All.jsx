import image1 from "../../assets/images/1.jpg";
import image2 from "../../assets/images/2.jpg";
import image3 from "../../assets/images/3.jpg";
import image4 from "../../assets/images/14.jpg";
import image5 from "../../assets/images/15.jpg";
import image6 from "../../assets/images/22.jpg";
import image7 from "../../assets/images/7.jpg";
import item1 from "../../assets/images/item-1.jpg";
import item2 from "../../assets/images/item-2.jpg";

const All = () => {
  return (
    <div className="flex justify-between flex-wrap items-center">
      <div className="w-[32%] mb-5">
        <img src={image1} alt="image1" />
      </div>
      <div className="w-[32%] mb-5">
        <img src={image2} alt="image2" />
      </div>
      <div className="w-[32%] mb-5">
        <img src={image3} alt="image3" />
      </div>
      <div className="w-[32%] mb-5">
        <img src={image4} alt="image4" />
      </div>
      <div className="w-[32%] mb-5">
        <img src={image5} alt="image5" />
      </div>
      <div className="w-[32%] mb-5">
        <img src={image6} alt="image6" />
      </div>
      <div className="w-[32%] mb-5">
        <img src={image7} alt="image7" />
      </div>
      <div className="w-[32%] mb-5">
        <img src={item1} alt="item1" />
      </div>
      <div className="w-[32%] mb-5">
        <img src={item2} alt="item2" />
      </div>
    </div>
  );
};

export default All;
