import React from "react";
import { NavigationLinks } from "./NavigationLinks";

export const Navigation = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-100 p-6">
      <div className="mr-auto ml-14 text-white">
        <h1 className="uppercase ml-5 font-mono text-4xl">Hello world</h1>
      </div>
      <div className="inline-flex flex-row justify-items-center text-white mr-7">
        <NavigationLinks />
      </div>
    </nav>
  );
};
