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

export interface BlogPost {
  id: number;
  title: string;
  active: boolean;
  publication_date: string;
  author_name: string;
  author_avatar?: string;
  content: string;
  banner_image: string;
  card_image: string;
}
