import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "Continue - Ship faster with Continuous AI_files", "embed_html.html");
  try {
    const html = await readFile(filePath, { encoding: "utf8" });
    return new Response(html, { headers: { "content-type": "text/html; charset=utf-8" } });
  } catch {
    const fallback = `<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>Embed</title><style>body,html{margin:0;padding:0}body{display:flex;flex-direction:column;height:100vh;width:100vw;justify-content:flex-end;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif;overflow:hidden}#bugherd_toggle{width:fit-content;min-width:70px;position:absolute;height:70px;right:0;border:none;background:#0a2d50;border-radius:12px 0 0 12px;color:#fff}</style></head><body><button id=\"bugherd_toggle\" aria-label=\"Toggle\">BugHerd</button></body></html>`;
    return new Response(fallback, { headers: { "content-type": "text/html; charset=utf-8" } });
  }
}


