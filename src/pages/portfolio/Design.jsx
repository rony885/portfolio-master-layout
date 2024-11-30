import image5 from "../../assets/images/15.jpg";
import image6 from "../../assets/images/22.jpg";
import image7 from "../../assets/images/7.jpg";
import item1 from "../../assets/images/item-1.jpg";
import item2 from "../../assets/images/item-2.jpg";

const Design = () => {
  return (
    <div className="flex justify-between flex-wrap items-center">
      <div className="w-[32%] mb-10">
        <img src={image5} alt="image5" />
      </div>
      <div className="w-[32%] mb-10">
        <img src={image6} alt="image6" />
      </div>
      <div className="w-[32%] mb-10">
        <img src={image7} alt="image7" />
      </div>
      <div className="w-[32%] mb-10">
        <img src={item1} alt="item1" />
      </div>
      <div className="w-[32%] mb-10">
        <img src={item2} alt="item2" />
      </div>
    </div>
  );
};

export default Design;
