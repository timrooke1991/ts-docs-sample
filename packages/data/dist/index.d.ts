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
import { Application } from "express";
declare const app: Application;
export { getRandomFruit } from "./getRandomFruit";
export * from "./interfaces";
export default app;
