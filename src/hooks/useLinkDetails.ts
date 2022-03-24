import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../environment";
import { Link } from "../models/link";

export function useLinkDetails(id: string) {
  const [details, setDetails] = useState<Link | null | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get<Link>(API_BASE_URL + `/links/${id}`)
      .then(({ data }) => {
        setDetails(data);
      })
      .catch((error) => {
        setError(error.message);
        setDetails(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return [details, error, loading];
}
