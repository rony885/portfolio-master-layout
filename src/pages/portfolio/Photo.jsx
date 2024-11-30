import image2 from "../../assets/images/2.jpg";
import image3 from "../../assets/images/3.jpg";

const Photo = () => {
  return (
    <div className="flex justify-between flex-wrap">
      <div className="w-[32%]">
        <img src={image2} alt="image2" />
      </div>
      <div className="w-[32%]">
        <img src={image3} alt="image3" />
      </div>
    </div>
  );
};

export default Photo;
