"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const router_1 = __importDefault(require("./router"));
// import mongoose from 'mongoose'
// import fileUpload from 'express-fileupload' // NEED yarn add express-fileupload
//For env File
dotenv_1.default.config();
const port = process.env.PORT || 8000;
// const DB_URL = 'DB_URL'
const app = (0, express_1.default)();
app.use(express_1.default.json());
// app.use(fileUpload({}))
// app.use(express.static('static'))
app.use('/api', router_1.default);
app.get('/', (req, res) => {
    res.send('Welcome to Express & TypeScript Server!!!');
});
const startApp = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // await mongoose.connect(DB_URL)
        app.listen(port, () => {
            console.log(`Server is Fire at http://localhost:${port}`);
        });
    }
    catch (e) {
        console.log(e);
    }
});
startApp();
//# sourceMappingURL=index.js.map