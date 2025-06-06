import { Link } from "react-router";

import Lottie from "lottie-react";
import errorAnimation from "../../assets/lotties/error.json";

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-center p-4">
      <div className="max-w-md">
        <Lottie
          animationData={errorAnimation}
          loop
          autoplay
          className="w-full h-60"
        />
        <p className="md:text-nowrap">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="btn mt-4 btn-primary hover:bg-success hover:border-none md:mb-16"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
