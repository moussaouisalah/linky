import React from "react";
import { BASE_URL } from "../environment";
import { Link } from "../models/link";

type Props = {
  link: Link;
  onGenerateNew: () => void;
};

const ShowGeneratedLink = ({ link, onGenerateNew }: Props) => {
  const fullLink = `${BASE_URL}/${link.id}`;

  const handleCopy = () => {};

  return (
    <div>
      heres your link: {fullLink}
      <button onClick={handleCopy}>copy</button>
      <button onClick={onGenerateNew}>generate new</button>
    </div>
  );
};

export default ShowGeneratedLink;
