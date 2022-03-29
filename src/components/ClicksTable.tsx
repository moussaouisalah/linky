import { Visit } from "../models/visit";

type Props = {
  visits: Visit[];
};

const ClicksTable = ({ visits }: Props) => {
  return (
    <div>
      {visits.length > 0 ? (
        <div className="relative overflow-x-auto sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-400">
            <thead className="text-xs  uppercase  bg-gray-700 text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  IP
                </th>
                <th scope="col" className="px-6 py-3">
                  Location
                </th>
                <th scope="col" className="px-6 py-3">
                  Browser
                </th>
              </tr>
            </thead>
            <tbody>
              {visits.map((visit, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4">
                    {new Date(visit.createdAt).toLocaleString()}
                  </td>
                  <td className="px-6 py-4">{visit.ip}</td>
                  <td className="px-6 py-4">{visit.country}</td>
                  <td className="px-6 py-4">{visit.browser}</td>
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

export default ClicksTable;
