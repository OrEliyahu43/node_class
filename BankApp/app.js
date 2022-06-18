import express, { json } from "express";
import fs from 'fs'
import { addClient , updateClient , parserClients } from "./utils/utils.js";
const app = express()

const path = 'bankData.json'


console.log(parserClients(path));



