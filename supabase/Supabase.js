import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tmtuxumilpuoathgxaxn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtdHV4dW1pbHB1b2F0aGd4YXhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU0MzMxMDMsImV4cCI6MjA1MTAwOTEwM30.npjBIa3k74NHU3nlpADCTY724xbK8nB_1CBtQ3oyc3I";

const supabase = createClient(supabaseUrl, supabaseKey);

export async function getTechnologiesApi() {
  const data = await supabase.from("technologies").select("*");
  const response = data.data;

  return response;
}

export async function getWebsitesApi() {
  const data = await supabase.from("websites").select("*");
  const response = data.data;
  return response;
}

export async function getAppsApi() {
  const data = await supabase.from("apps").select("*");
  const response = data.data;
  return response;
}

export async function getTestimonialsApi() {
  const data = await supabase.from("testimonials").select("*");
  const response = data.data;
  return response;
}
