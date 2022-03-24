import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../environment";
import { Link } from "../models/link";

export function useLinksByIds(ids: string[]): [link: Link[], loading: boolean] {
  const [links, setLinks] = useState<Link[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(API_BASE_URL + "/links")
      .then(({ data }) => {
        setLinks(data.filter((link: Link) => ids.includes(link.id)));
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [ids]);

  return [links, loading];
}
