import img3 from "../../img/undraw1.svg";
import icon1 from "../../img/086-calendar-monochrome.svg";
import icon2 from "../../img/092-entryway-monochrome.svg";
import { Card } from "../../ui/Cards/Card";

export const Features = () => {
  return (
    <div className="flex flex-col justify-center w-full items-center bg-gray-50 text-blue-100">
      <div className="flex flex-col items-center justify-items-center justify-center py-5 mt-16">
        <h1 className="uppercase font-mono font-bold text-4xl">
          Explore some features
        </h1>
      </div>
      <div className="flex justify-center  w-1/3">
        <hr className="w-1/3 border-b-4 border-green" />
      </div>
      <div className="flex justify-center items-center align-middle flex-col w-full mt-20">
        <div className="grid grid-rows-3 h-1/3 grid-flow-col mt-10">
          <div className="row-span-3 w-7/12">
            <div className="flex justify-center items-center justify-items-center flex-row">
              <img src={img3} alt="Img" />
            </div>
          </div>
          <div className="col-span-2 h-1/2 w-full mt-10">
            <div className="flex justify-center flex-row">
              <Card
                icon={icon1}
                title="Create kindergarten"
                text="Create you kindergarten"
              />
              <Card
                icon={icon2}
                title="Create kindergarten"
                text="Create you kindergarten"
              />
              <Card
                icon={icon2}
                title="Create kindergarten"
                text="Create you kindergarten"
              />
            </div>
          </div>
          <div className="row-span-2 col-span-2 h-1/2 w-full mt-10">
            <div className="flex justify-center flex-row">
              <Card
                icon={icon1}
                title="Create kindergarten"
                text="Create you kindergarten"
              />
              <Card
                icon={icon2}
                title="Create kindergarten"
                text="Create you kindergarten"
              />
              <Card
                icon={icon2}
                title="Create kindergarten"
                text="Create you kindergarten"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
