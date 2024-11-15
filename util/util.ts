import { ServerResponse } from "http";
import { readFile } from "fs";

export function sendFile(filePath: string, res: ServerResponse): void {
  readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "text/html");
      res.end("<h1>Internal Server Error</h1>");
      return;
    }
    res.setHeader("Content-Type", "text/html");
    res.end(data);
  });
}
