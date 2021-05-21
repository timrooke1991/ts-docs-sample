/**
 * @packageDocumentation
 *
 * <h3>Why does this API exist?</h3>
 *
 * `@shlack/types` is a api for managing fruit
 * types and type guards for our demo slack app. This is part of Mike's
 *
 * If you want to watch a recorded video of this course, look for it
 * on <a href="https://frontendmasters.com" target="_blank">FrontEnd Masters</a>
 *
 * @remarks
 * All interfaces are prefixed with
 *
 * @packageDocumentation
 */

import express, { Application, Request, Response } from "express";
import { getRandomFruit } from "./getRandomFruit";

const app: Application = express();
const port = 3000;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function index(_req: Request, res: Response): Promise<Response> {
  return res.status(200).send(getRandomFruit());
}

app.get(
  "/", index
  );

  try {
    app.listen(port, (): void => {
      console.log(`Connected successfully on port ${port}`);
    });
  } catch (error) {
    console.error(`Error occured: ${error.message}`);
  }

export { getRandomFruit } from "./getRandomFruit";
export * from "./interfaces";
export default app;
