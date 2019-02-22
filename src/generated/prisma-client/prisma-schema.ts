export const typeDefs = /* GraphQL */ `type AggregateBrand {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateWeaponBase {
  count: Int!
}

type AggregateWeaponPart {
  count: Int!
}

type Attribute {
  name: String!
  value: Float
}

input AttributeCreateInput {
  name: String!
  value: Float
}

input AttributeCreateManyInput {
  create: [AttributeCreateInput!]
}

input AttributeCreateOneInput {
  create: AttributeCreateInput
}

type AttributePreviousValues {
  name: String!
  value: Float
}

input AttributeRestrictedWhereInput {
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
  value: Float
  value_not: Float
  value_in: [Float!]
  value_not_in: [Float!]
  value_lt: Float
  value_lte: Float
  value_gt: Float
  value_gte: Float
  AND: [AttributeRestrictedWhereInput!]
}

input AttributeScalarWhereInput {
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
  value: Float
  value_not: Float
  value_in: [Float!]
  value_not_in: [Float!]
  value_lt: Float
  value_lte: Float
  value_gt: Float
  value_gte: Float
  AND: [AttributeScalarWhereInput!]
  OR: [AttributeScalarWhereInput!]
  NOT: [AttributeScalarWhereInput!]
}

type AttributeSubscriptionPayload {
  mutation: MutationType!
  node: Attribute
  updatedFields: [String!]
  previousValues: AttributePreviousValues
}

input AttributeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AttributeWhereInput
  AND: [AttributeSubscriptionWhereInput!]
}

input AttributeUpdateManyDataInput {
  name: String
  value: Float
}

input AttributeUpdateManyInput {
  create: [AttributeCreateInput!]
  deleteMany: [AttributeScalarWhereInput!]
  updateMany: [AttributeUpdateManyWithWhereNestedInput!]
}

input AttributeUpdateManyWithWhereNestedInput {
  where: AttributeScalarWhereInput!
  data: AttributeUpdateManyDataInput!
}

input AttributeWhereInput {
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
  value: Float
  value_not: Float
  value_in: [Float!]
  value_not_in: [Float!]
  value_lt: Float
  value_lte: Float
  value_gt: Float
  value_gte: Float
  AND: [AttributeWhereInput!]
}

type BatchPayload {
  count: Long!
}

type Brand {
  id: ID!
  name: String!
  weapons(where: WeaponBaseWhereInput, orderBy: WeaponBaseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [WeaponBase!]
  weaponParts(where: WeaponPartWhereInput, orderBy: WeaponPartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [WeaponPart!]
}

type BrandConnection {
  pageInfo: PageInfo!
  edges: [BrandEdge]!
  aggregate: AggregateBrand!
}

input BrandCreateInput {
  name: String!
  weapons: WeaponBaseCreateManyWithoutBrandInput
  weaponParts: WeaponPartCreateManyWithoutBrandInput
}

input BrandCreateOneInput {
  create: BrandCreateInput
  connect: BrandWhereUniqueInput
}

input BrandCreateOneWithoutWeaponPartsInput {
  create: BrandCreateWithoutWeaponPartsInput
  connect: BrandWhereUniqueInput
}

input BrandCreateOneWithoutWeaponsInput {
  create: BrandCreateWithoutWeaponsInput
  connect: BrandWhereUniqueInput
}

input BrandCreateWithoutWeaponPartsInput {
  name: String!
  weapons: WeaponBaseCreateManyWithoutBrandInput
}

input BrandCreateWithoutWeaponsInput {
  name: String!
  weaponParts: WeaponPartCreateManyWithoutBrandInput
}

type BrandEdge {
  node: Brand!
  cursor: String!
}

enum BrandOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type BrandPreviousValues {
  id: ID!
  name: String!
}

type BrandSubscriptionPayload {
  mutation: MutationType!
  node: Brand
  updatedFields: [String!]
  previousValues: BrandPreviousValues
}

input BrandSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BrandWhereInput
  AND: [BrandSubscriptionWhereInput!]
}

input BrandUpdateInput {
  name: String
  weapons: WeaponBaseUpdateManyWithoutBrandInput
  weaponParts: WeaponPartUpdateManyWithoutBrandInput
}

input BrandUpdateManyMutationInput {
  name: String
}

input BrandUpdateOneWithoutWeaponPartsInput {
  create: BrandCreateWithoutWeaponPartsInput
  update: BrandUpdateWithoutWeaponPartsDataInput
  upsert: BrandUpsertWithoutWeaponPartsInput
  delete: Boolean
  disconnect: Boolean
  connect: BrandWhereUniqueInput
}

input BrandUpdateOneWithoutWeaponsInput {
  create: BrandCreateWithoutWeaponsInput
  update: BrandUpdateWithoutWeaponsDataInput
  upsert: BrandUpsertWithoutWeaponsInput
  delete: Boolean
  disconnect: Boolean
  connect: BrandWhereUniqueInput
}

input BrandUpdateWithoutWeaponPartsDataInput {
  name: String
  weapons: WeaponBaseUpdateManyWithoutBrandInput
}

input BrandUpdateWithoutWeaponsDataInput {
  name: String
  weaponParts: WeaponPartUpdateManyWithoutBrandInput
}

input BrandUpsertWithoutWeaponPartsInput {
  update: BrandUpdateWithoutWeaponPartsDataInput!
  create: BrandCreateWithoutWeaponPartsInput!
}

input BrandUpsertWithoutWeaponsInput {
  update: BrandUpdateWithoutWeaponsDataInput!
  create: BrandCreateWithoutWeaponsInput!
}

input BrandWhereInput {
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
  weapons_some: WeaponBaseWhereInput
  weaponParts_some: WeaponPartWhereInput
  AND: [BrandWhereInput!]
}

input BrandWhereUniqueInput {
  id: ID
}

type Effect {
  AttributeToModify: Attribute
  modifierType: ModifierType
  baseValueConstant: Float
  baseValueAttribute: Attribute
  baseValueScaleConstant: Float
}

input EffectCreateInput {
  AttributeToModify: AttributeCreateOneInput
  modifierType: ModifierType
  baseValueConstant: Float
  baseValueAttribute: AttributeCreateOneInput
  baseValueScaleConstant: Float
}

input EffectCreateManyInput {
  create: [EffectCreateInput!]
}

type EffectPreviousValues {
  modifierType: ModifierType
  baseValueConstant: Float
  baseValueScaleConstant: Float
}

input EffectRestrictedWhereInput {
  AttributeToModify: AttributeRestrictedWhereInput
  modifierType: ModifierType
  modifierType_not: ModifierType
  modifierType_in: [ModifierType!]
  modifierType_not_in: [ModifierType!]
  baseValueConstant: Float
  baseValueConstant_not: Float
  baseValueConstant_in: [Float!]
  baseValueConstant_not_in: [Float!]
  baseValueConstant_lt: Float
  baseValueConstant_lte: Float
  baseValueConstant_gt: Float
  baseValueConstant_gte: Float
  baseValueAttribute: AttributeRestrictedWhereInput
  baseValueScaleConstant: Float
  baseValueScaleConstant_not: Float
  baseValueScaleConstant_in: [Float!]
  baseValueScaleConstant_not_in: [Float!]
  baseValueScaleConstant_lt: Float
  baseValueScaleConstant_lte: Float
  baseValueScaleConstant_gt: Float
  baseValueScaleConstant_gte: Float
  AND: [EffectRestrictedWhereInput!]
}

input EffectScalarWhereInput {
  modifierType: ModifierType
  modifierType_not: ModifierType
  modifierType_in: [ModifierType!]
  modifierType_not_in: [ModifierType!]
  baseValueConstant: Float
  baseValueConstant_not: Float
  baseValueConstant_in: [Float!]
  baseValueConstant_not_in: [Float!]
  baseValueConstant_lt: Float
  baseValueConstant_lte: Float
  baseValueConstant_gt: Float
  baseValueConstant_gte: Float
  baseValueScaleConstant: Float
  baseValueScaleConstant_not: Float
  baseValueScaleConstant_in: [Float!]
  baseValueScaleConstant_not_in: [Float!]
  baseValueScaleConstant_lt: Float
  baseValueScaleConstant_lte: Float
  baseValueScaleConstant_gt: Float
  baseValueScaleConstant_gte: Float
  AND: [EffectScalarWhereInput!]
  OR: [EffectScalarWhereInput!]
  NOT: [EffectScalarWhereInput!]
}

type EffectSubscriptionPayload {
  mutation: MutationType!
  node: Effect
  updatedFields: [String!]
  previousValues: EffectPreviousValues
}

input EffectSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EffectWhereInput
  AND: [EffectSubscriptionWhereInput!]
}

input EffectUpdateManyDataInput {
  modifierType: ModifierType
  baseValueConstant: Float
  baseValueScaleConstant: Float
}

input EffectUpdateManyInput {
  create: [EffectCreateInput!]
  deleteMany: [EffectScalarWhereInput!]
  updateMany: [EffectUpdateManyWithWhereNestedInput!]
}

input EffectUpdateManyWithWhereNestedInput {
  where: EffectScalarWhereInput!
  data: EffectUpdateManyDataInput!
}

input EffectWhereInput {
  AttributeToModify: AttributeWhereInput
  modifierType: ModifierType
  modifierType_not: ModifierType
  modifierType_in: [ModifierType!]
  modifierType_not_in: [ModifierType!]
  baseValueConstant: Float
  baseValueConstant_not: Float
  baseValueConstant_in: [Float!]
  baseValueConstant_not_in: [Float!]
  baseValueConstant_lt: Float
  baseValueConstant_lte: Float
  baseValueConstant_gt: Float
  baseValueConstant_gte: Float
  baseValueAttribute: AttributeWhereInput
  baseValueScaleConstant: Float
  baseValueScaleConstant_not: Float
  baseValueScaleConstant_in: [Float!]
  baseValueScaleConstant_not_in: [Float!]
  baseValueScaleConstant_lt: Float
  baseValueScaleConstant_lte: Float
  baseValueScaleConstant_gt: Float
  baseValueScaleConstant_gte: Float
  AND: [EffectWhereInput!]
}

scalar Long

enum ModifierType {
  SCALE
  PRE_ADD
}

type Mutation {
  createBrand(data: BrandCreateInput!): Brand!
  updateBrand(data: BrandUpdateInput!, where: BrandWhereUniqueInput!): Brand
  updateManyBrands(data: BrandUpdateManyMutationInput!, where: BrandWhereInput): BatchPayload!
  upsertBrand(where: BrandWhereUniqueInput!, create: BrandCreateInput!, update: BrandUpdateInput!): Brand!
  deleteBrand(where: BrandWhereUniqueInput!): Brand
  deleteManyBrands(where: BrandWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createWeaponBase(data: WeaponBaseCreateInput!): WeaponBase!
  updateWeaponBase(data: WeaponBaseUpdateInput!, where: WeaponBaseWhereUniqueInput!): WeaponBase
  updateManyWeaponBases(data: WeaponBaseUpdateManyMutationInput!, where: WeaponBaseWhereInput): BatchPayload!
  upsertWeaponBase(where: WeaponBaseWhereUniqueInput!, create: WeaponBaseCreateInput!, update: WeaponBaseUpdateInput!): WeaponBase!
  deleteWeaponBase(where: WeaponBaseWhereUniqueInput!): WeaponBase
  deleteManyWeaponBases(where: WeaponBaseWhereInput): BatchPayload!
  createWeaponPart(data: WeaponPartCreateInput!): WeaponPart!
  updateWeaponPart(data: WeaponPartUpdateInput!, where: WeaponPartWhereUniqueInput!): WeaponPart
  updateManyWeaponParts(data: WeaponPartUpdateManyMutationInput!, where: WeaponPartWhereInput): BatchPayload!
  upsertWeaponPart(where: WeaponPartWhereUniqueInput!, create: WeaponPartCreateInput!, update: WeaponPartUpdateInput!): WeaponPart!
  deleteWeaponPart(where: WeaponPartWhereUniqueInput!): WeaponPart
  deleteManyWeaponParts(where: WeaponPartWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

type NameByBrand {
  name: String!
  brand: Brand
}

input NameByBrandCreateInput {
  name: String!
  brand: BrandCreateOneInput
}

input NameByBrandCreateManyInput {
  create: [NameByBrandCreateInput!]
}

type NameByBrandPreviousValues {
  name: String!
}

input NameByBrandRestrictedWhereInput {
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
  AND: [NameByBrandRestrictedWhereInput!]
}

input NameByBrandScalarWhereInput {
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
  AND: [NameByBrandScalarWhereInput!]
  OR: [NameByBrandScalarWhereInput!]
  NOT: [NameByBrandScalarWhereInput!]
}

type NameByBrandSubscriptionPayload {
  mutation: MutationType!
  node: NameByBrand
  updatedFields: [String!]
  previousValues: NameByBrandPreviousValues
}

input NameByBrandSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: NameByBrandWhereInput
  AND: [NameByBrandSubscriptionWhereInput!]
}

input NameByBrandUpdateManyDataInput {
  name: String
}

input NameByBrandUpdateManyInput {
  create: [NameByBrandCreateInput!]
  deleteMany: [NameByBrandScalarWhereInput!]
  updateMany: [NameByBrandUpdateManyWithWhereNestedInput!]
}

input NameByBrandUpdateManyWithWhereNestedInput {
  where: NameByBrandScalarWhereInput!
  data: NameByBrandUpdateManyDataInput!
}

input NameByBrandWhereInput {
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
  brand: BrandWhereInput
  AND: [NameByBrandWhereInput!]
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

type Query {
  brand(where: BrandWhereUniqueInput!): Brand
  brands(where: BrandWhereInput, orderBy: BrandOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Brand]!
  brandsConnection(where: BrandWhereInput, orderBy: BrandOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BrandConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  weaponBase(where: WeaponBaseWhereUniqueInput!): WeaponBase
  weaponBases(where: WeaponBaseWhereInput, orderBy: WeaponBaseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [WeaponBase]!
  weaponBasesConnection(where: WeaponBaseWhereInput, orderBy: WeaponBaseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WeaponBaseConnection!
  weaponPart(where: WeaponPartWhereUniqueInput!): WeaponPart
  weaponParts(where: WeaponPartWhereInput, orderBy: WeaponPartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [WeaponPart]!
  weaponPartsConnection(where: WeaponPartWhereInput, orderBy: WeaponPartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WeaponPartConnection!
  node(id: ID!): Node
}

enum Rarity {
  COMMON
  UNCOMMON
  RARE
  VERY_RARE
  LEGENDARY
}

type Subscription {
  attribute(where: AttributeSubscriptionWhereInput): AttributeSubscriptionPayload
  brand(where: BrandSubscriptionWhereInput): BrandSubscriptionPayload
  effect(where: EffectSubscriptionWhereInput): EffectSubscriptionPayload
  nameByBrand(where: NameByBrandSubscriptionWhereInput): NameByBrandSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  weaponBase(where: WeaponBaseSubscriptionWhereInput): WeaponBaseSubscriptionPayload
  weaponPart(where: WeaponPartSubscriptionWhereInput): WeaponPartSubscriptionPayload
}

type User {
  id: ID!
  name: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
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
}

input UserUpdateInput {
  name: String
}

input UserUpdateManyMutationInput {
  name: String
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
  AND: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}

type WeaponBase {
  id: ID!
  rarity: Rarity
  brand: Brand
  type: WeaponType
  attributes: [Attribute!]
}

type WeaponBaseConnection {
  pageInfo: PageInfo!
  edges: [WeaponBaseEdge]!
  aggregate: AggregateWeaponBase!
}

input WeaponBaseCreateInput {
  rarity: Rarity
  brand: BrandCreateOneWithoutWeaponsInput
  type: WeaponType
  attributes: AttributeCreateManyInput
}

input WeaponBaseCreateManyWithoutBrandInput {
  create: [WeaponBaseCreateWithoutBrandInput!]
  connect: [WeaponBaseWhereUniqueInput!]
}

input WeaponBaseCreateWithoutBrandInput {
  rarity: Rarity
  type: WeaponType
  attributes: AttributeCreateManyInput
}

type WeaponBaseEdge {
  node: WeaponBase!
  cursor: String!
}

enum WeaponBaseOrderByInput {
  id_ASC
  id_DESC
  rarity_ASC
  rarity_DESC
  type_ASC
  type_DESC
}

type WeaponBasePreviousValues {
  id: ID!
  rarity: Rarity
  type: WeaponType
}

input WeaponBaseScalarWhereInput {
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
  rarity: Rarity
  rarity_not: Rarity
  rarity_in: [Rarity!]
  rarity_not_in: [Rarity!]
  type: WeaponType
  type_not: WeaponType
  type_in: [WeaponType!]
  type_not_in: [WeaponType!]
  AND: [WeaponBaseScalarWhereInput!]
  OR: [WeaponBaseScalarWhereInput!]
  NOT: [WeaponBaseScalarWhereInput!]
}

type WeaponBaseSubscriptionPayload {
  mutation: MutationType!
  node: WeaponBase
  updatedFields: [String!]
  previousValues: WeaponBasePreviousValues
}

input WeaponBaseSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: WeaponBaseWhereInput
  AND: [WeaponBaseSubscriptionWhereInput!]
}

input WeaponBaseUpdateInput {
  rarity: Rarity
  brand: BrandUpdateOneWithoutWeaponsInput
  type: WeaponType
  attributes: AttributeUpdateManyInput
}

input WeaponBaseUpdateManyDataInput {
  rarity: Rarity
  type: WeaponType
}

input WeaponBaseUpdateManyMutationInput {
  rarity: Rarity
  type: WeaponType
}

input WeaponBaseUpdateManyWithoutBrandInput {
  create: [WeaponBaseCreateWithoutBrandInput!]
  delete: [WeaponBaseWhereUniqueInput!]
  connect: [WeaponBaseWhereUniqueInput!]
  set: [WeaponBaseWhereUniqueInput!]
  disconnect: [WeaponBaseWhereUniqueInput!]
  update: [WeaponBaseUpdateWithWhereUniqueWithoutBrandInput!]
  upsert: [WeaponBaseUpsertWithWhereUniqueWithoutBrandInput!]
  deleteMany: [WeaponBaseScalarWhereInput!]
  updateMany: [WeaponBaseUpdateManyWithWhereNestedInput!]
}

input WeaponBaseUpdateManyWithWhereNestedInput {
  where: WeaponBaseScalarWhereInput!
  data: WeaponBaseUpdateManyDataInput!
}

input WeaponBaseUpdateWithoutBrandDataInput {
  rarity: Rarity
  type: WeaponType
  attributes: AttributeUpdateManyInput
}

input WeaponBaseUpdateWithWhereUniqueWithoutBrandInput {
  where: WeaponBaseWhereUniqueInput!
  data: WeaponBaseUpdateWithoutBrandDataInput!
}

input WeaponBaseUpsertWithWhereUniqueWithoutBrandInput {
  where: WeaponBaseWhereUniqueInput!
  update: WeaponBaseUpdateWithoutBrandDataInput!
  create: WeaponBaseCreateWithoutBrandInput!
}

input WeaponBaseWhereInput {
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
  rarity: Rarity
  rarity_not: Rarity
  rarity_in: [Rarity!]
  rarity_not_in: [Rarity!]
  brand: BrandWhereInput
  type: WeaponType
  type_not: WeaponType
  type_in: [WeaponType!]
  type_not_in: [WeaponType!]
  attributes_some: AttributeWhereInput
  attributes_every: AttributeRestrictedWhereInput
  attributes_none: AttributeRestrictedWhereInput
  AND: [WeaponBaseWhereInput!]
}

input WeaponBaseWhereUniqueInput {
  id: ID
}

type WeaponPart {
  id: ID!
  effects: [Effect!]
  prefixes: [NameByBrand!]
  titles: [NameByBrand!]
  brand: Brand
  weaponType: WeaponType
  partType: WeaponPartType
}

type WeaponPartConnection {
  pageInfo: PageInfo!
  edges: [WeaponPartEdge]!
  aggregate: AggregateWeaponPart!
}

input WeaponPartCreateInput {
  effects: EffectCreateManyInput
  prefixes: NameByBrandCreateManyInput
  titles: NameByBrandCreateManyInput
  brand: BrandCreateOneWithoutWeaponPartsInput
  weaponType: WeaponType
  partType: WeaponPartType
}

input WeaponPartCreateManyWithoutBrandInput {
  create: [WeaponPartCreateWithoutBrandInput!]
  connect: [WeaponPartWhereUniqueInput!]
}

input WeaponPartCreateWithoutBrandInput {
  effects: EffectCreateManyInput
  prefixes: NameByBrandCreateManyInput
  titles: NameByBrandCreateManyInput
  weaponType: WeaponType
  partType: WeaponPartType
}

type WeaponPartEdge {
  node: WeaponPart!
  cursor: String!
}

enum WeaponPartOrderByInput {
  id_ASC
  id_DESC
  weaponType_ASC
  weaponType_DESC
  partType_ASC
  partType_DESC
}

type WeaponPartPreviousValues {
  id: ID!
  weaponType: WeaponType
  partType: WeaponPartType
}

input WeaponPartScalarWhereInput {
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
  weaponType: WeaponType
  weaponType_not: WeaponType
  weaponType_in: [WeaponType!]
  weaponType_not_in: [WeaponType!]
  partType: WeaponPartType
  partType_not: WeaponPartType
  partType_in: [WeaponPartType!]
  partType_not_in: [WeaponPartType!]
  AND: [WeaponPartScalarWhereInput!]
  OR: [WeaponPartScalarWhereInput!]
  NOT: [WeaponPartScalarWhereInput!]
}

type WeaponPartSubscriptionPayload {
  mutation: MutationType!
  node: WeaponPart
  updatedFields: [String!]
  previousValues: WeaponPartPreviousValues
}

input WeaponPartSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: WeaponPartWhereInput
  AND: [WeaponPartSubscriptionWhereInput!]
}

enum WeaponPartType {
  BODY
  BARREL
  ACCESSORY
  SIGHT
  GRIP
  STOCK
}

input WeaponPartUpdateInput {
  effects: EffectUpdateManyInput
  prefixes: NameByBrandUpdateManyInput
  titles: NameByBrandUpdateManyInput
  brand: BrandUpdateOneWithoutWeaponPartsInput
  weaponType: WeaponType
  partType: WeaponPartType
}

input WeaponPartUpdateManyDataInput {
  weaponType: WeaponType
  partType: WeaponPartType
}

input WeaponPartUpdateManyMutationInput {
  weaponType: WeaponType
  partType: WeaponPartType
}

input WeaponPartUpdateManyWithoutBrandInput {
  create: [WeaponPartCreateWithoutBrandInput!]
  delete: [WeaponPartWhereUniqueInput!]
  connect: [WeaponPartWhereUniqueInput!]
  set: [WeaponPartWhereUniqueInput!]
  disconnect: [WeaponPartWhereUniqueInput!]
  update: [WeaponPartUpdateWithWhereUniqueWithoutBrandInput!]
  upsert: [WeaponPartUpsertWithWhereUniqueWithoutBrandInput!]
  deleteMany: [WeaponPartScalarWhereInput!]
  updateMany: [WeaponPartUpdateManyWithWhereNestedInput!]
}

input WeaponPartUpdateManyWithWhereNestedInput {
  where: WeaponPartScalarWhereInput!
  data: WeaponPartUpdateManyDataInput!
}

input WeaponPartUpdateWithoutBrandDataInput {
  effects: EffectUpdateManyInput
  prefixes: NameByBrandUpdateManyInput
  titles: NameByBrandUpdateManyInput
  weaponType: WeaponType
  partType: WeaponPartType
}

input WeaponPartUpdateWithWhereUniqueWithoutBrandInput {
  where: WeaponPartWhereUniqueInput!
  data: WeaponPartUpdateWithoutBrandDataInput!
}

input WeaponPartUpsertWithWhereUniqueWithoutBrandInput {
  where: WeaponPartWhereUniqueInput!
  update: WeaponPartUpdateWithoutBrandDataInput!
  create: WeaponPartCreateWithoutBrandInput!
}

input WeaponPartWhereInput {
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
  effects_some: EffectWhereInput
  effects_every: EffectRestrictedWhereInput
  effects_none: EffectRestrictedWhereInput
  prefixes_some: NameByBrandWhereInput
  prefixes_every: NameByBrandRestrictedWhereInput
  prefixes_none: NameByBrandRestrictedWhereInput
  titles_some: NameByBrandWhereInput
  titles_every: NameByBrandRestrictedWhereInput
  titles_none: NameByBrandRestrictedWhereInput
  brand: BrandWhereInput
  weaponType: WeaponType
  weaponType_not: WeaponType
  weaponType_in: [WeaponType!]
  weaponType_not_in: [WeaponType!]
  partType: WeaponPartType
  partType_not: WeaponPartType
  partType_in: [WeaponPartType!]
  partType_not_in: [WeaponPartType!]
  AND: [WeaponPartWhereInput!]
}

input WeaponPartWhereUniqueInput {
  id: ID
}

enum WeaponType {
  PISTOL
  SHOTGUN
  ASSAULT_RIFLE
  SNIPER
  ROCKET_LAUNCHER
  SMG
}
`