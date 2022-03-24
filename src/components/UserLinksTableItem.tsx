import React from "react";
import { Link } from "react-router-dom";

const UserLinksTableItem = () => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-white whitespace-nowrap"
      >
        Apple MacBook Pro 17"
      </th>
      <td className="px-6 py-4 text-right">10 Clicks</td>
      <td className="px-6 py-4 text-right">
        <Link
          to="/stats/1"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Stats
        </Link>
      </td>
    </tr>
  );
};

export default UserLinksTableItem;
