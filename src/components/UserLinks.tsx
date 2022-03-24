type Props = {
  links: string[];
};

const UserLinks = ({ links }: Props) => {
  return (
    <div>
      {links.length > 0 ? (
        <div className="relative overflow-x-auto sm:rounded-lg">
          <table className="w-full text-sm text-lefttext-gray-400">
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-white whitespace-nowrap"
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4 text-right">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Stats
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <p>No links.</p>
      )}
    </div>
  );
};

export default UserLinks;
