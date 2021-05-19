"use strict";
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
 * All interfaces are prefixed with `I`
 *
 * @packageDocumentation
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const handler_1 = require("./functions/handler");
const app = express_1.default();
const port = 3000;
// Body parsing Middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
/**
 * Returns the average of two numbers.
 *
 * @remarks
 * This route /get route
 * @param {import('express').Request} req
 * @param {import('express').Response} _res
 * @param {import('express').NextFunction} next
 *
 * @returns fruit
 */
async function index(_req, res) {
    return res.status(200).send(handler_1.getRandomFruit());
}
app.get("/", index);
try {
    app.listen(port, () => {
        console.log(`Connected successfully on port ${port}`);
    });
}
catch (error) {
    console.error(`Error occured: ${error.message}`);
}
//# sourceMappingURL=index.js.map