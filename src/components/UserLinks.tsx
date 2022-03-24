import UserLinksTableItem from "./UserLinksTableItem";

type Props = {
  links: string[];
};

const UserLinks = ({ links }: Props) => {
  return (
    <div>
      {links.length > 0 ? (
        <div className="relative overflow-x-auto sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-400">
            <tbody>
              <UserLinksTableItem />
              <UserLinksTableItem />
              <UserLinksTableItem />
              <UserLinksTableItem />
              <UserLinksTableItem />
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
