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
 * All interfaces are prefixed with
 *
 * @packageDocumentation
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomFruit = void 0;
const express_1 = __importDefault(require("express"));
const getRandomFruit_1 = require("./getRandomFruit");
const app = express_1.default();
const port = 3000;
// Body parsing Middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
async function index(_req, res) {
    return res.status(200).send(getRandomFruit_1.getRandomFruit());
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
var getRandomFruit_2 = require("./getRandomFruit");
Object.defineProperty(exports, "getRandomFruit", { enumerable: true, get: function () { return getRandomFruit_2.getRandomFruit; } });
__exportStar(require("./interfaces"), exports);
exports.default = app;
//# sourceMappingURL=index.js.map