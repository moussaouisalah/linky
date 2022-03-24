import Spinner from "./Spinner";

const OverlaySpinner = () => {
  return (
    <div className="bg-black bg-opacity-40 z-10 absolute top-0 left-0 w-full h-full flex justify-center items-center">
      <Spinner />
    </div>
  );
};

export default OverlaySpinner;
