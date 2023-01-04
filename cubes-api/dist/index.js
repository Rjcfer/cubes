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
const cors_1 = __importDefault(require("cors"));
const bddConnection_1 = __importDefault(require("./services/bddConnection"));
const person_model_1 = require("./models/person.model");
bddConnection_1.default
    .authenticate()
    .then(() => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
        yield bddConnection_1.default.sync({ force: false }); // ca force le drop table a chaque fois si true
        const person = new person_model_1.Person({ firstName: "yolo" });
        person.save();
        // assyncrone
    }))();
    console.log("Connection has been established successfully.");
})
    .catch((error) => {
    console.error("Unable to connect to the database: ", error);
});
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.send("<h1>Hello World From the Typescript Server!</h1>");
});
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
// Array of example users for testing purposes
const users = [
    {
        id: 1,
        name: "Maria Doe",
        email: "maria@example.com",
        password: "maria123",
    },
    {
        id: 2,
        name: "Juan Doe",
        email: "juan@example.com",
        password: "juan123",
    },
];
// route login
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    const user = users.find((user) => {
        return user.email === email && user.password === password;
    });
    if (!user) {
        return res.status(404).send("User Not Found!");
    }
    return res.status(200).json(user);
});
