import { DefaultLayout } from "./modules/layouts/DefaultLayout";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <DefaultLayout>
      <LandingPage />
    </DefaultLayout>
  );
};

export default App;
