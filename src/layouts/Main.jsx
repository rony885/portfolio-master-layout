import { Outlet } from "react-router-dom";
import MainMenu from "../components/MainMenu";

const Main = () => {
  return (
    <div>
      <MainMenu></MainMenu>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
