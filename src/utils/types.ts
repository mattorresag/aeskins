export interface Location {
  image?: string;
  id: string;
  lat: number;
  lng: number;
  name: string;
  specialization: string;
  hora_inicio: string;
  hora_fim: string;
  address: string;
  days: string;
  status: "aberto" | "fechado";
}
