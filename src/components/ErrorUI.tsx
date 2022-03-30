import { useNavigate } from "react-router-dom";

type Props = {
  onRedirect: () => void;
};

const ErrorUI = ({ onRedirect }: Props) => {
  let navigate = useNavigate();

  const handleRedirect = () => {
    onRedirect();
    navigate("/");
  };

  return (
    <div className="page__container w-full h-full flex flex-col gap-3 justify-center items-center">
      <h2 className="text-xl font-bold">Oops</h2>
      <p>Something went wrong.</p>
      <button
        onClick={handleRedirect}
        className="text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
      >
        Back to Homepage
      </button>
    </div>
  );
};

export default ErrorUI;
