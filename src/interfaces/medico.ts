// import { Especialidade } from "../types/especialidade";

import { Especialidade } from "../types/especialidade";


export interface Medico {
  id: number;
  nome: string;
  crm: string;
  especialidade: Especialidade;
  ativo: boolean;
}
