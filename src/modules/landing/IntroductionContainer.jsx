export const IntroductionContainer = () => {
  return (
    <div className="flex px-20 ml-10 flex-col">
      <h1 className="uppercase font-mono font-bold text-7xl">
        Meet your future goals with your mutal funds
      </h1>
      <h2 className="text-gray-100 py-2">
        Invest in best equity linked savings scheme.
      </h2>
      <h2 className="text-gray-100">
        Grow your money by investing in our best mutal funds.
      </h2>
      <div className="flex flex-row mt-6">
        <button class="py-2 px-4 font-semibold rounded-full shadow-md text-white bg-green hover:bg-green-700">
          Click me
        </button>
        <button class="py-2 px-4 ml-6 font-semibold rounded-full shadow-md text-white bg-green transition duration-500 ease-in-out hover:transform hover:-translate-y-1 hover:scale-110">
          Click me
        </button>
      </div>
    </div>
  );
};
