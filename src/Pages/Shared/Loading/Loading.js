import React from "react";
import Loader from "./loading.json";
import Lottie from "lottie-react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <Lottie animationData={Loader} loop={true} />
    </div>
  );
};

export default Loading;
