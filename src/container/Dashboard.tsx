import Breadcrumbs from "../components/Breadcrumbs";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import NewLink from "../components/NewLink";
import UserLinks from "../components/UserLinks";

const Dashboard = () => {
  return (
    <div className="page__container">
      <Navbar hideGetStarted />
      <div className="w-full max-w-4xl mx-auto">
        <div className="m-4">
          <Breadcrumbs items={[{ label: "Dashboard" }]} />
        </div>
        <div className="mx-4 my-2">
          <Container title="New Link">
            <NewLink />
          </Container>
        </div>
        <div className="mx-4 my-2">
          <Container title="Your Links">
            <UserLinks links={["test"]} />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;