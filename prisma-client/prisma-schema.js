module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.27.4). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregatePost {
  count: Int!
}

type AggregateProduct {
  count: Int!
}

type AggregateTopic {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  createProduct(data: ProductCreateInput!): Product!
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  updateManyProducts(data: ProductUpdateManyMutationInput!, where: ProductWhereInput): BatchPayload!
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  deleteProduct(where: ProductWhereUniqueInput!): Product
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
  createTopic(data: TopicCreateInput!): Topic!
  updateTopic(data: TopicUpdateInput!, where: TopicWhereUniqueInput!): Topic
  updateManyTopics(data: TopicUpdateManyMutationInput!, where: TopicWhereInput): BatchPayload!
  upsertTopic(where: TopicWhereUniqueInput!, create: TopicCreateInput!, update: TopicUpdateInput!): Topic!
  deleteTopic(where: TopicWhereUniqueInput!): Topic
  deleteManyTopics(where: TopicWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Post {
  id: ID!
  title: String!
  published: Boolean!
  author: User
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  title: String!
  published: Boolean
  author: UserCreateOneWithoutPostsInput
}

input PostCreateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateWithoutAuthorInput {
  title: String!
  published: Boolean
}

type PostEdge {
  node: Post!
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  published_ASC
  published_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PostPreviousValues {
  id: ID!
  title: String!
  published: Boolean!
}

input PostScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  published: Boolean
  published_not: Boolean
  AND: [PostScalarWhereInput!]
  OR: [PostScalarWhereInput!]
  NOT: [PostScalarWhereInput!]
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  NOT: [PostSubscriptionWhereInput!]
}

input PostUpdateInput {
  title: String
  published: Boolean
  author: UserUpdateOneWithoutPostsInput
}

input PostUpdateManyDataInput {
  title: String
  published: Boolean
}

input PostUpdateManyMutationInput {
  title: String
  published: Boolean
}

input PostUpdateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  set: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [PostScalarWhereInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
}

input PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput!
  data: PostUpdateManyDataInput!
}

input PostUpdateWithoutAuthorDataInput {
  title: String
  published: Boolean
}

input PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutAuthorDataInput!
}

input PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutAuthorDataInput!
  create: PostCreateWithoutAuthorInput!
}

input PostWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  published: Boolean
  published_not: Boolean
  author: UserWhereInput
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: ID
}

type Product {
  id: ID!
  name: String!
  slug: String!
  imageUrl: String!
  description: String!
  votesCount: Int!
  commentsCount: Int!
  topics(where: TopicWhereInput, orderBy: TopicOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Topic!]
}

type ProductConnection {
  pageInfo: PageInfo!
  edges: [ProductEdge]!
  aggregate: AggregateProduct!
}

input ProductCreateInput {
  name: String!
  slug: String!
  imageUrl: String!
  description: String!
  votesCount: Int!
  commentsCount: Int!
  topics: TopicCreateManyWithoutProductsInput
}

input ProductCreateManyWithoutTopicsInput {
  create: [ProductCreateWithoutTopicsInput!]
  connect: [ProductWhereUniqueInput!]
}

input ProductCreateWithoutTopicsInput {
  name: String!
  slug: String!
  imageUrl: String!
  description: String!
  votesCount: Int!
  commentsCount: Int!
}

type ProductEdge {
  node: Product!
  cursor: String!
}

enum ProductOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  slug_ASC
  slug_DESC
  imageUrl_ASC
  imageUrl_DESC
  description_ASC
  description_DESC
  votesCount_ASC
  votesCount_DESC
  commentsCount_ASC
  commentsCount_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProductPreviousValues {
  id: ID!
  name: String!
  slug: String!
  imageUrl: String!
  description: String!
  votesCount: Int!
  commentsCount: Int!
}

input ProductScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  imageUrl: String
  imageUrl_not: String
  imageUrl_in: [String!]
  imageUrl_not_in: [String!]
  imageUrl_lt: String
  imageUrl_lte: String
  imageUrl_gt: String
  imageUrl_gte: String
  imageUrl_contains: String
  imageUrl_not_contains: String
  imageUrl_starts_with: String
  imageUrl_not_starts_with: String
  imageUrl_ends_with: String
  imageUrl_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  votesCount: Int
  votesCount_not: Int
  votesCount_in: [Int!]
  votesCount_not_in: [Int!]
  votesCount_lt: Int
  votesCount_lte: Int
  votesCount_gt: Int
  votesCount_gte: Int
  commentsCount: Int
  commentsCount_not: Int
  commentsCount_in: [Int!]
  commentsCount_not_in: [Int!]
  commentsCount_lt: Int
  commentsCount_lte: Int
  commentsCount_gt: Int
  commentsCount_gte: Int
  AND: [ProductScalarWhereInput!]
  OR: [ProductScalarWhereInput!]
  NOT: [ProductScalarWhereInput!]
}

type ProductSubscriptionPayload {
  mutation: MutationType!
  node: Product
  updatedFields: [String!]
  previousValues: ProductPreviousValues
}

input ProductSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProductWhereInput
  AND: [ProductSubscriptionWhereInput!]
  OR: [ProductSubscriptionWhereInput!]
  NOT: [ProductSubscriptionWhereInput!]
}

input ProductUpdateInput {
  name: String
  slug: String
  imageUrl: String
  description: String
  votesCount: Int
  commentsCount: Int
  topics: TopicUpdateManyWithoutProductsInput
}

input ProductUpdateManyDataInput {
  name: String
  slug: String
  imageUrl: String
  description: String
  votesCount: Int
  commentsCount: Int
}

input ProductUpdateManyMutationInput {
  name: String
  slug: String
  imageUrl: String
  description: String
  votesCount: Int
  commentsCount: Int
}

input ProductUpdateManyWithoutTopicsInput {
  create: [ProductCreateWithoutTopicsInput!]
  delete: [ProductWhereUniqueInput!]
  connect: [ProductWhereUniqueInput!]
  set: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  update: [ProductUpdateWithWhereUniqueWithoutTopicsInput!]
  upsert: [ProductUpsertWithWhereUniqueWithoutTopicsInput!]
  deleteMany: [ProductScalarWhereInput!]
  updateMany: [ProductUpdateManyWithWhereNestedInput!]
}

input ProductUpdateManyWithWhereNestedInput {
  where: ProductScalarWhereInput!
  data: ProductUpdateManyDataInput!
}

input ProductUpdateWithoutTopicsDataInput {
  name: String
  slug: String
  imageUrl: String
  description: String
  votesCount: Int
  commentsCount: Int
}

input ProductUpdateWithWhereUniqueWithoutTopicsInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateWithoutTopicsDataInput!
}

input ProductUpsertWithWhereUniqueWithoutTopicsInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateWithoutTopicsDataInput!
  create: ProductCreateWithoutTopicsInput!
}

input ProductWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  imageUrl: String
  imageUrl_not: String
  imageUrl_in: [String!]
  imageUrl_not_in: [String!]
  imageUrl_lt: String
  imageUrl_lte: String
  imageUrl_gt: String
  imageUrl_gte: String
  imageUrl_contains: String
  imageUrl_not_contains: String
  imageUrl_starts_with: String
  imageUrl_not_starts_with: String
  imageUrl_ends_with: String
  imageUrl_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  votesCount: Int
  votesCount_not: Int
  votesCount_in: [Int!]
  votesCount_not_in: [Int!]
  votesCount_lt: Int
  votesCount_lte: Int
  votesCount_gt: Int
  votesCount_gte: Int
  commentsCount: Int
  commentsCount_not: Int
  commentsCount_in: [Int!]
  commentsCount_not_in: [Int!]
  commentsCount_lt: Int
  commentsCount_lte: Int
  commentsCount_gt: Int
  commentsCount_gte: Int
  topics_every: TopicWhereInput
  topics_some: TopicWhereInput
  topics_none: TopicWhereInput
  AND: [ProductWhereInput!]
  OR: [ProductWhereInput!]
  NOT: [ProductWhereInput!]
}

