import Breadcrumbs from "../components/Breadcrumbs";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import NewLink from "../components/NewLink";
import UserLinks from "../components/UserLinks";
import { registerNewLink } from "../helpers";
import { usePersistence } from "../hooks/usePersistence";
import { Link } from "../models/link";
import { v4 as uuidv4 } from "uuid";
import { useLinksByIds } from "../hooks/useLinksByIds";
import Spinner from "../components/Spinner";
import { useState } from "react";
import OverlaySpinner from "../components/OverlaySpinner";
import ShowGeneratedLink from "../components/ShowGeneratedLink";

const Dashboard = () => {
  const [linksIds, setLinkIds] = usePersistence("links", []);
  const [links, loadingLinks] = useLinksByIds(linksIds);
  const [loadingNewLinkRegister, setLoadingNewLinkRegister] = useState(false);
  const [generatedLink, setGeneratedLink] = useState<Link | null>(null);

  const handleAddLink = (verifiedUrl: string) => {
    setLoadingNewLinkRegister(true);
    const newLink: Link = {
      id: uuidv4().slice(0, 8),
      redirectTo: verifiedUrl,
      visits: [],
    };
    registerNewLink(newLink)
      .then(() => {
        setGeneratedLink(newLink);
        setLinkIds([...linksIds, newLink.id]);
      })
      .catch(() => {})
      .finally(() => {
        setLoadingNewLinkRegister(false);
      });
  };

  return (
    <div className="page__container">
      <Navbar hideGetStarted />
      <div className="w-full max-w-4xl mx-auto">
        <div className="m-4">
          <Breadcrumbs items={[{ label: "Dashboard" }]} />
        </div>
        <div className="mx-4 my-2">
          <Container title="New Link">
            {generatedLink ? (
              <ShowGeneratedLink
                link={generatedLink}
                onGenerateNew={() => setGeneratedLink(null)}
              />
            ) : (
              <NewLink onCreate={handleAddLink} />
            )}
            {loadingNewLinkRegister && <OverlaySpinner />}
          </Container>
        </div>
        <div className="mx-4 my-2">
          <Container title="Your Links">
            {loadingLinks ? <Spinner /> : <UserLinks links={links} />}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
