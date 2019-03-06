import { prisma } from "../src/generated/prisma-client";

const data = require("./data.json");

async function main() {
  //1. créer les brands
  //2. pour chaque weapon que brand fabrique, créer les bases
  //3. pour chaque base, créer pièces

  for (const brand of data.brands) {
    console.log(brand.name);
  }
}

main().catch(e => console.error(e));
