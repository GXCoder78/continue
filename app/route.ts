import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "Continue - Ship faster with Continuous AI.html");
  const html = await readFile(filePath, { encoding: "utf8" });
  return new Response(html, { headers: { "content-type": "text/html; charset=utf-8" } });
}

