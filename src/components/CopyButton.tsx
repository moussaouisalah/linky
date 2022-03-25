import { toast } from "react-toastify";

type Props = {
  link: string;
};

const CopyButton = ({ link }: Props) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    toast("Copied to clipboard", {
      type: "success",
      autoClose: 2000,
      style: { backgroundColor: "rgb(31 41 55)" },
    });
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium focus:outline-none rounded-lg border focus:z-10 focus:ring-4 focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700"
    >
      Copy
    </button>
  );
};

export default CopyButton;
