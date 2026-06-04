export interface Product {
  id: string;
  name: string;
  description: string;
  category: "cafe" | "bebida_fria" | "sobremesa" | "salgado";
  image_url: string;
  created_at: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  image_url?: string;
  created_at: string;
}
