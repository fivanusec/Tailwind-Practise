import { MainContainer } from "./MainContainer";
import img1 from "../../img/undraw2.svg";
import { IntroductionContainer } from "./IntroductionContainer";
import { SavingsSection } from "./SavingsSection";
import { Features } from "./Features";
import { SineTransition } from "./SineTransition";

export const LandingPage = () => {
  return (
    <MainContainer>
      <div className="flex w-full bg-blue-100 justify-center text-white p-4">
        <div className="flex justify-center flex-col w-1/2 inset-y-0 left-0">
          <IntroductionContainer />
        </div>
        <div className="flex inset-y-0 justify-center w-1/2 right-0 mt-10">
          <img
            className="flex w-3/4 h-3/4 right-0 top-0"
            src={img1}
            alt="Img 1"
          />
        </div>
      </div>
      <SineTransition color="#030a64" />
      <SavingsSection />
      <Features />
    </MainContainer>
  );
};
