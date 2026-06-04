import { enrichProductsWithImages } from "./images";
import { supabase, isSupabaseConfigured } from "./supabase";
import type { Product, Event } from "@/types";

type ProductRow = {
  id: string;
  name: string;
  description: string | null;
  category: Product["category"];
  image_url: string | null;
  created_at: string;
};

type EventRow = {
  id: string;
  title: string;
  description: string | null;
  event_date: string;
  image_url: string | null;
  created_at: string;
};

function mapProduct(row: ProductRow): Product {
  return {
    id: row.id,
    name: row.name,
    description: row.description ?? "",
    category: row.category,
    image_url: row.image_url ?? "",
    created_at: row.created_at,
  };
}

function mapEvent(row: EventRow): Event {
  return {
    id: row.id,
    title: row.title,
    description: row.description ?? "",
    date: row.event_date,
    image_url: row.image_url ?? undefined,
    created_at: row.created_at,
  };
}

export async function getProducts(): Promise<Product[]> {
  if (!isSupabaseConfigured() || !supabase) return [];

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("active", true)
    .order("category");

  if (error) {
    console.error("Erro ao buscar produtos:", error);
    return [];
  }

  const products = (data as ProductRow[] | null)?.map(mapProduct) ?? [];
  return enrichProductsWithImages(products);
}

export async function getEvents(): Promise<Event[]> {
  if (!isSupabaseConfigured() || !supabase) return [];

  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("active", true)
    .gte("event_date", new Date().toISOString().split("T")[0])
    .order("event_date", { ascending: true });

  if (error) {
    console.error("Erro ao buscar eventos:", error);
    return [];
  }

  return (data as EventRow[] | null)?.map(mapEvent) ?? [];
}
