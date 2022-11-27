import React from "react";
import { useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import ErrorImage from "./error_img.json";

const RootError = () => {
  const error = useRouteError();
  return (
    <div>
      <div className="flex items-center justify-center pt-20">
        <Lottie className="w-[400px]" animationData={ErrorImage} loop={true} />
      </div>
      <p className="text-center font-bold">
        <i>{error.statusText || error.message}</i>
        <br />
        <span>Please try again</span>
      </p>
    </div>
  );
};

export default RootError;
