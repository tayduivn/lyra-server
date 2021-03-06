"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Role",
    embedded: false
  },
  {
    name: "PostType",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Topic",
    embedded: false
  },
  {
    name: "Post",
    embedded: false
  },
  {
    name: "Comment",
    embedded: false
  },
  {
    name: "CommentVote",
    embedded: false
  },
  {
    name: "Vote",
    embedded: false
  },
  {
    name: "Section",
    embedded: false
  },
  {
    name: "SignedUpload",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
exports.prisma = new exports.Prisma();
