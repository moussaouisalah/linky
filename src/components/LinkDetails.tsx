import React from "react";
import { BASE_URL } from "../environment";
import { Link } from "../models/link";
import CopyButton from "./CopyButton";

type Props = {
  link: Link;
};

const LinkDetails = ({ link }: Props) => {
  const fullLink = `${BASE_URL}/${link.id}`;
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col">
        <p className="text-sm text-gray-400">{link.redirectTo}</p>
        <p className="text-lg">{fullLink}</p>
      </div>
      <div>
        <CopyButton link={fullLink} />
      </div>
    </div>
  );
};

export default LinkDetails;
