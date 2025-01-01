import { headers } from "next/headers";

export async function logVisit() {
  if (!process.env.VERCEL) {
    return console.log("[!] Not on Vercel, skipping log visit");
  }

  const headersList = await headers();

  const response = await fetch(
    "https://api.tinybird.co/v0/events?name=visits",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.TINYBIRD_API_KEY}`,
      },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        country: headersList.get("X-Vercel-IP-Country") ?? "Unknown",
        country_region:
          headersList.get("X-Vercel-IP-Country-Region") ?? "Unknown",
        city: headersList.get("X-Vercel-IP-City") ?? "Unknown",
      }),
    }
  );

  if (!response.ok) {
    console.error("[!] Failed to log visit:", response);
  }
}

export async function getLastVisitor() {
  const response = await fetch(
    `https://api.tinybird.co/v0/pipes/get_last_visit.json?token=${process.env.TINYBIRD_API_KEY}`
  );

  if (!response.ok) {
    console.error("[!] Failed to get last visitor:", response);
    return null;
  }

  const data = await response.json();

  return data.data[0] as {
    country: string;
    country_region: string;
    city: string;
    timestamp: string;
    total_visits: number;
  };
}
