import { getLocationsCounts } from "../helpers";
import { Visit } from "../models/visit";

type Props = {
  visits: Visit[];
};

const LocationsCountDetails = ({ visits }: Props) => {
  const locations = getLocationsCounts(visits);
  return (
    <div>
      {Object.keys(locations).length > 0 ? (
        <div className="relative overflow-x-auto sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-400">
            <tbody>
              {Object.keys(locations).map((location, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-white whitespace-nowrap"
                  >
                    {location}
                  </th>

                  <td className="px-6 py-4 text-right">
                    {locations[location]} Visits
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

export default LocationsCountDetails;
