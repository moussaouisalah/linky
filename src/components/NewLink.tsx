import { useState } from "react";
import { verifyUrl } from "../helpers";

type Props = {
  onCreate: (verifiedUrl: string) => void;
};

const NewLink = ({ onCreate }: Props) => {
  const [linkInput, setLinkInput] = useState("");
  const [isBadUrl, setBadUrl] = useState(false);

  const handleGenerateLink = () => {
    if (!verifyUrl(linkInput)) {
      setBadUrl(true);
      return;
    }
    onCreate(linkInput);
    setLinkInput("");
    setBadUrl(false);
  };

  return (
    <div className="w-full">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        Redirect to
      </label>
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
          </div>
          <input
            type="text"
            value={linkInput}
            onChange={(e) => setLinkInput(e.target.value)}
            className={
              "border text-sm rounded-lg block w-full pl-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 " +
              (isBadUrl ? "border-red-500" : "")
            }
            placeholder="https://example.com"
          />
        </div>
        <button
          onClick={handleGenerateLink}
          className="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800"
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default NewLink;
