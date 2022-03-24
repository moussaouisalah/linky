import axios from "axios";
import { useEffect, useState } from "react";
import { getBrowser } from "../helpers";
import { Visit } from "../models/visit";

export function useGeolocation() {
  const [geolocation, setGeolocation] = useState<Visit | null | undefined>(
    undefined
  );
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get("http://geolocation-db.com/json/")
      .then(({ data }) => {
        const visitInfo: Visit = {
          ip: data.IPv4,
          country: data.country_name,
          browser: getBrowser(),
          os: window.navigator.platform,
          device: "",
          referrer: document.referrer,
          createdAt: Date.now(),
        };
        setGeolocation(visitInfo);
      })
      .catch((error) => {
        setError(error.message);
        setGeolocation(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return [geolocation, error, loading];
}
