import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";
import { useLinkDetails } from "../hooks/useLinkDetails";

const UrlStats = () => {
  const { id } = useParams();
  const [linkDetails, linkError, linkLoading] = useLinkDetails(id!);

  return (
    <div className="page__container">
      <Navbar hideGetStarted />
      {linkLoading ? (
        <div className="w-full h-full flex justify-center items-center">
          <Spinner />
        </div>
      ) : linkError || !linkDetails ? (
        <></>
      ) : (
        <div className="w-full max-w-4xl mx-auto">
          <div className="m-4">
            <Breadcrumbs
              items={[
                { label: "Dashboard", link: "/dashboard" },
                { label: "Stats" },
                { label: linkDetails.redirectTo },
              ]}
            />
          </div>
          <div className="mx-4 my-2">
            <Container title="Link Details">
              <p>TODO</p>
            </Container>
          </div>
          <div className="mx-4 my-2">
            <Container title="Users Locations">
              <p>TODO</p>
            </Container>
          </div>
          <div className="mx-4 my-2">
            <Container title="Referrers">
              <p>TODO</p>
            </Container>
          </div>
          <div className="mx-4 my-2">
            <Container title="All Clicks">
              <p>{JSON.stringify(linkDetails)}</p>
            </Container>
          </div>
        </div>
      )}
    </div>
  );
};

export default UrlStats;
