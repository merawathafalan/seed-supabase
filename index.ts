import fetch from "cross-fetch";
import { supabase } from "./utils/supabase-client";
import { Verse } from "./utils/types";

async function main() {
  console.log("[+] Fetch Quran data...");

  const quranFile =
    "https://github.com/merawathafalan/data-al-quran/raw/main/quran.json";
  const quran: Verse[] = (await fetch(quranFile).then((res) => res.json()))
    .verses;

  const { data, error } = await supabase.from("quran").insert(quran);

  if (!error) {
    console.log("[+] Quran data inserted!");
  } else {
    console.error("[!] Error inserting Quran data:", error);
  }
}

main();
