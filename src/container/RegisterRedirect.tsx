import { useEffect } from "react";
import { useGeolocation } from "../hooks/useGeolocation";
import { useLinkDetails } from "../hooks/useLinkDetails";
import { Link, useParams } from "react-router-dom";
import { registerVisit } from "../helpers";
import { Link as LinkType } from "../models/link";
import { Visit } from "../models/visit";
import Spinner from "../components/Spinner";

const RegisterRedirect = () => {
  const { id } = useParams();
  const [linkDetails, linkError, linkLoading] = useLinkDetails(id!);
  const [geolocation, geolocationError, geolocationLoading] = useGeolocation();

  useEffect(() => {
    if (geolocationLoading || linkLoading) return;
    if (geolocation === undefined || linkDetails === undefined) return;
    if (!geolocationError && !linkError) {
      registerVisit(linkDetails as LinkType, geolocation as Visit);
    }
    if (linkDetails) {
      window.location.href = (linkDetails as LinkType).redirectTo;
    }
  }, [
    geolocation,
    geolocationError,
    geolocationLoading,
    linkDetails,
    linkLoading,
    linkError,
  ]);

  const message = linkError
    ? "Error 404"
    : linkLoading
    ? "loading..."
    : "Please Wait, we are redirecting you...";
  return (
    <div className="page__container flex flex-col gap-3 justify-center items-center">
      <p>{message}</p>
      {linkError ? (
        <Link
          to="/"
          className="text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
        >
          Home
        </Link>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default RegisterRedirect;
