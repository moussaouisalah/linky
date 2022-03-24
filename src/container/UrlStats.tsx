import Breadcrumbs from "../components/Breadcrumbs";
import Container from "../components/Container";
import Navbar from "../components/Navbar";

const UrlStats = () => {
  return (
    <div className="page__container">
      <Navbar hideGetStarted />
      <div className="w-full max-w-4xl mx-auto">
        <div className="m-4">
          <Breadcrumbs
            items={[
              { label: "Dashboard", link: "/dashboard" },
              { label: "Stats" },
              { label: "https://example.com" },
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
            <p>TODO</p>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default UrlStats;
