import { Navigation } from "../../ui/Navigation/Navigation";

export const DefaultLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};
