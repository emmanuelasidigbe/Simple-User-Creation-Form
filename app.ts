import { createServer, IncomingMessage, ServerResponse } from "http";
import { parse } from "querystring";
import { resolve } from "path";
import { sendFile } from "./util/util";
import { readFile } from "fs";

const PORT = 3000;

const handleRequest = (req: IncomingMessage, res: ServerResponse): void => {
  const url = req.url;
  const method = req.method;

  if (url === "/" && method === "GET") {
    const filePath = resolve(__dirname, "views", "index.html"); // resolve the path for the index.html
    sendFile(filePath, res);
    return;
  }

  if (url === "/users" && method === "GET") {
    const filePath = resolve(__dirname, "views", "users.html"); //resolve the path for users.html
    sendFile(filePath, res);
    return;
  }

  if (url === "/create-user" && method === "POST") {
    const body: Buffer[] = [];

    req.on("data", (chunk: Buffer) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const { username } = parse(parsedBody) as { username: string };

      console.log(`New User: ${username}`);

      // Redirect after processing the form data
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
    });

    return;
  }

  // Default 404 response for unsupported routes
  const filePath = resolve(__dirname, "views", "error.html");
  readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.log("error sending the 404 page", err);
    }
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(data);
  });
};

// Create the server and start listening on the specified port
const server = createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
