import React from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../environment";
import { Link as LinkType } from "../models/link";
import CopyButton from "./CopyButton";

type Props = {
  link: LinkType;
};

const UserLinksTableItem = ({ link }: Props) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-white whitespace-nowrap"
      >
        {link.redirectTo}
      </th>
      <td className="px-6 py-4 flex items-center">
        <span className="mr-2">{`${BASE_URL}/${link.id}`} </span>
        <CopyButton link={`${BASE_URL}/${link.id}`} />
      </td>
      <td className="px-6 py-4 text-right">{link.visits.length} Clicks</td>
      <td className="px-6 py-4 text-right">
        <Link
          to={`/stats/${link.id}`}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Stats
        </Link>
      </td>
    </tr>
  );
};

export default UserLinksTableItem;