input ProductWhereUniqueInput {
  id: ID
  slug: String
}

type Query {
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  product(where: ProductWhereUniqueInput!): Product
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!
  topic(where: TopicWhereUniqueInput!): Topic
  topics(where: TopicWhereInput, orderBy: TopicOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Topic]!
  topicsConnection(where: TopicWhereInput, orderBy: TopicOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TopicConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

enum Role {
  ADMIN
  USER
}

type Subscription {
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
  topic(where: TopicSubscriptionWhereInput): TopicSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Topic {
  id: ID!
  name: String!
  slug: String!
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
  followedBy(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type TopicConnection {
  pageInfo: PageInfo!
  edges: [TopicEdge]!
  aggregate: AggregateTopic!
}

input TopicCreateInput {
  name: String!
  slug: String!
  products: ProductCreateManyWithoutTopicsInput
  followedBy: UserCreateManyWithoutFollowedTopicsInput
}

input TopicCreateManyWithoutFollowedByInput {
  create: [TopicCreateWithoutFollowedByInput!]
  connect: [TopicWhereUniqueInput!]
}

input TopicCreateManyWithoutProductsInput {
  create: [TopicCreateWithoutProductsInput!]
  connect: [TopicWhereUniqueInput!]
}

input TopicCreateWithoutFollowedByInput {
  name: String!
  slug: String!
  products: ProductCreateManyWithoutTopicsInput
}

input TopicCreateWithoutProductsInput {
  name: String!
  slug: String!
  followedBy: UserCreateManyWithoutFollowedTopicsInput
}

type TopicEdge {
  node: Topic!
  cursor: String!
}

enum TopicOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  slug_ASC
  slug_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TopicPreviousValues {
  id: ID!
  name: String!
  slug: String!
}

input TopicScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  AND: [TopicScalarWhereInput!]
  OR: [TopicScalarWhereInput!]
  NOT: [TopicScalarWhereInput!]
}

type TopicSubscriptionPayload {
  mutation: MutationType!
  node: Topic
  updatedFields: [String!]
  previousValues: TopicPreviousValues
}

input TopicSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TopicWhereInput
  AND: [TopicSubscriptionWhereInput!]
  OR: [TopicSubscriptionWhereInput!]
  NOT: [TopicSubscriptionWhereInput!]
}

input TopicUpdateInput {
  name: String
  slug: String
  products: ProductUpdateManyWithoutTopicsInput
  followedBy: UserUpdateManyWithoutFollowedTopicsInput
}

input TopicUpdateManyDataInput {
  name: String
  slug: String
}

input TopicUpdateManyMutationInput {
  name: String
  slug: String
}

input TopicUpdateManyWithoutFollowedByInput {
  create: [TopicCreateWithoutFollowedByInput!]
  delete: [TopicWhereUniqueInput!]
  connect: [TopicWhereUniqueInput!]
  set: [TopicWhereUniqueInput!]
  disconnect: [TopicWhereUniqueInput!]
  update: [TopicUpdateWithWhereUniqueWithoutFollowedByInput!]
  upsert: [TopicUpsertWithWhereUniqueWithoutFollowedByInput!]
  deleteMany: [TopicScalarWhereInput!]
  updateMany: [TopicUpdateManyWithWhereNestedInput!]
}

input TopicUpdateManyWithoutProductsInput {
  create: [TopicCreateWithoutProductsInput!]
  delete: [TopicWhereUniqueInput!]
  connect: [TopicWhereUniqueInput!]
  set: [TopicWhereUniqueInput!]
  disconnect: [TopicWhereUniqueInput!]
  update: [TopicUpdateWithWhereUniqueWithoutProductsInput!]
  upsert: [TopicUpsertWithWhereUniqueWithoutProductsInput!]
  deleteMany: [TopicScalarWhereInput!]
  updateMany: [TopicUpdateManyWithWhereNestedInput!]
}

input TopicUpdateManyWithWhereNestedInput {
  where: TopicScalarWhereInput!
  data: TopicUpdateManyDataInput!
}

input TopicUpdateWithoutFollowedByDataInput {
  name: String
  slug: String
  products: ProductUpdateManyWithoutTopicsInput
}

input TopicUpdateWithoutProductsDataInput {
  name: String
  slug: String
  followedBy: UserUpdateManyWithoutFollowedTopicsInput
}

input TopicUpdateWithWhereUniqueWithoutFollowedByInput {
  where: TopicWhereUniqueInput!
  data: TopicUpdateWithoutFollowedByDataInput!
}

input TopicUpdateWithWhereUniqueWithoutProductsInput {
  where: TopicWhereUniqueInput!
  data: TopicUpdateWithoutProductsDataInput!
}

input TopicUpsertWithWhereUniqueWithoutFollowedByInput {
  where: TopicWhereUniqueInput!
  update: TopicUpdateWithoutFollowedByDataInput!
  create: TopicCreateWithoutFollowedByInput!
}

input TopicUpsertWithWhereUniqueWithoutProductsInput {
  where: TopicWhereUniqueInput!
  update: TopicUpdateWithoutProductsDataInput!
  create: TopicCreateWithoutProductsInput!
}

input TopicWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  products_every: ProductWhereInput
  products_some: ProductWhereInput
  products_none: ProductWhereInput
  followedBy_every: UserWhereInput
  followedBy_some: UserWhereInput
  followedBy_none: UserWhereInput
  AND: [TopicWhereInput!]
  OR: [TopicWhereInput!]
  NOT: [TopicWhereInput!]
}

input TopicWhereUniqueInput {
  id: ID
  slug: String
}

type User {
  id: ID!
  email: String
  role: Role
  name: String!
  avatar: String
  auth0id: String!
  identity: String
  privateKey: String
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  followedTopics(where: TopicWhereInput, orderBy: TopicOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Topic!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String
  role: Role
  name: String!
  avatar: String
  auth0id: String!
  identity: String
  privateKey: String
  posts: PostCreateManyWithoutAuthorInput
  followedTopics: TopicCreateManyWithoutFollowedByInput
}

input UserCreateManyWithoutFollowedTopicsInput {
  create: [UserCreateWithoutFollowedTopicsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutFollowedTopicsInput {
  email: String
  role: Role
  name: String!
  avatar: String
  auth0id: String!
  identity: String
  privateKey: String
  posts: PostCreateManyWithoutAuthorInput
}

input UserCreateWithoutPostsInput {
  email: String
  role: Role
  name: String!
  avatar: String
  auth0id: String!
  identity: String
  privateKey: String
  followedTopics: TopicCreateManyWithoutFollowedByInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  role_ASC
  role_DESC
  name_ASC
  name_DESC
  avatar_ASC
  avatar_DESC
  auth0id_ASC
  auth0id_DESC
  identity_ASC
  identity_DESC
  privateKey_ASC
  privateKey_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String
  role: Role
  name: String!
  avatar: String
  auth0id: String!
  identity: String
  privateKey: String
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  role: Role
  role_not: Role
  role_in: [Role!]
  role_not_in: [Role!]
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  avatar: String
  avatar_not: String
  avatar_in: [String!]
  avatar_not_in: [String!]
  avatar_lt: String
  avatar_lte: String
  avatar_gt: String
  avatar_gte: String
  avatar_contains: String
  avatar_not_contains: String
  avatar_starts_with: String
  avatar_not_starts_with: String
  avatar_ends_with: String
  avatar_not_ends_with: String
  auth0id: String
  auth0id_not: String
  auth0id_in: [String!]
  auth0id_not_in: [String!]
  auth0id_lt: String
  auth0id_lte: String
  auth0id_gt: String
  auth0id_gte: String
  auth0id_contains: String
  auth0id_not_contains: String
  auth0id_starts_with: String
  auth0id_not_starts_with: String
  auth0id_ends_with: String
  auth0id_not_ends_with: String
  identity: String
  identity_not: String
  identity_in: [String!]
  identity_not_in: [String!]
  identity_lt: String
  identity_lte: String
  identity_gt: String
  identity_gte: String
  identity_contains: String
  identity_not_contains: String
  identity_starts_with: String
  identity_not_starts_with: String
  identity_ends_with: String
  identity_not_ends_with: String
  privateKey: String
  privateKey_not: String
  privateKey_in: [String!]
  privateKey_not_in: [String!]
  privateKey_lt: String
  privateKey_lte: String
  privateKey_gt: String
  privateKey_gte: String
  privateKey_contains: String
  privateKey_not_contains: String
  privateKey_starts_with: String
  privateKey_not_starts_with: String
  privateKey_ends_with: String
  privateKey_not_ends_with: String
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  role: Role
  name: String
  avatar: String
  auth0id: String
  identity: String
  privateKey: String
  posts: PostUpdateManyWithoutAuthorInput
  followedTopics: TopicUpdateManyWithoutFollowedByInput
}

input UserUpdateManyDataInput {
  email: String
  role: Role
  name: String
  avatar: String
  auth0id: String
  identity: String
  privateKey: String
}

input UserUpdateManyMutationInput {
  email: String
  role: Role
  name: String
  avatar: String
  auth0id: String
  identity: String
  privateKey: String
}

input UserUpdateManyWithoutFollowedTopicsInput {
  create: [UserCreateWithoutFollowedTopicsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutFollowedTopicsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutFollowedTopicsInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutFollowedTopicsDataInput {
  email: String
  role: Role
  name: String
  avatar: String
  auth0id: String
  identity: String
  privateKey: String
  posts: PostUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutPostsDataInput {
  email: String
  role: Role
  name: String
  avatar: String
  auth0id: String
  identity: String
  privateKey: String
  followedTopics: TopicUpdateManyWithoutFollowedByInput
}

input UserUpdateWithWhereUniqueWithoutFollowedTopicsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutFollowedTopicsDataInput!
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserUpsertWithWhereUniqueWithoutFollowedTopicsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutFollowedTopicsDataInput!
  create: UserCreateWithoutFollowedTopicsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  role: Role
  role_not: Role
  role_in: [Role!]
  role_not_in: [Role!]
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  avatar: String
  avatar_not: String
  avatar_in: [String!]
  avatar_not_in: [String!]
  avatar_lt: String
  avatar_lte: String
  avatar_gt: String
  avatar_gte: String
  avatar_contains: String
  avatar_not_contains: String
  avatar_starts_with: String
  avatar_not_starts_with: String
  avatar_ends_with: String
  avatar_not_ends_with: String
  auth0id: String
  auth0id_not: String
  auth0id_in: [String!]
  auth0id_not_in: [String!]
  auth0id_lt: String
  auth0id_lte: String
  auth0id_gt: String
  auth0id_gte: String
  auth0id_contains: String
  auth0id_not_contains: String
  auth0id_starts_with: String
  auth0id_not_starts_with: String
  auth0id_ends_with: String
  auth0id_not_ends_with: String
  identity: String
  identity_not: String
  identity_in: [String!]
  identity_not_in: [String!]
  identity_lt: String
  identity_lte: String
  identity_gt: String
  identity_gte: String
  identity_contains: String
  identity_not_contains: String
  identity_starts_with: String
  identity_not_starts_with: String
  identity_ends_with: String
  identity_not_ends_with: String
  privateKey: String
  privateKey_not: String
  privateKey_in: [String!]
  privateKey_not_in: [String!]
  privateKey_lt: String
  privateKey_lte: String
  privateKey_gt: String
  privateKey_gte: String
  privateKey_contains: String
  privateKey_not_contains: String
  privateKey_starts_with: String
  privateKey_not_starts_with: String
  privateKey_ends_with: String
  privateKey_not_ends_with: String
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  followedTopics_every: TopicWhereInput
  followedTopics_some: TopicWhereInput
  followedTopics_none: TopicWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
  auth0id: String
}
`
      }
    