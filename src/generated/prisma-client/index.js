"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Link",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Vote",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/stephanie-4d0776/apollo/dev`
});
exports.prisma = new exports.Prisma();