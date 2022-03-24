import { Visit } from "./visit";

export interface Link {
  id: string;
  redirectTo: string;
  visits: Visit[];
}
