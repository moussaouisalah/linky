import axios from "axios";
import { useEffect } from "react";
import { useGeolocation } from "../hooks/useGeolocation";
import { useLinkDetails } from "../hooks/useLinkDetails";
import { useParams } from "react-router-dom";
import { registerVisit } from "../helpers";
import { Link } from "../models/link";
import { Visit } from "../models/visit";

const RegisterRedirect = () => {
  const { id } = useParams();
  const [linkDetails, linkError, linkLoading] = useLinkDetails(id!);
  const [geolocation, geolocationError, geolocationLoading] = useGeolocation();

  useEffect(() => {
    if (geolocationLoading || linkLoading) return;
    if (geolocation === undefined || linkDetails === undefined) return;
    if (!geolocationError && !linkError) {
      registerVisit(linkDetails as Link, geolocation as Visit);
    }
    if (linkDetails) {
      window.location.href = (linkDetails as Link).redirectTo;
    }
  }, [
    geolocation,
    geolocationError,
    geolocationLoading,
    linkDetails,
    linkLoading,
    linkError,
  ]);

  if (linkError) {
    return <div>Error 404</div>;
  }

  if (linkLoading) {
    return <div>loading...</div>;
  }

  return <div>Please Wait, we are redirecting you</div>;
};

export default RegisterRedirect;
