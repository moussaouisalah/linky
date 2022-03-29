import { getBrowsersCounts } from "../helpers";
import { Visit } from "../models/visit";

type Props = {
  visits: Visit[];
};
const BrowsersCountDetails = ({ visits }: Props) => {
  const browsers = getBrowsersCounts(visits);
  return (
    <div>
      {Object.keys(browsers).length > 0 ? (
        <div className="relative overflow-x-auto sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-400">
            <tbody>
              {Object.keys(browsers).map((browser, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-white whitespace-nowrap"
                  >
                    {browser}
                  </th>

                  <td className="px-6 py-4 text-right">
                    {browsers[browser]} Visits
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No visits.</p>
      )}
    </div>
  );
};

export default BrowsersCountDetails;
