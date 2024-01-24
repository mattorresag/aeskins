export interface Location {
  imagem?: string;
  id: string;
  lat: number;
  lng: number;
  nome: string;
  especializacao: string;
  horaInicio: string;
  horaFim: string;
  endereco: string;
  dias: string;
  status: "aberto" | "fechado";
}
