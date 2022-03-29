import React from "react";
import { BASE_URL } from "../environment";
import { Link } from "../models/link";
import CopyButton from "./CopyButton";

type Props = {
  link: Link;
  onGenerateNew: () => void;
};

const ShowGeneratedLink = ({ link, onGenerateNew }: Props) => {
  const fullLink = `${BASE_URL}/${link.id}`;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col">
        <p className="text-sm text-gray-400">heres your link:</p>
        <p className="text-lg">{fullLink}</p>
      </div>
      <div className="flex gap-1">
        <CopyButton link={fullLink} />
        <button
          onClick={onGenerateNew}
          className="text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
        >
          Generate New
        </button>
      </div>
    </div>
  );
};

export default ShowGeneratedLink;
