import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import BrowsersCountDetails from "../components/BrowsersCountDetails";
import ClicksTable from "../components/ClicksTable";
import Container from "../components/Container";
import LinkDetails from "../components/LinkDetails";
import LocationsCountDetails from "../components/LocationsCountDetails";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";
import { useLinkDetails } from "../hooks/useLinkDetails";

const UrlStats = () => {
  const { id } = useParams();
  const [linkDetails, linkError, linkLoading] = useLinkDetails(id!);

  return (
    <div className="page__container pb-2">
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
              <LinkDetails link={linkDetails} />
            </Container>
          </div>
          <div className="mx-4 my-2">
            <Container title="Users Locations">
              <LocationsCountDetails visits={linkDetails.visits} />
            </Container>
          </div>
          <div className="mx-4 my-2">
            <Container title="Browsers">
              <BrowsersCountDetails visits={linkDetails.visits} />
            </Container>
          </div>
          <div className="mx-4 my-2">
            <Container title="All Clicks">
              <ClicksTable visits={linkDetails.visits} />
            </Container>
          </div>
        </div>
      )}
    </div>
  );
};

export default UrlStats;
