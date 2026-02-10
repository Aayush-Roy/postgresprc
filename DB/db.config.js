// import { Prisma, PrismaClient } from "@prisma/client";
import pkg from '@prisma/client';
const { Prisma, PrismaClient } = pkg;
const primsa = new PrismaClient({

log:["query"],

});

export default primsa;