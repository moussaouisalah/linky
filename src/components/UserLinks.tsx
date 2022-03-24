import { Link } from "../models/link";
import UserLinksTableItem from "./UserLinksTableItem";

type Props = {
  links: Link[];
};

const UserLinks = ({ links }: Props) => {
  return (
    <div>
      {links.length > 0 ? (
        <div className="relative overflow-x-auto sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-400">
            <tbody>
              {links.map((link) => (
                <UserLinksTableItem key={link.id} link={link} />
              ))}
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
