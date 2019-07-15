import axios from "axios";

import env from "../config/env";

import errorHandler from "./errorHandler";

import repo from "./repoService";

const dependencies = [env, axios, errorHandler];

export const repoService = repo(...dependencies);
