// GENERATED TYPES FOR NEXUS-PRISMA. /!\ DO NOT EDIT MANUALLY

import { core } from 'nexus'
import { GraphQLResolveInfo } from 'graphql'
import * as prisma from '../prisma-client'

declare global {
  interface NexusPrismaGen extends NexusPrismaTypes {}
}

export interface NexusPrismaTypes {
  objectTypes: {
    fields: {
      Query: QueryObject
      User: UserObject
      UserConnection: UserConnectionObject
      PageInfo: PageInfoObject
      UserEdge: UserEdgeObject
      AggregateUser: AggregateUserObject
      Brand: BrandObject
      WeaponBase: WeaponBaseObject
      Attribute: AttributeObject
      WeaponPart: WeaponPartObject
      Effect: EffectObject
      NameByBrand: NameByBrandObject
      BrandConnection: BrandConnectionObject
      BrandEdge: BrandEdgeObject
      AggregateBrand: AggregateBrandObject
      WeaponBaseConnection: WeaponBaseConnectionObject
      WeaponBaseEdge: WeaponBaseEdgeObject
      AggregateWeaponBase: AggregateWeaponBaseObject
      WeaponPartConnection: WeaponPartConnectionObject
      WeaponPartEdge: WeaponPartEdgeObject
      AggregateWeaponPart: AggregateWeaponPartObject
      Mutation: MutationObject
      BatchPayload: BatchPayloadObject
      Subscription: SubscriptionObject
      UserSubscriptionPayload: UserSubscriptionPayloadObject
      UserPreviousValues: UserPreviousValuesObject
      BrandSubscriptionPayload: BrandSubscriptionPayloadObject
      BrandPreviousValues: BrandPreviousValuesObject
      WeaponBaseSubscriptionPayload: WeaponBaseSubscriptionPayloadObject
      WeaponBasePreviousValues: WeaponBasePreviousValuesObject
      WeaponPartSubscriptionPayload: WeaponPartSubscriptionPayloadObject
      WeaponPartPreviousValues: WeaponPartPreviousValuesObject
    }
    fieldsDetails: {
      Query: QueryFieldDetails
      User: UserFieldDetails
      UserConnection: UserConnectionFieldDetails
      PageInfo: PageInfoFieldDetails
      UserEdge: UserEdgeFieldDetails
      AggregateUser: AggregateUserFieldDetails
      Brand: BrandFieldDetails
      WeaponBase: WeaponBaseFieldDetails
      Attribute: AttributeFieldDetails
      WeaponPart: WeaponPartFieldDetails
      Effect: EffectFieldDetails
      NameByBrand: NameByBrandFieldDetails
      BrandConnection: BrandConnectionFieldDetails
      BrandEdge: BrandEdgeFieldDetails
      AggregateBrand: AggregateBrandFieldDetails
      WeaponBaseConnection: WeaponBaseConnectionFieldDetails
      WeaponBaseEdge: WeaponBaseEdgeFieldDetails
      AggregateWeaponBase: AggregateWeaponBaseFieldDetails
      WeaponPartConnection: WeaponPartConnectionFieldDetails
      WeaponPartEdge: WeaponPartEdgeFieldDetails
      AggregateWeaponPart: AggregateWeaponPartFieldDetails
      Mutation: MutationFieldDetails
      BatchPayload: BatchPayloadFieldDetails
      Subscription: SubscriptionFieldDetails
      UserSubscriptionPayload: UserSubscriptionPayloadFieldDetails
      UserPreviousValues: UserPreviousValuesFieldDetails
      BrandSubscriptionPayload: BrandSubscriptionPayloadFieldDetails
      BrandPreviousValues: BrandPreviousValuesFieldDetails
      WeaponBaseSubscriptionPayload: WeaponBaseSubscriptionPayloadFieldDetails
      WeaponBasePreviousValues: WeaponBasePreviousValuesFieldDetails
      WeaponPartSubscriptionPayload: WeaponPartSubscriptionPayloadFieldDetails
      WeaponPartPreviousValues: WeaponPartPreviousValuesFieldDetails
    }
  }
  inputTypes: {
    fields: {
      UserWhereUniqueInput: UserWhereUniqueInputInputObject
      UserWhereInput: UserWhereInputInputObject
      BrandWhereUniqueInput: BrandWhereUniqueInputInputObject
      WeaponBaseWhereInput: WeaponBaseWhereInputInputObject
      BrandWhereInput: BrandWhereInputInputObject
      WeaponPartWhereInput: WeaponPartWhereInputInputObject
      EffectWhereInput: EffectWhereInputInputObject
      AttributeWhereInput: AttributeWhereInputInputObject
      EffectRestrictedWhereInput: EffectRestrictedWhereInputInputObject
      AttributeRestrictedWhereInput: AttributeRestrictedWhereInputInputObject
      NameByBrandWhereInput: NameByBrandWhereInputInputObject
      NameByBrandRestrictedWhereInput: NameByBrandRestrictedWhereInputInputObject
      WeaponBaseWhereUniqueInput: WeaponBaseWhereUniqueInputInputObject
      WeaponPartWhereUniqueInput: WeaponPartWhereUniqueInputInputObject
      UserCreateInput: UserCreateInputInputObject
      UserUpdateInput: UserUpdateInputInputObject
      UserUpdateManyMutationInput: UserUpdateManyMutationInputInputObject
      BrandCreateInput: BrandCreateInputInputObject
      WeaponBaseCreateManyWithoutBrandInput: WeaponBaseCreateManyWithoutBrandInputInputObject
      WeaponBaseCreateWithoutBrandInput: WeaponBaseCreateWithoutBrandInputInputObject
      AttributeCreateManyInput: AttributeCreateManyInputInputObject
      AttributeCreateInput: AttributeCreateInputInputObject
      WeaponPartCreateManyWithoutBrandInput: WeaponPartCreateManyWithoutBrandInputInputObject
      WeaponPartCreateWithoutBrandInput: WeaponPartCreateWithoutBrandInputInputObject
      EffectCreateManyInput: EffectCreateManyInputInputObject
      EffectCreateInput: EffectCreateInputInputObject
      AttributeCreateOneInput: AttributeCreateOneInputInputObject
      NameByBrandCreateManyInput: NameByBrandCreateManyInputInputObject
      NameByBrandCreateInput: NameByBrandCreateInputInputObject
      BrandCreateOneInput: BrandCreateOneInputInputObject
      BrandUpdateInput: BrandUpdateInputInputObject
      WeaponBaseUpdateManyWithoutBrandInput: WeaponBaseUpdateManyWithoutBrandInputInputObject
      WeaponBaseUpdateWithWhereUniqueWithoutBrandInput: WeaponBaseUpdateWithWhereUniqueWithoutBrandInputInputObject
      WeaponBaseUpdateWithoutBrandDataInput: WeaponBaseUpdateWithoutBrandDataInputInputObject
      AttributeUpdateManyInput: AttributeUpdateManyInputInputObject
      AttributeScalarWhereInput: AttributeScalarWhereInputInputObject
      AttributeUpdateManyWithWhereNestedInput: AttributeUpdateManyWithWhereNestedInputInputObject
      AttributeUpdateManyDataInput: AttributeUpdateManyDataInputInputObject
      WeaponBaseUpsertWithWhereUniqueWithoutBrandInput: WeaponBaseUpsertWithWhereUniqueWithoutBrandInputInputObject
      WeaponBaseScalarWhereInput: WeaponBaseScalarWhereInputInputObject
      WeaponBaseUpdateManyWithWhereNestedInput: WeaponBaseUpdateManyWithWhereNestedInputInputObject
      WeaponBaseUpdateManyDataInput: WeaponBaseUpdateManyDataInputInputObject
      WeaponPartUpdateManyWithoutBrandInput: WeaponPartUpdateManyWithoutBrandInputInputObject
      WeaponPartUpdateWithWhereUniqueWithoutBrandInput: WeaponPartUpdateWithWhereUniqueWithoutBrandInputInputObject
      WeaponPartUpdateWithoutBrandDataInput: WeaponPartUpdateWithoutBrandDataInputInputObject
      EffectUpdateManyInput: EffectUpdateManyInputInputObject
      EffectScalarWhereInput: EffectScalarWhereInputInputObject
      EffectUpdateManyWithWhereNestedInput: EffectUpdateManyWithWhereNestedInputInputObject
      EffectUpdateManyDataInput: EffectUpdateManyDataInputInputObject
      NameByBrandUpdateManyInput: NameByBrandUpdateManyInputInputObject
      NameByBrandScalarWhereInput: NameByBrandScalarWhereInputInputObject
      NameByBrandUpdateManyWithWhereNestedInput: NameByBrandUpdateManyWithWhereNestedInputInputObject
      NameByBrandUpdateManyDataInput: NameByBrandUpdateManyDataInputInputObject
      WeaponPartUpsertWithWhereUniqueWithoutBrandInput: WeaponPartUpsertWithWhereUniqueWithoutBrandInputInputObject
      WeaponPartScalarWhereInput: WeaponPartScalarWhereInputInputObject
      WeaponPartUpdateManyWithWhereNestedInput: WeaponPartUpdateManyWithWhereNestedInputInputObject
      WeaponPartUpdateManyDataInput: WeaponPartUpdateManyDataInputInputObject
      BrandUpdateManyMutationInput: BrandUpdateManyMutationInputInputObject
      WeaponBaseCreateInput: WeaponBaseCreateInputInputObject
      BrandCreateOneWithoutWeaponsInput: BrandCreateOneWithoutWeaponsInputInputObject
      BrandCreateWithoutWeaponsInput: BrandCreateWithoutWeaponsInputInputObject
      WeaponBaseUpdateInput: WeaponBaseUpdateInputInputObject
      BrandUpdateOneWithoutWeaponsInput: BrandUpdateOneWithoutWeaponsInputInputObject
      BrandUpdateWithoutWeaponsDataInput: BrandUpdateWithoutWeaponsDataInputInputObject
      BrandUpsertWithoutWeaponsInput: BrandUpsertWithoutWeaponsInputInputObject
      WeaponBaseUpdateManyMutationInput: WeaponBaseUpdateManyMutationInputInputObject
      WeaponPartCreateInput: WeaponPartCreateInputInputObject
      BrandCreateOneWithoutWeaponPartsInput: BrandCreateOneWithoutWeaponPartsInputInputObject
      BrandCreateWithoutWeaponPartsInput: BrandCreateWithoutWeaponPartsInputInputObject
      WeaponPartUpdateInput: WeaponPartUpdateInputInputObject
      BrandUpdateOneWithoutWeaponPartsInput: BrandUpdateOneWithoutWeaponPartsInputInputObject
      BrandUpdateWithoutWeaponPartsDataInput: BrandUpdateWithoutWeaponPartsDataInputInputObject
      BrandUpsertWithoutWeaponPartsInput: BrandUpsertWithoutWeaponPartsInputInputObject
      WeaponPartUpdateManyMutationInput: WeaponPartUpdateManyMutationInputInputObject
      UserSubscriptionWhereInput: UserSubscriptionWhereInputInputObject
      BrandSubscriptionWhereInput: BrandSubscriptionWhereInputInputObject
      WeaponBaseSubscriptionWhereInput: WeaponBaseSubscriptionWhereInputInputObject
      WeaponPartSubscriptionWhereInput: WeaponPartSubscriptionWhereInputInputObject
    }
  }
  enumTypes: {
    UserOrderByInput: UserOrderByInputValues,
    Rarity: RarityValues,
    ModifierType: ModifierTypeValues,
    WeaponType: WeaponTypeValues,
    WeaponPartType: WeaponPartTypeValues,
    WeaponBaseOrderByInput: WeaponBaseOrderByInputValues,
    WeaponPartOrderByInput: WeaponPartOrderByInputValues,
    BrandOrderByInput: BrandOrderByInputValues,
    MutationType: MutationTypeValues,
  }
}

// Types for Query

type QueryObject =
  | QueryFields
  | { name: 'user', args?: QueryUserArgs[] | false, alias?: string  } 
  | { name: 'users', args?: QueryUsersArgs[] | false, alias?: string  } 
  | { name: 'usersConnection', args?: QueryUsersConnectionArgs[] | false, alias?: string  } 
  | { name: 'brand', args?: QueryBrandArgs[] | false, alias?: string  } 
  | { name: 'brands', args?: QueryBrandsArgs[] | false, alias?: string  } 
  | { name: 'brandsConnection', args?: QueryBrandsConnectionArgs[] | false, alias?: string  } 
  | { name: 'weaponBase', args?: QueryWeaponBaseArgs[] | false, alias?: string  } 
  | { name: 'weaponBases', args?: QueryWeaponBasesArgs[] | false, alias?: string  } 
  | { name: 'weaponBasesConnection', args?: QueryWeaponBasesConnectionArgs[] | false, alias?: string  } 
  | { name: 'weaponPart', args?: QueryWeaponPartArgs[] | false, alias?: string  } 
  | { name: 'weaponParts', args?: QueryWeaponPartsArgs[] | false, alias?: string  } 
  | { name: 'weaponPartsConnection', args?: QueryWeaponPartsConnectionArgs[] | false, alias?: string  } 
  | { name: 'node', args?: QueryNodeArgs[] | false, alias?: string  } 

type QueryFields =
  | 'user'
  | 'users'
  | 'usersConnection'
  | 'brand'
  | 'brands'
  | 'brandsConnection'
  | 'weaponBase'
  | 'weaponBases'
  | 'weaponBasesConnection'
  | 'weaponPart'
  | 'weaponParts'
  | 'weaponPartsConnection'
  | 'node'


type QueryUserArgs =
  | 'where'
type QueryUsersArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryUsersConnectionArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryBrandArgs =
  | 'where'
type QueryBrandsArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryBrandsConnectionArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryWeaponBaseArgs =
  | 'where'
type QueryWeaponBasesArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryWeaponBasesConnectionArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryWeaponPartArgs =
  | 'where'
type QueryWeaponPartsArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryWeaponPartsConnectionArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryNodeArgs =
  | 'id'
  

export interface QueryFieldDetails {
  user: {
    type: 'User'
    args: Record<QueryUserArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Query">,
      args: { where: UserWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User | null> | prisma.User | null
  }
  users: {
    type: 'User'
    args: Record<QueryUsersArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: UserWhereInput | null, orderBy?: prisma.UserOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User[]> | prisma.User[]
  }
  usersConnection: {
    type: 'UserConnection'
    args: Record<QueryUsersConnectionArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: UserWhereInput | null, orderBy?: prisma.UserOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.UserConnection> | prisma.UserConnection
  }
  brand: {
    type: 'Brand'
    args: Record<QueryBrandArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Query">,
      args: { where: BrandWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Brand | null> | prisma.Brand | null
  }
  brands: {
    type: 'Brand'
    args: Record<QueryBrandsArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: BrandWhereInput | null, orderBy?: prisma.BrandOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Brand[]> | prisma.Brand[]
  }
  brandsConnection: {
    type: 'BrandConnection'
    args: Record<QueryBrandsConnectionArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: BrandWhereInput | null, orderBy?: prisma.BrandOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BrandConnection> | prisma.BrandConnection
  }
  weaponBase: {
    type: 'WeaponBase'
    args: Record<QueryWeaponBaseArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Query">,
      args: { where: WeaponBaseWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.WeaponBase | null> | prisma.WeaponBase | null
  }
  weaponBases: {
    type: 'WeaponBase'
    args: Record<QueryWeaponBasesArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: WeaponBaseWhereInput | null, orderBy?: prisma.WeaponBaseOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.WeaponBase[]> | prisma.WeaponBase[]
  }
  weaponBasesConnection: {
    type: 'WeaponBaseConnection'
    args: Record<QueryWeaponBasesConnectionArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: WeaponBaseWhereInput | null, orderBy?: prisma.WeaponBaseOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.WeaponBaseConnection> | prisma.WeaponBaseConnection
  }
  weaponPart: {
    type: 'WeaponPart'
    args: Record<QueryWeaponPartArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Query">,
      args: { where: WeaponPartWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.WeaponPart | null> | prisma.WeaponPart | null
  }
  weaponParts: {
    type: 'WeaponPart'
    args: Record<QueryWeaponPartsArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: WeaponPartWhereInput | null, orderBy?: prisma.WeaponPartOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.WeaponPart[]> | prisma.WeaponPart[]
  }
  weaponPartsConnection: {
    type: 'WeaponPartConnection'
    args: Record<QueryWeaponPartsConnectionArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: WeaponPartWhereInput | null, orderBy?: prisma.WeaponPartOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.WeaponPartConnection> | prisma.WeaponPartConnection
  }
  node: {
    type: 'Node'
    args: Record<QueryNodeArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Query">,
      args: { id: string }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Node | null> | prisma.Node | null
  }
}
  

// Types for User

type UserObject =
  | UserFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'name', args?: [] | false, alias?: string  } 

type UserFields =
  | 'id'
  | 'name'



  

export interface UserFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  name: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for UserConnection

type UserConnectionObject =
  | UserConnectionFields
  | { name: 'pageInfo', args?: [] | false, alias?: string  } 
  | { name: 'edges', args?: [] | false, alias?: string  } 
  | { name: 'aggregate', args?: [] | false, alias?: string  } 

type UserConnectionFields =
  | 'pageInfo'
  | 'edges'
  | 'aggregate'



  

export interface UserConnectionFieldDetails {
  pageInfo: {
    type: 'PageInfo'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"UserConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PageInfo> | prisma.PageInfo
  }
  edges: {
    type: 'UserEdge'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"UserConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.UserEdge[]> | prisma.UserEdge[]
  }
  aggregate: {
    type: 'AggregateUser'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"UserConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AggregateUser> | prisma.AggregateUser
  }
}
  

// Types for PageInfo

type PageInfoObject =
  | PageInfoFields
  | { name: 'hasNextPage', args?: [] | false, alias?: string  } 
  | { name: 'hasPreviousPage', args?: [] | false, alias?: string  } 
  | { name: 'startCursor', args?: [] | false, alias?: string  } 
  | { name: 'endCursor', args?: [] | false, alias?: string  } 

type PageInfoFields =
  | 'hasNextPage'
  | 'hasPreviousPage'
  | 'startCursor'
  | 'endCursor'



  

export interface PageInfoFieldDetails {
  hasNextPage: {
    type: 'Boolean'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  hasPreviousPage: {
    type: 'Boolean'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  startCursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  endCursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
}
  

// Types for UserEdge

type UserEdgeObject =
  | UserEdgeFields
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'cursor', args?: [] | false, alias?: string  } 

type UserEdgeFields =
  | 'node'
  | 'cursor'



  

export interface UserEdgeFieldDetails {
  node: {
    type: 'User'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"UserEdge">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User> | prisma.User
  }
  cursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for AggregateUser

type AggregateUserObject =
  | AggregateUserFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type AggregateUserFields =
  | 'count'



  

export interface AggregateUserFieldDetails {
  count: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for Brand

type BrandObject =
  | BrandFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'name', args?: [] | false, alias?: string  } 
  | { name: 'weapons', args?: BrandWeaponsArgs[] | false, alias?: string  } 
  | { name: 'weaponParts', args?: BrandWeaponPartsArgs[] | false, alias?: string  } 

type BrandFields =
  | 'id'
  | 'name'
  | 'weapons'
  | 'weaponParts'


type BrandWeaponsArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type BrandWeaponPartsArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
  

export interface BrandFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  name: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  weapons: {
    type: 'WeaponBase'
    args: Record<BrandWeaponsArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"Brand">,
      args: { where?: WeaponBaseWhereInput | null, orderBy?: prisma.WeaponBaseOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.WeaponBase[]> | prisma.WeaponBase[]
  }
  weaponParts: {
    type: 'WeaponPart'
    args: Record<BrandWeaponPartsArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"Brand">,
      args: { where?: WeaponPartWhereInput | null, orderBy?: prisma.WeaponPartOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.WeaponPart[]> | prisma.WeaponPart[]
  }
}
  

// Types for WeaponBase

type WeaponBaseObject =
  | WeaponBaseFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'rarity', args?: [] | false, alias?: string  } 
  | { name: 'brand', args?: [] | false, alias?: string  } 
  | { name: 'type', args?: [] | false, alias?: string  } 
  | { name: 'attributes', args?: [] | false, alias?: string  } 

type WeaponBaseFields =
  | 'id'
  | 'rarity'
  | 'brand'
  | 'type'
  | 'attributes'



  

export interface WeaponBaseFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  rarity: {
    type: 'Rarity'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"WeaponBase">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Rarity | null> | prisma.Rarity | null
  }
  brand: {
    type: 'Brand'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"WeaponBase">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Brand | null> | prisma.Brand | null
  }
  type: {
    type: 'WeaponType'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"WeaponBase">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.WeaponType | null> | prisma.WeaponType | null
  }
  attributes: {
    type: 'Attribute'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"WeaponBase">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Attribute[]> | prisma.Attribute[]
  }
}
  

// Types for Attribute

type AttributeObject =
  | AttributeFields
  | { name: 'name', args?: [] | false, alias?: string  } 
  | { name: 'value', args?: [] | false, alias?: string  } 

type AttributeFields =
  | 'name'
  | 'value'



  

export interface AttributeFieldDetails {
  name: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  value: {
    type: 'Float'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
}
  

// Types for WeaponPart

type WeaponPartObject =
  | WeaponPartFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'effects', args?: [] | false, alias?: string  } 
  | { name: 'prefixes', args?: [] | false, alias?: string  } 
  | { name: 'titles', args?: [] | false, alias?: string  } 
  | { name: 'brand', args?: [] | false, alias?: string  } 
  | { name: 'weaponType', args?: [] | false, alias?: string  } 
  | { name: 'partType', args?: [] | false, alias?: string  } 

type WeaponPartFields =
  | 'id'
  | 'effects'
  | 'prefixes'
  | 'titles'
  | 'brand'
  | 'weaponType'
  | 'partType'



  

export interface WeaponPartFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  effects: {
    type: 'Effect'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"WeaponPart">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Effect[]> | prisma.Effect[]
  }
  prefixes: {
    type: 'NameByBrand'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"WeaponPart">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.NameByBrand[]> | prisma.NameByBrand[]
  }
  titles: {
    type: 'NameByBrand'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"WeaponPart">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.NameByBrand[]> | prisma.NameByBrand[]
  }
  brand: {
    type: 'Brand'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"WeaponPart">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Brand | null> | prisma.Brand | null
  }
  weaponType: {
    type: 'WeaponType'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"WeaponPart">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.WeaponType | null> | prisma.WeaponType | null
  }
  partType: {
    type: 'WeaponPartType'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"WeaponPart">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.WeaponPartType | null> | prisma.WeaponPartType | null
  }
}
  

// Types for Effect

type EffectObject =
  | EffectFields
  | { name: 'AttributeToModify', args?: [] | false, alias?: string  } 
  | { name: 'modifierType', args?: [] | false, alias?: string  } 
  | { name: 'baseValueConstant', args?: [] | false, alias?: string  } 
  | { name: 'baseValueAttribute', args?: [] | false, alias?: string  } 
  | { name: 'baseValueScaleConstant', args?: [] | false, alias?: string  } 

type EffectFields =
  | 'AttributeToModify'
  | 'modifierType'
  | 'baseValueConstant'
  | 'baseValueAttribute'
  | 'baseValueScaleConstant'



  

export interface EffectFieldDetails {
  AttributeToModify: {
    type: 'Attribute'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Effect">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Attribute | null> | prisma.Attribute | null
  }
  modifierType: {
    type: 'ModifierType'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Effect">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.ModifierType | null> | prisma.ModifierType | null
  }
  baseValueConstant: {
    type: 'Float'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  baseValueAttribute: {
    type: 'Attribute'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Effect">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Attribute | null> | prisma.Attribute | null
  }
  baseValueScaleConstant: {
    type: 'Float'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
}
  

// Types for NameByBrand

type NameByBrandObject =
  | NameByBrandFields
  | { name: 'name', args?: [] | false, alias?: string  } 
  | { name: 'brand', args?: [] | false, alias?: string  } 

type NameByBrandFields =
  | 'name'
  | 'brand'



  

export interface NameByBrandFieldDetails {
  name: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  brand: {
    type: 'Brand'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"NameByBrand">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Brand | null> | prisma.Brand | null
  }
}
  

// Types for BrandConnection

type BrandConnectionObject =
  | BrandConnectionFields
  | { name: 'pageInfo', args?: [] | false, alias?: string  } 
  | { name: 'edges', args?: [] | false, alias?: string  } 
  | { name: 'aggregate', args?: [] | false, alias?: string  } 

type BrandConnectionFields =
  | 'pageInfo'
  | 'edges'
  | 'aggregate'



  

export interface BrandConnectionFieldDetails {
  pageInfo: {
    type: 'PageInfo'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"BrandConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PageInfo> | prisma.PageInfo
  }
  edges: {
    type: 'BrandEdge'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"BrandConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BrandEdge[]> | prisma.BrandEdge[]
  }
  aggregate: {
    type: 'AggregateBrand'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"BrandConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AggregateBrand> | prisma.AggregateBrand
  }
}
  

// Types for BrandEdge

type BrandEdgeObject =
  | BrandEdgeFields
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'cursor', args?: [] | false, alias?: string  } 

type BrandEdgeFields =
  | 'node'
  | 'cursor'



  

export interface BrandEdgeFieldDetails {
  node: {
    type: 'Brand'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"BrandEdge">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Brand> | prisma.Brand
  }
  cursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for AggregateBrand

type AggregateBrandObject =
  | AggregateBrandFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type AggregateBrandFields =
  | 'count'



  

export interface AggregateBrandFieldDetails {
  count: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for WeaponBaseConnection

type WeaponBaseConnectionObject =
  | WeaponBaseConnectionFields
  | { name: 'pageInfo', args?: [] | false, alias?: string  } 
  | { name: 'edges', args?: [] | false, alias?: string  } 
  | { name: 'aggregate', args?: [] | false, alias?: string  } 

type WeaponBaseConnectionFields =
  | 'pageInfo'
  | 'edges'
  | 'aggregate'



  

export interface WeaponBaseConnectionFieldDetails {
  pageInfo: {
    type: 'PageInfo'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"WeaponBaseConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PageInfo> | prisma.PageInfo
  }
  edges: {
    type: 'WeaponBaseEdge'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"WeaponBaseConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.WeaponBaseEdge[]> | prisma.WeaponBaseEdge[]
  }
  aggregate: {
    type: 'AggregateWeaponBase'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"WeaponBaseConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AggregateWeaponBase> | prisma.AggregateWeaponBase
  }
}
  

// Types for WeaponBaseEdge

type WeaponBaseEdgeObject =
  | WeaponBaseEdgeFields
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'cursor', args?: [] | false, alias?: string  } 

type WeaponBaseEdgeFields =
  | 'node'
  | 'cursor'



  

export interface WeaponBaseEdgeFieldDetails {
  node: {
    type: 'WeaponBase'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"WeaponBaseEdge">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.WeaponBase> | prisma.WeaponBase
  }
  cursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for AggregateWeaponBase

type AggregateWeaponBaseObject =
  | AggregateWeaponBaseFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type AggregateWeaponBaseFields =
  | 'count'



  

export interface AggregateWeaponBaseFieldDetails {
  count: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for WeaponPartConnection

type WeaponPartConnectionObject =
  | WeaponPartConnectionFields
  | { name: 'pageInfo', args?: [] | false, alias?: string  } 
  | { name: 'edges', args?: [] | false, alias?: string  } 
  | { name: 'aggregate', args?: [] | false, alias?: string  } 

type WeaponPartConnectionFields =
  | 'pageInfo'
  | 'edges'
  | 'aggregate'



  

export interface WeaponPartConnectionFieldDetails {
  pageInfo: {
    type: 'PageInfo'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"WeaponPartConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PageInfo> | prisma.PageInfo
  }
  edges: {
    type: 'WeaponPartEdge'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"WeaponPartConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.WeaponPartEdge[]> | prisma.WeaponPartEdge[]
  }
  aggregate: {
    type: 'AggregateWeaponPart'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"WeaponPartConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AggregateWeaponPart> | prisma.AggregateWeaponPart
  }
}
  

// Types for WeaponPartEdge

type WeaponPartEdgeObject =
  | WeaponPartEdgeFields
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'cursor', args?: [] | false, alias?: string  } 

type WeaponPartEdgeFields =
  | 'node'
  | 'cursor'



  

export interface WeaponPartEdgeFieldDetails {
  node: {
    type: 'WeaponPart'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"WeaponPartEdge">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.WeaponPart> | prisma.WeaponPart
  }
  cursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for AggregateWeaponPart

type AggregateWeaponPartObject =
  | AggregateWeaponPartFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type AggregateWeaponPartFields =
  | 'count'



  

export interface AggregateWeaponPartFieldDetails {
  count: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for Mutation

type MutationObject =
  | MutationFields
  | { name: 'createUser', args?: MutationCreateUserArgs[] | false, alias?: string  } 
  | { name: 'updateUser', args?: MutationUpdateUserArgs[] | false, alias?: string  } 
  | { name: 'updateManyUsers', args?: MutationUpdateManyUsersArgs[] | false, alias?: string  } 
  | { name: 'upsertUser', args?: MutationUpsertUserArgs[] | false, alias?: string  } 
  | { name: 'deleteUser', args?: MutationDeleteUserArgs[] | false, alias?: string  } 
  | { name: 'deleteManyUsers', args?: MutationDeleteManyUsersArgs[] | false, alias?: string  } 
  | { name: 'createBrand', args?: MutationCreateBrandArgs[] | false, alias?: string  } 
  | { name: 'updateBrand', args?: MutationUpdateBrandArgs[] | false, alias?: string  } 
  | { name: 'updateManyBrands', args?: MutationUpdateManyBrandsArgs[] | false, alias?: string  } 
  | { name: 'upsertBrand', args?: MutationUpsertBrandArgs[] | false, alias?: string  } 
  | { name: 'deleteBrand', args?: MutationDeleteBrandArgs[] | false, alias?: string  } 
  | { name: 'deleteManyBrands', args?: MutationDeleteManyBrandsArgs[] | false, alias?: string  } 
  | { name: 'createWeaponBase', args?: MutationCreateWeaponBaseArgs[] | false, alias?: string  } 
  | { name: 'updateWeaponBase', args?: MutationUpdateWeaponBaseArgs[] | false, alias?: string  } 
  | { name: 'updateManyWeaponBases', args?: MutationUpdateManyWeaponBasesArgs[] | false, alias?: string  } 
  | { name: 'upsertWeaponBase', args?: MutationUpsertWeaponBaseArgs[] | false, alias?: string  } 
  | { name: 'deleteWeaponBase', args?: MutationDeleteWeaponBaseArgs[] | false, alias?: string  } 
  | { name: 'deleteManyWeaponBases', args?: MutationDeleteManyWeaponBasesArgs[] | false, alias?: string  } 
  | { name: 'createWeaponPart', args?: MutationCreateWeaponPartArgs[] | false, alias?: string  } 
  | { name: 'updateWeaponPart', args?: MutationUpdateWeaponPartArgs[] | false, alias?: string  } 
  | { name: 'updateManyWeaponParts', args?: MutationUpdateManyWeaponPartsArgs[] | false, alias?: string  } 
  | { name: 'upsertWeaponPart', args?: MutationUpsertWeaponPartArgs[] | false, alias?: string  } 
  | { name: 'deleteWeaponPart', args?: MutationDeleteWeaponPartArgs[] | false, alias?: string  } 
  | { name: 'deleteManyWeaponParts', args?: MutationDeleteManyWeaponPartsArgs[] | false, alias?: string  } 

type MutationFields =
  | 'createUser'
  | 'updateUser'
  | 'updateManyUsers'
  | 'upsertUser'
  | 'deleteUser'
  | 'deleteManyUsers'
  | 'createBrand'
  | 'updateBrand'
  | 'updateManyBrands'
  | 'upsertBrand'
  | 'deleteBrand'
  | 'deleteManyBrands'
  | 'createWeaponBase'
  | 'updateWeaponBase'
  | 'updateManyWeaponBases'
  | 'upsertWeaponBase'
  | 'deleteWeaponBase'
  | 'deleteManyWeaponBases'
  | 'createWeaponPart'
  | 'updateWeaponPart'
  | 'updateManyWeaponParts'
  | 'upsertWeaponPart'
  | 'deleteWeaponPart'
  | 'deleteManyWeaponParts'


type MutationCreateUserArgs =
  | 'data'
type MutationUpdateUserArgs =
  | 'data'
  | 'where'
type MutationUpdateManyUsersArgs =
  | 'data'
  | 'where'
type MutationUpsertUserArgs =
  | 'where'
  | 'create'
  | 'update'
type MutationDeleteUserArgs =
  | 'where'
type MutationDeleteManyUsersArgs =
  | 'where'
type MutationCreateBrandArgs =
  | 'data'
type MutationUpdateBrandArgs =
  | 'data'
  | 'where'
type MutationUpdateManyBrandsArgs =
  | 'data'
  | 'where'
type MutationUpsertBrandArgs =
  | 'where'
  | 'create'
  | 'update'
type MutationDeleteBrandArgs =
  | 'where'
type MutationDeleteManyBrandsArgs =
  | 'where'
type MutationCreateWeaponBaseArgs =
  | 'data'
type MutationUpdateWeaponBaseArgs =
  | 'data'
  | 'where'
type MutationUpdateManyWeaponBasesArgs =
  | 'data'
  | 'where'
type MutationUpsertWeaponBaseArgs =
  | 'where'
  | 'create'
  | 'update'
type MutationDeleteWeaponBaseArgs =
  | 'where'
type MutationDeleteManyWeaponBasesArgs =
  | 'where'
type MutationCreateWeaponPartArgs =
  | 'data'
type MutationUpdateWeaponPartArgs =
  | 'data'
  | 'where'
type MutationUpdateManyWeaponPartsArgs =
  | 'data'
  | 'where'
type MutationUpsertWeaponPartArgs =
  | 'where'
  | 'create'
  | 'update'
type MutationDeleteWeaponPartArgs =
  | 'where'
type MutationDeleteManyWeaponPartsArgs =
  | 'where'
  

export interface MutationFieldDetails {
  createUser: {
    type: 'User'
    args: Record<MutationCreateUserArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: UserCreateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User> | prisma.User
  }
  updateUser: {
    type: 'User'
    args: Record<MutationUpdateUserArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: UserUpdateInput, where: UserWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User | null> | prisma.User | null
  }
  updateManyUsers: {
    type: 'BatchPayload'
    args: Record<MutationUpdateManyUsersArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: UserUpdateManyMutationInput, where?: UserWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  upsertUser: {
    type: 'User'
    args: Record<MutationUpsertUserArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User> | prisma.User
  }
  deleteUser: {
    type: 'User'
    args: Record<MutationDeleteUserArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: UserWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User | null> | prisma.User | null
  }
  deleteManyUsers: {
    type: 'BatchPayload'
    args: Record<MutationDeleteManyUsersArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where?: UserWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  createBrand: {
    type: 'Brand'
    args: Record<MutationCreateBrandArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: BrandCreateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Brand> | prisma.Brand
  }
  updateBrand: {
    type: 'Brand'
    args: Record<MutationUpdateBrandArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: BrandUpdateInput, where: BrandWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Brand | null> | prisma.Brand | null
  }
  updateManyBrands: {
    type: 'BatchPayload'
    args: Record<MutationUpdateManyBrandsArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: BrandUpdateManyMutationInput, where?: BrandWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  upsertBrand: {
    type: 'Brand'
    args: Record<MutationUpsertBrandArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: BrandWhereUniqueInput, create: BrandCreateInput, update: BrandUpdateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Brand> | prisma.Brand
  }
  deleteBrand: {
    type: 'Brand'
    args: Record<MutationDeleteBrandArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: BrandWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Brand | null> | prisma.Brand | null
  }
  deleteManyBrands: {
    type: 'BatchPayload'
    args: Record<MutationDeleteManyBrandsArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where?: BrandWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  createWeaponBase: {
    type: 'WeaponBase'
    args: Record<MutationCreateWeaponBaseArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: WeaponBaseCreateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.WeaponBase> | prisma.WeaponBase
  }
  updateWeaponBase: {
    type: 'WeaponBase'
    args: Record<MutationUpdateWeaponBaseArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: WeaponBaseUpdateInput, where: WeaponBaseWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.WeaponBase | null> | prisma.WeaponBase | null
  }
  updateManyWeaponBases: {
    type: 'BatchPayload'
    args: Record<MutationUpdateManyWeaponBasesArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: WeaponBaseUpdateManyMutationInput, where?: WeaponBaseWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  upsertWeaponBase: {
    type: 'WeaponBase'
    args: Record<MutationUpsertWeaponBaseArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: WeaponBaseWhereUniqueInput, create: WeaponBaseCreateInput, update: WeaponBaseUpdateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.WeaponBase> | prisma.WeaponBase
  }
  deleteWeaponBase: {
    type: 'WeaponBase'
    args: Record<MutationDeleteWeaponBaseArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: WeaponBaseWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.WeaponBase | null> | prisma.WeaponBase | null
  }
  deleteManyWeaponBases: {
    type: 'BatchPayload'
    args: Record<MutationDeleteManyWeaponBasesArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where?: WeaponBaseWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  createWeaponPart: {
    type: 'WeaponPart'
    args: Record<MutationCreateWeaponPartArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: WeaponPartCreateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.WeaponPart> | prisma.WeaponPart
  }
  updateWeaponPart: {
    type: 'WeaponPart'
    args: Record<MutationUpdateWeaponPartArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: WeaponPartUpdateInput, where: WeaponPartWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.WeaponPart | null> | prisma.WeaponPart | null
  }
  updateManyWeaponParts: {
    type: 'BatchPayload'
    args: Record<MutationUpdateManyWeaponPartsArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: WeaponPartUpdateManyMutationInput, where?: WeaponPartWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  upsertWeaponPart: {
    type: 'WeaponPart'
    args: Record<MutationUpsertWeaponPartArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: WeaponPartWhereUniqueInput, create: WeaponPartCreateInput, update: WeaponPartUpdateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.WeaponPart> | prisma.WeaponPart
  }
  deleteWeaponPart: {
    type: 'WeaponPart'
    args: Record<MutationDeleteWeaponPartArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: WeaponPartWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.WeaponPart | null> | prisma.WeaponPart | null
  }
  deleteManyWeaponParts: {
    type: 'BatchPayload'
    args: Record<MutationDeleteManyWeaponPartsArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where?: WeaponPartWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
}
  

// Types for BatchPayload

type BatchPayloadObject =
  | BatchPayloadFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type BatchPayloadFields =
  | 'count'



  

export interface BatchPayloadFieldDetails {
  count: {
    type: 'Long'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for Subscription

type SubscriptionObject =
  | SubscriptionFields
  | { name: 'user', args?: SubscriptionUserArgs[] | false, alias?: string  } 
  | { name: 'brand', args?: SubscriptionBrandArgs[] | false, alias?: string  } 
  | { name: 'weaponBase', args?: SubscriptionWeaponBaseArgs[] | false, alias?: string  } 
  | { name: 'weaponPart', args?: SubscriptionWeaponPartArgs[] | false, alias?: string  } 

type SubscriptionFields =
  | 'user'
  | 'brand'
  | 'weaponBase'
  | 'weaponPart'


type SubscriptionUserArgs =
  | 'where'
type SubscriptionBrandArgs =
  | 'where'
type SubscriptionWeaponBaseArgs =
  | 'where'
type SubscriptionWeaponPartArgs =
  | 'where'
  

export interface SubscriptionFieldDetails {
  user: {
    type: 'UserSubscriptionPayload'
    args: Record<SubscriptionUserArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Subscription">,
      args: { where?: UserSubscriptionWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.UserSubscriptionPayload | null> | prisma.UserSubscriptionPayload | null
  }
  brand: {
    type: 'BrandSubscriptionPayload'
    args: Record<SubscriptionBrandArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Subscription">,
      args: { where?: BrandSubscriptionWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BrandSubscriptionPayload | null> | prisma.BrandSubscriptionPayload | null
  }
  weaponBase: {
    type: 'WeaponBaseSubscriptionPayload'
    args: Record<SubscriptionWeaponBaseArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Subscription">,
      args: { where?: WeaponBaseSubscriptionWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.WeaponBaseSubscriptionPayload | null> | prisma.WeaponBaseSubscriptionPayload | null
  }
  weaponPart: {
    type: 'WeaponPartSubscriptionPayload'
    args: Record<SubscriptionWeaponPartArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Subscription">,
      args: { where?: WeaponPartSubscriptionWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.WeaponPartSubscriptionPayload | null> | prisma.WeaponPartSubscriptionPayload | null
  }
}
  

// Types for UserSubscriptionPayload

type UserSubscriptionPayloadObject =
  | UserSubscriptionPayloadFields
  | { name: 'mutation', args?: [] | false, alias?: string  } 
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'updatedFields', args?: [] | false, alias?: string  } 
  | { name: 'previousValues', args?: [] | false, alias?: string  } 

type UserSubscriptionPayloadFields =
  | 'mutation'
  | 'node'
  | 'updatedFields'
  | 'previousValues'



  

export interface UserSubscriptionPayloadFieldDetails {
  mutation: {
    type: 'MutationType'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"UserSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.MutationType> | prisma.MutationType
  }
  node: {
    type: 'User'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"UserSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User | null> | prisma.User | null
  }
  updatedFields: {
    type: 'String'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: undefined
  }
  previousValues: {
    type: 'UserPreviousValues'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"UserSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.UserPreviousValues | null> | prisma.UserPreviousValues | null
  }
}
  

// Types for UserPreviousValues

type UserPreviousValuesObject =
  | UserPreviousValuesFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'name', args?: [] | false, alias?: string  } 

type UserPreviousValuesFields =
  | 'id'
  | 'name'



  

export interface UserPreviousValuesFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  name: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for BrandSubscriptionPayload

type BrandSubscriptionPayloadObject =
  | BrandSubscriptionPayloadFields
  | { name: 'mutation', args?: [] | false, alias?: string  } 
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'updatedFields', args?: [] | false, alias?: string  } 
  | { name: 'previousValues', args?: [] | false, alias?: string  } 

type BrandSubscriptionPayloadFields =
  | 'mutation'
  | 'node'
  | 'updatedFields'
  | 'previousValues'



  

export interface BrandSubscriptionPayloadFieldDetails {
  mutation: {
    type: 'MutationType'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"BrandSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.MutationType> | prisma.MutationType
  }
  node: {
    type: 'Brand'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"BrandSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Brand | null> | prisma.Brand | null
  }
  updatedFields: {
    type: 'String'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: undefined
  }
  previousValues: {
    type: 'BrandPreviousValues'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"BrandSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BrandPreviousValues | null> | prisma.BrandPreviousValues | null
  }
}
  

// Types for BrandPreviousValues

type BrandPreviousValuesObject =
  | BrandPreviousValuesFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'name', args?: [] | false, alias?: string  } 

type BrandPreviousValuesFields =
  | 'id'
  | 'name'



  

export interface BrandPreviousValuesFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  name: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for WeaponBaseSubscriptionPayload

type WeaponBaseSubscriptionPayloadObject =
  | WeaponBaseSubscriptionPayloadFields
  | { name: 'mutation', args?: [] | false, alias?: string  } 
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'updatedFields', args?: [] | false, alias?: string  } 
  | { name: 'previousValues', args?: [] | false, alias?: string  } 

type WeaponBaseSubscriptionPayloadFields =
  | 'mutation'
  | 'node'
  | 'updatedFields'
  | 'previousValues'



  

export interface WeaponBaseSubscriptionPayloadFieldDetails {
  mutation: {
    type: 'MutationType'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"WeaponBaseSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.MutationType> | prisma.MutationType
  }
  node: {
    type: 'WeaponBase'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"WeaponBaseSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.WeaponBase | null> | prisma.WeaponBase | null
  }
  updatedFields: {
    type: 'String'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: undefined
  }
  previousValues: {
    type: 'WeaponBasePreviousValues'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"WeaponBaseSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.WeaponBasePreviousValues | null> | prisma.WeaponBasePreviousValues | null
  }
}
  

// Types for WeaponBasePreviousValues

type WeaponBasePreviousValuesObject =
  | WeaponBasePreviousValuesFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'rarity', args?: [] | false, alias?: string  } 
  | { name: 'type', args?: [] | false, alias?: string  } 

type WeaponBasePreviousValuesFields =
  | 'id'
  | 'rarity'
  | 'type'



  

export interface WeaponBasePreviousValuesFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  rarity: {
    type: 'Rarity'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"WeaponBasePreviousValues">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Rarity | null> | prisma.Rarity | null
  }
  type: {
    type: 'WeaponType'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"WeaponBasePreviousValues">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.WeaponType | null> | prisma.WeaponType | null
  }
}
  

// Types for WeaponPartSubscriptionPayload

type WeaponPartSubscriptionPayloadObject =
  | WeaponPartSubscriptionPayloadFields
  | { name: 'mutation', args?: [] | false, alias?: string  } 
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'updatedFields', args?: [] | false, alias?: string  } 
  | { name: 'previousValues', args?: [] | false, alias?: string  } 

type WeaponPartSubscriptionPayloadFields =
  | 'mutation'
  | 'node'
  | 'updatedFields'
  | 'previousValues'



  

export interface WeaponPartSubscriptionPayloadFieldDetails {
  mutation: {
    type: 'MutationType'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"WeaponPartSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.MutationType> | prisma.MutationType
  }
  node: {
    type: 'WeaponPart'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"WeaponPartSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.WeaponPart | null> | prisma.WeaponPart | null
  }
  updatedFields: {
    type: 'String'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: undefined
  }
  previousValues: {
    type: 'WeaponPartPreviousValues'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"WeaponPartSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.WeaponPartPreviousValues | null> | prisma.WeaponPartPreviousValues | null
  }
}
  

// Types for WeaponPartPreviousValues

type WeaponPartPreviousValuesObject =
  | WeaponPartPreviousValuesFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'weaponType', args?: [] | false, alias?: string  } 
  | { name: 'partType', args?: [] | false, alias?: string  } 

type WeaponPartPreviousValuesFields =
  | 'id'
  | 'weaponType'
  | 'partType'



  

export interface WeaponPartPreviousValuesFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  weaponType: {
    type: 'WeaponType'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"WeaponPartPreviousValues">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.WeaponType | null> | prisma.WeaponType | null
  }
  partType: {
    type: 'WeaponPartType'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"WeaponPartPreviousValues">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.WeaponPartType | null> | prisma.WeaponPartType | null
  }
}
  


export interface UserWhereUniqueInput {
  id?: string | null
}
export type UserWhereUniqueInputInputObject =
  | Extract<keyof UserWhereUniqueInput, string>
  | { name: 'id', alias?: string  } 
  
export interface UserWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  name?: string | null
  name_not?: string | null
  name_in?: string[]
  name_not_in?: string[]
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  AND?: UserWhereInput[]
}
export type UserWhereInputInputObject =
  | Extract<keyof UserWhereInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'id_not', alias?: string  } 
  | { name: 'id_in', alias?: string  } 
  | { name: 'id_not_in', alias?: string  } 
  | { name: 'id_lt', alias?: string  } 
  | { name: 'id_lte', alias?: string  } 
  | { name: 'id_gt', alias?: string  } 
  | { name: 'id_gte', alias?: string  } 
  | { name: 'id_contains', alias?: string  } 
  | { name: 'id_not_contains', alias?: string  } 
  | { name: 'id_starts_with', alias?: string  } 
  | { name: 'id_not_starts_with', alias?: string  } 
  | { name: 'id_ends_with', alias?: string  } 
  | { name: 'id_not_ends_with', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'name_not', alias?: string  } 
  | { name: 'name_in', alias?: string  } 
  | { name: 'name_not_in', alias?: string  } 
  | { name: 'name_lt', alias?: string  } 
  | { name: 'name_lte', alias?: string  } 
  | { name: 'name_gt', alias?: string  } 
  | { name: 'name_gte', alias?: string  } 
  | { name: 'name_contains', alias?: string  } 
  | { name: 'name_not_contains', alias?: string  } 
  | { name: 'name_starts_with', alias?: string  } 
  | { name: 'name_not_starts_with', alias?: string  } 
  | { name: 'name_ends_with', alias?: string  } 
  | { name: 'name_not_ends_with', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  
export interface BrandWhereUniqueInput {
  id?: string | null
}
export type BrandWhereUniqueInputInputObject =
  | Extract<keyof BrandWhereUniqueInput, string>
  | { name: 'id', alias?: string  } 
  
export interface WeaponBaseWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  rarity?: prisma.Rarity | null
  rarity_not?: prisma.Rarity | null
  rarity_in?: prisma.Rarity[]
  rarity_not_in?: prisma.Rarity[]
  brand?: BrandWhereInput | null
  type?: prisma.WeaponType | null
  type_not?: prisma.WeaponType | null
  type_in?: prisma.WeaponType[]
  type_not_in?: prisma.WeaponType[]
  attributes_some?: AttributeWhereInput | null
  attributes_every?: AttributeRestrictedWhereInput | null
  attributes_none?: AttributeRestrictedWhereInput | null
  AND?: WeaponBaseWhereInput[]
}
export type WeaponBaseWhereInputInputObject =
  | Extract<keyof WeaponBaseWhereInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'id_not', alias?: string  } 
  | { name: 'id_in', alias?: string  } 
  | { name: 'id_not_in', alias?: string  } 
  | { name: 'id_lt', alias?: string  } 
  | { name: 'id_lte', alias?: string  } 
  | { name: 'id_gt', alias?: string  } 
  | { name: 'id_gte', alias?: string  } 
  | { name: 'id_contains', alias?: string  } 
  | { name: 'id_not_contains', alias?: string  } 
  | { name: 'id_starts_with', alias?: string  } 
  | { name: 'id_not_starts_with', alias?: string  } 
  | { name: 'id_ends_with', alias?: string  } 
  | { name: 'id_not_ends_with', alias?: string  } 
  | { name: 'rarity', alias?: string  } 
  | { name: 'rarity_not', alias?: string  } 
  | { name: 'rarity_in', alias?: string  } 
  | { name: 'rarity_not_in', alias?: string  } 
  | { name: 'brand', alias?: string  } 
  | { name: 'type', alias?: string  } 
  | { name: 'type_not', alias?: string  } 
  | { name: 'type_in', alias?: string  } 
  | { name: 'type_not_in', alias?: string  } 
  | { name: 'attributes_some', alias?: string  } 
  | { name: 'attributes_every', alias?: string  } 
  | { name: 'attributes_none', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  
export interface BrandWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  name?: string | null
  name_not?: string | null
  name_in?: string[]
  name_not_in?: string[]
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  weapons_some?: WeaponBaseWhereInput | null
  weaponParts_some?: WeaponPartWhereInput | null
  AND?: BrandWhereInput[]
}
export type BrandWhereInputInputObject =
  | Extract<keyof BrandWhereInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'id_not', alias?: string  } 
  | { name: 'id_in', alias?: string  } 
  | { name: 'id_not_in', alias?: string  } 
  | { name: 'id_lt', alias?: string  } 
  | { name: 'id_lte', alias?: string  } 
  | { name: 'id_gt', alias?: string  } 
  | { name: 'id_gte', alias?: string  } 
  | { name: 'id_contains', alias?: string  } 
  | { name: 'id_not_contains', alias?: string  } 
  | { name: 'id_starts_with', alias?: string  } 
  | { name: 'id_not_starts_with', alias?: string  } 
  | { name: 'id_ends_with', alias?: string  } 
  | { name: 'id_not_ends_with', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'name_not', alias?: string  } 
  | { name: 'name_in', alias?: string  } 
  | { name: 'name_not_in', alias?: string  } 
  | { name: 'name_lt', alias?: string  } 
  | { name: 'name_lte', alias?: string  } 
  | { name: 'name_gt', alias?: string  } 
  | { name: 'name_gte', alias?: string  } 
  | { name: 'name_contains', alias?: string  } 
  | { name: 'name_not_contains', alias?: string  } 
  | { name: 'name_starts_with', alias?: string  } 
  | { name: 'name_not_starts_with', alias?: string  } 
  | { name: 'name_ends_with', alias?: string  } 
  | { name: 'name_not_ends_with', alias?: string  } 
  | { name: 'weapons_some', alias?: string  } 
  | { name: 'weaponParts_some', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  
export interface WeaponPartWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  effects_some?: EffectWhereInput | null
  effects_every?: EffectRestrictedWhereInput | null
  effects_none?: EffectRestrictedWhereInput | null
  prefixes_some?: NameByBrandWhereInput | null
  prefixes_every?: NameByBrandRestrictedWhereInput | null
  prefixes_none?: NameByBrandRestrictedWhereInput | null
  titles_some?: NameByBrandWhereInput | null
  titles_every?: NameByBrandRestrictedWhereInput | null
  titles_none?: NameByBrandRestrictedWhereInput | null
  brand?: BrandWhereInput | null
  weaponType?: prisma.WeaponType | null
  weaponType_not?: prisma.WeaponType | null
  weaponType_in?: prisma.WeaponType[]
  weaponType_not_in?: prisma.WeaponType[]
  partType?: prisma.WeaponPartType | null
  partType_not?: prisma.WeaponPartType | null
  partType_in?: prisma.WeaponPartType[]
  partType_not_in?: prisma.WeaponPartType[]
  AND?: WeaponPartWhereInput[]
}
export type WeaponPartWhereInputInputObject =
  | Extract<keyof WeaponPartWhereInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'id_not', alias?: string  } 
  | { name: 'id_in', alias?: string  } 
  | { name: 'id_not_in', alias?: string  } 
  | { name: 'id_lt', alias?: string  } 
  | { name: 'id_lte', alias?: string  } 
  | { name: 'id_gt', alias?: string  } 
  | { name: 'id_gte', alias?: string  } 
  | { name: 'id_contains', alias?: string  } 
  | { name: 'id_not_contains', alias?: string  } 
  | { name: 'id_starts_with', alias?: string  } 
  | { name: 'id_not_starts_with', alias?: string  } 
  | { name: 'id_ends_with', alias?: string  } 
  | { name: 'id_not_ends_with', alias?: string  } 
  | { name: 'effects_some', alias?: string  } 
  | { name: 'effects_every', alias?: string  } 
  | { name: 'effects_none', alias?: string  } 
  | { name: 'prefixes_some', alias?: string  } 
  | { name: 'prefixes_every', alias?: string  } 
  | { name: 'prefixes_none', alias?: string  } 
  | { name: 'titles_some', alias?: string  } 
  | { name: 'titles_every', alias?: string  } 
  | { name: 'titles_none', alias?: string  } 
  | { name: 'brand', alias?: string  } 
  | { name: 'weaponType', alias?: string  } 
  | { name: 'weaponType_not', alias?: string  } 
  | { name: 'weaponType_in', alias?: string  } 
  | { name: 'weaponType_not_in', alias?: string  } 
  | { name: 'partType', alias?: string  } 
  | { name: 'partType_not', alias?: string  } 
  | { name: 'partType_in', alias?: string  } 
  | { name: 'partType_not_in', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  
export interface EffectWhereInput {
  AttributeToModify?: AttributeWhereInput | null
  modifierType?: prisma.ModifierType | null
  modifierType_not?: prisma.ModifierType | null
  modifierType_in?: prisma.ModifierType[]
  modifierType_not_in?: prisma.ModifierType[]
  baseValueConstant?: number | null
  baseValueConstant_not?: number | null
  baseValueConstant_in?: number[]
  baseValueConstant_not_in?: number[]
  baseValueConstant_lt?: number | null
  baseValueConstant_lte?: number | null
  baseValueConstant_gt?: number | null
  baseValueConstant_gte?: number | null
  baseValueAttribute?: AttributeWhereInput | null
  baseValueScaleConstant?: number | null
  baseValueScaleConstant_not?: number | null
  baseValueScaleConstant_in?: number[]
  baseValueScaleConstant_not_in?: number[]
  baseValueScaleConstant_lt?: number | null
  baseValueScaleConstant_lte?: number | null
  baseValueScaleConstant_gt?: number | null
  baseValueScaleConstant_gte?: number | null
  AND?: EffectWhereInput[]
}
export type EffectWhereInputInputObject =
  | Extract<keyof EffectWhereInput, string>
  | { name: 'AttributeToModify', alias?: string  } 
  | { name: 'modifierType', alias?: string  } 
  | { name: 'modifierType_not', alias?: string  } 
  | { name: 'modifierType_in', alias?: string  } 
  | { name: 'modifierType_not_in', alias?: string  } 
  | { name: 'baseValueConstant', alias?: string  } 
  | { name: 'baseValueConstant_not', alias?: string  } 
  | { name: 'baseValueConstant_in', alias?: string  } 
  | { name: 'baseValueConstant_not_in', alias?: string  } 
  | { name: 'baseValueConstant_lt', alias?: string  } 
  | { name: 'baseValueConstant_lte', alias?: string  } 
  | { name: 'baseValueConstant_gt', alias?: string  } 
  | { name: 'baseValueConstant_gte', alias?: string  } 
  | { name: 'baseValueAttribute', alias?: string  } 
  | { name: 'baseValueScaleConstant', alias?: string  } 
  | { name: 'baseValueScaleConstant_not', alias?: string  } 
  | { name: 'baseValueScaleConstant_in', alias?: string  } 
  | { name: 'baseValueScaleConstant_not_in', alias?: string  } 
  | { name: 'baseValueScaleConstant_lt', alias?: string  } 
  | { name: 'baseValueScaleConstant_lte', alias?: string  } 
  | { name: 'baseValueScaleConstant_gt', alias?: string  } 
  | { name: 'baseValueScaleConstant_gte', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  
export interface AttributeWhereInput {
  name?: string | null
  name_not?: string | null
  name_in?: string[]
  name_not_in?: string[]
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  value?: number | null
  value_not?: number | null
  value_in?: number[]
  value_not_in?: number[]
  value_lt?: number | null
  value_lte?: number | null
  value_gt?: number | null
  value_gte?: number | null
  AND?: AttributeWhereInput[]
}
export type AttributeWhereInputInputObject =
  | Extract<keyof AttributeWhereInput, string>
  | { name: 'name', alias?: string  } 
  | { name: 'name_not', alias?: string  } 
  | { name: 'name_in', alias?: string  } 
  | { name: 'name_not_in', alias?: string  } 
  | { name: 'name_lt', alias?: string  } 
  | { name: 'name_lte', alias?: string  } 
  | { name: 'name_gt', alias?: string  } 
  | { name: 'name_gte', alias?: string  } 
  | { name: 'name_contains', alias?: string  } 
  | { name: 'name_not_contains', alias?: string  } 
  | { name: 'name_starts_with', alias?: string  } 
  | { name: 'name_not_starts_with', alias?: string  } 
  | { name: 'name_ends_with', alias?: string  } 
  | { name: 'name_not_ends_with', alias?: string  } 
  | { name: 'value', alias?: string  } 
  | { name: 'value_not', alias?: string  } 
  | { name: 'value_in', alias?: string  } 
  | { name: 'value_not_in', alias?: string  } 
  | { name: 'value_lt', alias?: string  } 
  | { name: 'value_lte', alias?: string  } 
  | { name: 'value_gt', alias?: string  } 
  | { name: 'value_gte', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  
export interface EffectRestrictedWhereInput {
  AttributeToModify?: AttributeRestrictedWhereInput | null
  modifierType?: prisma.ModifierType | null
  modifierType_not?: prisma.ModifierType | null
  modifierType_in?: prisma.ModifierType[]
  modifierType_not_in?: prisma.ModifierType[]
  baseValueConstant?: number | null
  baseValueConstant_not?: number | null
  baseValueConstant_in?: number[]
  baseValueConstant_not_in?: number[]
  baseValueConstant_lt?: number | null
  baseValueConstant_lte?: number | null
  baseValueConstant_gt?: number | null
  baseValueConstant_gte?: number | null
  baseValueAttribute?: AttributeRestrictedWhereInput | null
  baseValueScaleConstant?: number | null
  baseValueScaleConstant_not?: number | null
  baseValueScaleConstant_in?: number[]
  baseValueScaleConstant_not_in?: number[]
  baseValueScaleConstant_lt?: number | null
  baseValueScaleConstant_lte?: number | null
  baseValueScaleConstant_gt?: number | null
  baseValueScaleConstant_gte?: number | null
  AND?: EffectRestrictedWhereInput[]
}
export type EffectRestrictedWhereInputInputObject =
  | Extract<keyof EffectRestrictedWhereInput, string>
  | { name: 'AttributeToModify', alias?: string  } 
  | { name: 'modifierType', alias?: string  } 
  | { name: 'modifierType_not', alias?: string  } 
  | { name: 'modifierType_in', alias?: string  } 
  | { name: 'modifierType_not_in', alias?: string  } 
  | { name: 'baseValueConstant', alias?: string  } 
  | { name: 'baseValueConstant_not', alias?: string  } 
  | { name: 'baseValueConstant_in', alias?: string  } 
  | { name: 'baseValueConstant_not_in', alias?: string  } 
  | { name: 'baseValueConstant_lt', alias?: string  } 
  | { name: 'baseValueConstant_lte', alias?: string  } 
  | { name: 'baseValueConstant_gt', alias?: string  } 
  | { name: 'baseValueConstant_gte', alias?: string  } 
  | { name: 'baseValueAttribute', alias?: string  } 
  | { name: 'baseValueScaleConstant', alias?: string  } 
  | { name: 'baseValueScaleConstant_not', alias?: string  } 
  | { name: 'baseValueScaleConstant_in', alias?: string  } 
  | { name: 'baseValueScaleConstant_not_in', alias?: string  } 
  | { name: 'baseValueScaleConstant_lt', alias?: string  } 
  | { name: 'baseValueScaleConstant_lte', alias?: string  } 
  | { name: 'baseValueScaleConstant_gt', alias?: string  } 
  | { name: 'baseValueScaleConstant_gte', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  
export interface AttributeRestrictedWhereInput {
  name?: string | null
  name_not?: string | null
  name_in?: string[]
  name_not_in?: string[]
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  value?: number | null
  value_not?: number | null
  value_in?: number[]
  value_not_in?: number[]
  value_lt?: number | null
  value_lte?: number | null
  value_gt?: number | null
  value_gte?: number | null
  AND?: AttributeRestrictedWhereInput[]
}
export type AttributeRestrictedWhereInputInputObject =
  | Extract<keyof AttributeRestrictedWhereInput, string>
  | { name: 'name', alias?: string  } 
  | { name: 'name_not', alias?: string  } 
  | { name: 'name_in', alias?: string  } 
  | { name: 'name_not_in', alias?: string  } 
  | { name: 'name_lt', alias?: string  } 
  | { name: 'name_lte', alias?: string  } 
  | { name: 'name_gt', alias?: string  } 
  | { name: 'name_gte', alias?: string  } 
  | { name: 'name_contains', alias?: string  } 
  | { name: 'name_not_contains', alias?: string  } 
  | { name: 'name_starts_with', alias?: string  } 
  | { name: 'name_not_starts_with', alias?: string  } 
  | { name: 'name_ends_with', alias?: string  } 
  | { name: 'name_not_ends_with', alias?: string  } 
  | { name: 'value', alias?: string  } 
  | { name: 'value_not', alias?: string  } 
  | { name: 'value_in', alias?: string  } 
  | { name: 'value_not_in', alias?: string  } 
  | { name: 'value_lt', alias?: string  } 
  | { name: 'value_lte', alias?: string  } 
  | { name: 'value_gt', alias?: string  } 
  | { name: 'value_gte', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  
export interface NameByBrandWhereInput {
  name?: string | null
  name_not?: string | null
  name_in?: string[]
  name_not_in?: string[]
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  brand?: BrandWhereInput | null
  AND?: NameByBrandWhereInput[]
}
export type NameByBrandWhereInputInputObject =
  | Extract<keyof NameByBrandWhereInput, string>
  | { name: 'name', alias?: string  } 
  | { name: 'name_not', alias?: string  } 
  | { name: 'name_in', alias?: string  } 
  | { name: 'name_not_in', alias?: string  } 
  | { name: 'name_lt', alias?: string  } 
  | { name: 'name_lte', alias?: string  } 
  | { name: 'name_gt', alias?: string  } 
  | { name: 'name_gte', alias?: string  } 
  | { name: 'name_contains', alias?: string  } 
  | { name: 'name_not_contains', alias?: string  } 
  | { name: 'name_starts_with', alias?: string  } 
  | { name: 'name_not_starts_with', alias?: string  } 
  | { name: 'name_ends_with', alias?: string  } 
  | { name: 'name_not_ends_with', alias?: string  } 
  | { name: 'brand', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  
export interface NameByBrandRestrictedWhereInput {
  name?: string | null
  name_not?: string | null
  name_in?: string[]
  name_not_in?: string[]
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  AND?: NameByBrandRestrictedWhereInput[]
}
export type NameByBrandRestrictedWhereInputInputObject =
  | Extract<keyof NameByBrandRestrictedWhereInput, string>
  | { name: 'name', alias?: string  } 
  | { name: 'name_not', alias?: string  } 
  | { name: 'name_in', alias?: string  } 
  | { name: 'name_not_in', alias?: string  } 
  | { name: 'name_lt', alias?: string  } 
  | { name: 'name_lte', alias?: string  } 
  | { name: 'name_gt', alias?: string  } 
  | { name: 'name_gte', alias?: string  } 
  | { name: 'name_contains', alias?: string  } 
  | { name: 'name_not_contains', alias?: string  } 
  | { name: 'name_starts_with', alias?: string  } 
  | { name: 'name_not_starts_with', alias?: string  } 
  | { name: 'name_ends_with', alias?: string  } 
  | { name: 'name_not_ends_with', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  
export interface WeaponBaseWhereUniqueInput {
  id?: string | null
}
export type WeaponBaseWhereUniqueInputInputObject =
  | Extract<keyof WeaponBaseWhereUniqueInput, string>
  | { name: 'id', alias?: string  } 
  
export interface WeaponPartWhereUniqueInput {
  id?: string | null
}
export type WeaponPartWhereUniqueInputInputObject =
  | Extract<keyof WeaponPartWhereUniqueInput, string>
  | { name: 'id', alias?: string  } 
  
export interface UserCreateInput {
  name?: string
}
export type UserCreateInputInputObject =
  | Extract<keyof UserCreateInput, string>
  | { name: 'name', alias?: string  } 
  
export interface UserUpdateInput {
  name?: string | null
}
export type UserUpdateInputInputObject =
  | Extract<keyof UserUpdateInput, string>
  | { name: 'name', alias?: string  } 
  
export interface UserUpdateManyMutationInput {
  name?: string | null
}
export type UserUpdateManyMutationInputInputObject =
  | Extract<keyof UserUpdateManyMutationInput, string>
  | { name: 'name', alias?: string  } 
  
export interface BrandCreateInput {
  name?: string
  weapons?: WeaponBaseCreateManyWithoutBrandInput | null
  weaponParts?: WeaponPartCreateManyWithoutBrandInput | null
}
export type BrandCreateInputInputObject =
  | Extract<keyof BrandCreateInput, string>
  | { name: 'name', alias?: string  } 
  | { name: 'weapons', alias?: string  } 
  | { name: 'weaponParts', alias?: string  } 
  
export interface WeaponBaseCreateManyWithoutBrandInput {
  create?: WeaponBaseCreateWithoutBrandInput[]
  connect?: WeaponBaseWhereUniqueInput[]
}
export type WeaponBaseCreateManyWithoutBrandInputInputObject =
  | Extract<keyof WeaponBaseCreateManyWithoutBrandInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface WeaponBaseCreateWithoutBrandInput {
  rarity?: prisma.Rarity | null
  type?: prisma.WeaponType | null
  attributes?: AttributeCreateManyInput | null
}
export type WeaponBaseCreateWithoutBrandInputInputObject =
  | Extract<keyof WeaponBaseCreateWithoutBrandInput, string>
  | { name: 'rarity', alias?: string  } 
  | { name: 'type', alias?: string  } 
  | { name: 'attributes', alias?: string  } 
  
export interface AttributeCreateManyInput {
  create?: AttributeCreateInput[]
}
export type AttributeCreateManyInputInputObject =
  | Extract<keyof AttributeCreateManyInput, string>
  | { name: 'create', alias?: string  } 
  
export interface AttributeCreateInput {
  name?: string
  value?: number | null
}
export type AttributeCreateInputInputObject =
  | Extract<keyof AttributeCreateInput, string>
  | { name: 'name', alias?: string  } 
  | { name: 'value', alias?: string  } 
  
export interface WeaponPartCreateManyWithoutBrandInput {
  create?: WeaponPartCreateWithoutBrandInput[]
  connect?: WeaponPartWhereUniqueInput[]
}
export type WeaponPartCreateManyWithoutBrandInputInputObject =
  | Extract<keyof WeaponPartCreateManyWithoutBrandInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface WeaponPartCreateWithoutBrandInput {
  effects?: EffectCreateManyInput | null
  prefixes?: NameByBrandCreateManyInput | null
  titles?: NameByBrandCreateManyInput | null
  weaponType?: prisma.WeaponType | null
  partType?: prisma.WeaponPartType | null
}
export type WeaponPartCreateWithoutBrandInputInputObject =
  | Extract<keyof WeaponPartCreateWithoutBrandInput, string>
  | { name: 'effects', alias?: string  } 
  | { name: 'prefixes', alias?: string  } 
  | { name: 'titles', alias?: string  } 
  | { name: 'weaponType', alias?: string  } 
  | { name: 'partType', alias?: string  } 
  
export interface EffectCreateManyInput {
  create?: EffectCreateInput[]
}
export type EffectCreateManyInputInputObject =
  | Extract<keyof EffectCreateManyInput, string>
  | { name: 'create', alias?: string  } 
  
export interface EffectCreateInput {
  AttributeToModify?: AttributeCreateOneInput | null
  modifierType?: prisma.ModifierType | null
  baseValueConstant?: number | null
  baseValueAttribute?: AttributeCreateOneInput | null
  baseValueScaleConstant?: number | null
}
export type EffectCreateInputInputObject =
  | Extract<keyof EffectCreateInput, string>
  | { name: 'AttributeToModify', alias?: string  } 
  | { name: 'modifierType', alias?: string  } 
  | { name: 'baseValueConstant', alias?: string  } 
  | { name: 'baseValueAttribute', alias?: string  } 
  | { name: 'baseValueScaleConstant', alias?: string  } 
  
export interface AttributeCreateOneInput {
  create?: AttributeCreateInput | null
}
export type AttributeCreateOneInputInputObject =
  | Extract<keyof AttributeCreateOneInput, string>
  | { name: 'create', alias?: string  } 
  
export interface NameByBrandCreateManyInput {
  create?: NameByBrandCreateInput[]
}
export type NameByBrandCreateManyInputInputObject =
  | Extract<keyof NameByBrandCreateManyInput, string>
  | { name: 'create', alias?: string  } 
  
export interface NameByBrandCreateInput {
  name?: string
  brand?: BrandCreateOneInput | null
}
export type NameByBrandCreateInputInputObject =
  | Extract<keyof NameByBrandCreateInput, string>
  | { name: 'name', alias?: string  } 
  | { name: 'brand', alias?: string  } 
  
export interface BrandCreateOneInput {
  create?: BrandCreateInput | null
  connect?: BrandWhereUniqueInput | null
}
export type BrandCreateOneInputInputObject =
  | Extract<keyof BrandCreateOneInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface BrandUpdateInput {
  name?: string | null
  weapons?: WeaponBaseUpdateManyWithoutBrandInput | null
  weaponParts?: WeaponPartUpdateManyWithoutBrandInput | null
}
export type BrandUpdateInputInputObject =
  | Extract<keyof BrandUpdateInput, string>
  | { name: 'name', alias?: string  } 
  | { name: 'weapons', alias?: string  } 
  | { name: 'weaponParts', alias?: string  } 
  
export interface WeaponBaseUpdateManyWithoutBrandInput {
  create?: WeaponBaseCreateWithoutBrandInput[]
  delete?: WeaponBaseWhereUniqueInput[]
  connect?: WeaponBaseWhereUniqueInput[]
  set?: WeaponBaseWhereUniqueInput[]
  disconnect?: WeaponBaseWhereUniqueInput[]
  update?: WeaponBaseUpdateWithWhereUniqueWithoutBrandInput[]
  upsert?: WeaponBaseUpsertWithWhereUniqueWithoutBrandInput[]
  deleteMany?: WeaponBaseScalarWhereInput[]
  updateMany?: WeaponBaseUpdateManyWithWhereNestedInput[]
}
export type WeaponBaseUpdateManyWithoutBrandInputInputObject =
  | Extract<keyof WeaponBaseUpdateManyWithoutBrandInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'delete', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  | { name: 'set', alias?: string  } 
  | { name: 'disconnect', alias?: string  } 
  | { name: 'update', alias?: string  } 
  | { name: 'upsert', alias?: string  } 
  | { name: 'deleteMany', alias?: string  } 
  | { name: 'updateMany', alias?: string  } 
  
export interface WeaponBaseUpdateWithWhereUniqueWithoutBrandInput {
  where?: WeaponBaseWhereUniqueInput
  data?: WeaponBaseUpdateWithoutBrandDataInput
}
export type WeaponBaseUpdateWithWhereUniqueWithoutBrandInputInputObject =
  | Extract<keyof WeaponBaseUpdateWithWhereUniqueWithoutBrandInput, string>
  | { name: 'where', alias?: string  } 
  | { name: 'data', alias?: string  } 
  
export interface WeaponBaseUpdateWithoutBrandDataInput {
  rarity?: prisma.Rarity | null
  type?: prisma.WeaponType | null
  attributes?: AttributeUpdateManyInput | null
}
export type WeaponBaseUpdateWithoutBrandDataInputInputObject =
  | Extract<keyof WeaponBaseUpdateWithoutBrandDataInput, string>
  | { name: 'rarity', alias?: string  } 
  | { name: 'type', alias?: string  } 
  | { name: 'attributes', alias?: string  } 
  
export interface AttributeUpdateManyInput {
  create?: AttributeCreateInput[]
  deleteMany?: AttributeScalarWhereInput[]
  updateMany?: AttributeUpdateManyWithWhereNestedInput[]
}
export type AttributeUpdateManyInputInputObject =
  | Extract<keyof AttributeUpdateManyInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'deleteMany', alias?: string  } 
  | { name: 'updateMany', alias?: string  } 
  
export interface AttributeScalarWhereInput {
  name?: string | null
  name_not?: string | null
  name_in?: string[]
  name_not_in?: string[]
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  value?: number | null
  value_not?: number | null
  value_in?: number[]
  value_not_in?: number[]
  value_lt?: number | null
  value_lte?: number | null
  value_gt?: number | null
  value_gte?: number | null
  AND?: AttributeScalarWhereInput[]
  OR?: AttributeScalarWhereInput[]
  NOT?: AttributeScalarWhereInput[]
}
export type AttributeScalarWhereInputInputObject =
  | Extract<keyof AttributeScalarWhereInput, string>
  | { name: 'name', alias?: string  } 
  | { name: 'name_not', alias?: string  } 
  | { name: 'name_in', alias?: string  } 
  | { name: 'name_not_in', alias?: string  } 
  | { name: 'name_lt', alias?: string  } 
  | { name: 'name_lte', alias?: string  } 
  | { name: 'name_gt', alias?: string  } 
  | { name: 'name_gte', alias?: string  } 
  | { name: 'name_contains', alias?: string  } 
  | { name: 'name_not_contains', alias?: string  } 
  | { name: 'name_starts_with', alias?: string  } 
  | { name: 'name_not_starts_with', alias?: string  } 
  | { name: 'name_ends_with', alias?: string  } 
  | { name: 'name_not_ends_with', alias?: string  } 
  | { name: 'value', alias?: string  } 
  | { name: 'value_not', alias?: string  } 
  | { name: 'value_in', alias?: string  } 
  | { name: 'value_not_in', alias?: string  } 
  | { name: 'value_lt', alias?: string  } 
  | { name: 'value_lte', alias?: string  } 
  | { name: 'value_gt', alias?: string  } 
  | { name: 'value_gte', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface AttributeUpdateManyWithWhereNestedInput {
  where?: AttributeScalarWhereInput
  data?: AttributeUpdateManyDataInput
}
export type AttributeUpdateManyWithWhereNestedInputInputObject =
  | Extract<keyof AttributeUpdateManyWithWhereNestedInput, string>
  | { name: 'where', alias?: string  } 
  | { name: 'data', alias?: string  } 
  
export interface AttributeUpdateManyDataInput {
  name?: string | null
  value?: number | null
}
export type AttributeUpdateManyDataInputInputObject =
  | Extract<keyof AttributeUpdateManyDataInput, string>
  | { name: 'name', alias?: string  } 
  | { name: 'value', alias?: string  } 
  
export interface WeaponBaseUpsertWithWhereUniqueWithoutBrandInput {
  where?: WeaponBaseWhereUniqueInput
  update?: WeaponBaseUpdateWithoutBrandDataInput
  create?: WeaponBaseCreateWithoutBrandInput
}
export type WeaponBaseUpsertWithWhereUniqueWithoutBrandInputInputObject =
  | Extract<keyof WeaponBaseUpsertWithWhereUniqueWithoutBrandInput, string>
  | { name: 'where', alias?: string  } 
  | { name: 'update', alias?: string  } 
  | { name: 'create', alias?: string  } 
  
export interface WeaponBaseScalarWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  rarity?: prisma.Rarity | null
  rarity_not?: prisma.Rarity | null
  rarity_in?: prisma.Rarity[]
  rarity_not_in?: prisma.Rarity[]
  type?: prisma.WeaponType | null
  type_not?: prisma.WeaponType | null
  type_in?: prisma.WeaponType[]
  type_not_in?: prisma.WeaponType[]
  AND?: WeaponBaseScalarWhereInput[]
  OR?: WeaponBaseScalarWhereInput[]
  NOT?: WeaponBaseScalarWhereInput[]
}
export type WeaponBaseScalarWhereInputInputObject =
  | Extract<keyof WeaponBaseScalarWhereInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'id_not', alias?: string  } 
  | { name: 'id_in', alias?: string  } 
  | { name: 'id_not_in', alias?: string  } 
  | { name: 'id_lt', alias?: string  } 
  | { name: 'id_lte', alias?: string  } 
  | { name: 'id_gt', alias?: string  } 
  | { name: 'id_gte', alias?: string  } 
  | { name: 'id_contains', alias?: string  } 
  | { name: 'id_not_contains', alias?: string  } 
  | { name: 'id_starts_with', alias?: string  } 
  | { name: 'id_not_starts_with', alias?: string  } 
  | { name: 'id_ends_with', alias?: string  } 
  | { name: 'id_not_ends_with', alias?: string  } 
  | { name: 'rarity', alias?: string  } 
  | { name: 'rarity_not', alias?: string  } 
  | { name: 'rarity_in', alias?: string  } 
  | { name: 'rarity_not_in', alias?: string  } 
  | { name: 'type', alias?: string  } 
  | { name: 'type_not', alias?: string  } 
  | { name: 'type_in', alias?: string  } 
  | { name: 'type_not_in', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface WeaponBaseUpdateManyWithWhereNestedInput {
  where?: WeaponBaseScalarWhereInput
  data?: WeaponBaseUpdateManyDataInput
}
export type WeaponBaseUpdateManyWithWhereNestedInputInputObject =
  | Extract<keyof WeaponBaseUpdateManyWithWhereNestedInput, string>
  | { name: 'where', alias?: string  } 
  | { name: 'data', alias?: string  } 
  
export interface WeaponBaseUpdateManyDataInput {
  rarity?: prisma.Rarity | null
  type?: prisma.WeaponType | null
}
export type WeaponBaseUpdateManyDataInputInputObject =
  | Extract<keyof WeaponBaseUpdateManyDataInput, string>
  | { name: 'rarity', alias?: string  } 
  | { name: 'type', alias?: string  } 
  
export interface WeaponPartUpdateManyWithoutBrandInput {
  create?: WeaponPartCreateWithoutBrandInput[]
  delete?: WeaponPartWhereUniqueInput[]
  connect?: WeaponPartWhereUniqueInput[]
  set?: WeaponPartWhereUniqueInput[]
  disconnect?: WeaponPartWhereUniqueInput[]
  update?: WeaponPartUpdateWithWhereUniqueWithoutBrandInput[]
  upsert?: WeaponPartUpsertWithWhereUniqueWithoutBrandInput[]
  deleteMany?: WeaponPartScalarWhereInput[]
  updateMany?: WeaponPartUpdateManyWithWhereNestedInput[]
}
export type WeaponPartUpdateManyWithoutBrandInputInputObject =
  | Extract<keyof WeaponPartUpdateManyWithoutBrandInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'delete', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  | { name: 'set', alias?: string  } 
  | { name: 'disconnect', alias?: string  } 
  | { name: 'update', alias?: string  } 
  | { name: 'upsert', alias?: string  } 
  | { name: 'deleteMany', alias?: string  } 
  | { name: 'updateMany', alias?: string  } 
  
export interface WeaponPartUpdateWithWhereUniqueWithoutBrandInput {
  where?: WeaponPartWhereUniqueInput
  data?: WeaponPartUpdateWithoutBrandDataInput
}
export type WeaponPartUpdateWithWhereUniqueWithoutBrandInputInputObject =
  | Extract<keyof WeaponPartUpdateWithWhereUniqueWithoutBrandInput, string>
  | { name: 'where', alias?: string  } 
  | { name: 'data', alias?: string  } 
  
export interface WeaponPartUpdateWithoutBrandDataInput {
  effects?: EffectUpdateManyInput | null
  prefixes?: NameByBrandUpdateManyInput | null
  titles?: NameByBrandUpdateManyInput | null
  weaponType?: prisma.WeaponType | null
  partType?: prisma.WeaponPartType | null
}
export type WeaponPartUpdateWithoutBrandDataInputInputObject =
  | Extract<keyof WeaponPartUpdateWithoutBrandDataInput, string>
  | { name: 'effects', alias?: string  } 
  | { name: 'prefixes', alias?: string  } 
  | { name: 'titles', alias?: string  } 
  | { name: 'weaponType', alias?: string  } 
  | { name: 'partType', alias?: string  } 
  
export interface EffectUpdateManyInput {
  create?: EffectCreateInput[]
  deleteMany?: EffectScalarWhereInput[]
  updateMany?: EffectUpdateManyWithWhereNestedInput[]
}
export type EffectUpdateManyInputInputObject =
  | Extract<keyof EffectUpdateManyInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'deleteMany', alias?: string  } 
  | { name: 'updateMany', alias?: string  } 
  
export interface EffectScalarWhereInput {
  modifierType?: prisma.ModifierType | null
  modifierType_not?: prisma.ModifierType | null
  modifierType_in?: prisma.ModifierType[]
  modifierType_not_in?: prisma.ModifierType[]
  baseValueConstant?: number | null
  baseValueConstant_not?: number | null
  baseValueConstant_in?: number[]
  baseValueConstant_not_in?: number[]
  baseValueConstant_lt?: number | null
  baseValueConstant_lte?: number | null
  baseValueConstant_gt?: number | null
  baseValueConstant_gte?: number | null
  baseValueScaleConstant?: number | null
  baseValueScaleConstant_not?: number | null
  baseValueScaleConstant_in?: number[]
  baseValueScaleConstant_not_in?: number[]
  baseValueScaleConstant_lt?: number | null
  baseValueScaleConstant_lte?: number | null
  baseValueScaleConstant_gt?: number | null
  baseValueScaleConstant_gte?: number | null
  AND?: EffectScalarWhereInput[]
  OR?: EffectScalarWhereInput[]
  NOT?: EffectScalarWhereInput[]
}
export type EffectScalarWhereInputInputObject =
  | Extract<keyof EffectScalarWhereInput, string>
  | { name: 'modifierType', alias?: string  } 
  | { name: 'modifierType_not', alias?: string  } 
  | { name: 'modifierType_in', alias?: string  } 
  | { name: 'modifierType_not_in', alias?: string  } 
  | { name: 'baseValueConstant', alias?: string  } 
  | { name: 'baseValueConstant_not', alias?: string  } 
  | { name: 'baseValueConstant_in', alias?: string  } 
  | { name: 'baseValueConstant_not_in', alias?: string  } 
  | { name: 'baseValueConstant_lt', alias?: string  } 
  | { name: 'baseValueConstant_lte', alias?: string  } 
  | { name: 'baseValueConstant_gt', alias?: string  } 
  | { name: 'baseValueConstant_gte', alias?: string  } 
  | { name: 'baseValueScaleConstant', alias?: string  } 
  | { name: 'baseValueScaleConstant_not', alias?: string  } 
  | { name: 'baseValueScaleConstant_in', alias?: string  } 
  | { name: 'baseValueScaleConstant_not_in', alias?: string  } 
  | { name: 'baseValueScaleConstant_lt', alias?: string  } 
  | { name: 'baseValueScaleConstant_lte', alias?: string  } 
  | { name: 'baseValueScaleConstant_gt', alias?: string  } 
  | { name: 'baseValueScaleConstant_gte', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface EffectUpdateManyWithWhereNestedInput {
  where?: EffectScalarWhereInput
  data?: EffectUpdateManyDataInput
}
export type EffectUpdateManyWithWhereNestedInputInputObject =
  | Extract<keyof EffectUpdateManyWithWhereNestedInput, string>
  | { name: 'where', alias?: string  } 
  | { name: 'data', alias?: string  } 
  
export interface EffectUpdateManyDataInput {
  modifierType?: prisma.ModifierType | null
  baseValueConstant?: number | null
  baseValueScaleConstant?: number | null
}
export type EffectUpdateManyDataInputInputObject =
  | Extract<keyof EffectUpdateManyDataInput, string>
  | { name: 'modifierType', alias?: string  } 
  | { name: 'baseValueConstant', alias?: string  } 
  | { name: 'baseValueScaleConstant', alias?: string  } 
  
export interface NameByBrandUpdateManyInput {
  create?: NameByBrandCreateInput[]
  deleteMany?: NameByBrandScalarWhereInput[]
  updateMany?: NameByBrandUpdateManyWithWhereNestedInput[]
}
export type NameByBrandUpdateManyInputInputObject =
  | Extract<keyof NameByBrandUpdateManyInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'deleteMany', alias?: string  } 
  | { name: 'updateMany', alias?: string  } 
  
export interface NameByBrandScalarWhereInput {
  name?: string | null
  name_not?: string | null
  name_in?: string[]
  name_not_in?: string[]
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  AND?: NameByBrandScalarWhereInput[]
  OR?: NameByBrandScalarWhereInput[]
  NOT?: NameByBrandScalarWhereInput[]
}
export type NameByBrandScalarWhereInputInputObject =
  | Extract<keyof NameByBrandScalarWhereInput, string>
  | { name: 'name', alias?: string  } 
  | { name: 'name_not', alias?: string  } 
  | { name: 'name_in', alias?: string  } 
  | { name: 'name_not_in', alias?: string  } 
  | { name: 'name_lt', alias?: string  } 
  | { name: 'name_lte', alias?: string  } 
  | { name: 'name_gt', alias?: string  } 
  | { name: 'name_gte', alias?: string  } 
  | { name: 'name_contains', alias?: string  } 
  | { name: 'name_not_contains', alias?: string  } 
  | { name: 'name_starts_with', alias?: string  } 
  | { name: 'name_not_starts_with', alias?: string  } 
  | { name: 'name_ends_with', alias?: string  } 
  | { name: 'name_not_ends_with', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface NameByBrandUpdateManyWithWhereNestedInput {
  where?: NameByBrandScalarWhereInput
  data?: NameByBrandUpdateManyDataInput
}
export type NameByBrandUpdateManyWithWhereNestedInputInputObject =
  | Extract<keyof NameByBrandUpdateManyWithWhereNestedInput, string>
  | { name: 'where', alias?: string  } 
  | { name: 'data', alias?: string  } 
  
export interface NameByBrandUpdateManyDataInput {
  name?: string | null
}
export type NameByBrandUpdateManyDataInputInputObject =
  | Extract<keyof NameByBrandUpdateManyDataInput, string>
  | { name: 'name', alias?: string  } 
  
export interface WeaponPartUpsertWithWhereUniqueWithoutBrandInput {
  where?: WeaponPartWhereUniqueInput
  update?: WeaponPartUpdateWithoutBrandDataInput
  create?: WeaponPartCreateWithoutBrandInput
}
export type WeaponPartUpsertWithWhereUniqueWithoutBrandInputInputObject =
  | Extract<keyof WeaponPartUpsertWithWhereUniqueWithoutBrandInput, string>
  | { name: 'where', alias?: string  } 
  | { name: 'update', alias?: string  } 
  | { name: 'create', alias?: string  } 
  
export interface WeaponPartScalarWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  weaponType?: prisma.WeaponType | null
  weaponType_not?: prisma.WeaponType | null
  weaponType_in?: prisma.WeaponType[]
  weaponType_not_in?: prisma.WeaponType[]
  partType?: prisma.WeaponPartType | null
  partType_not?: prisma.WeaponPartType | null
  partType_in?: prisma.WeaponPartType[]
  partType_not_in?: prisma.WeaponPartType[]
  AND?: WeaponPartScalarWhereInput[]
  OR?: WeaponPartScalarWhereInput[]
  NOT?: WeaponPartScalarWhereInput[]
}
export type WeaponPartScalarWhereInputInputObject =
  | Extract<keyof WeaponPartScalarWhereInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'id_not', alias?: string  } 
  | { name: 'id_in', alias?: string  } 
  | { name: 'id_not_in', alias?: string  } 
  | { name: 'id_lt', alias?: string  } 
  | { name: 'id_lte', alias?: string  } 
  | { name: 'id_gt', alias?: string  } 
  | { name: 'id_gte', alias?: string  } 
  | { name: 'id_contains', alias?: string  } 
  | { name: 'id_not_contains', alias?: string  } 
  | { name: 'id_starts_with', alias?: string  } 
  | { name: 'id_not_starts_with', alias?: string  } 
  | { name: 'id_ends_with', alias?: string  } 
  | { name: 'id_not_ends_with', alias?: string  } 
  | { name: 'weaponType', alias?: string  } 
  | { name: 'weaponType_not', alias?: string  } 
  | { name: 'weaponType_in', alias?: string  } 
  | { name: 'weaponType_not_in', alias?: string  } 
  | { name: 'partType', alias?: string  } 
  | { name: 'partType_not', alias?: string  } 
  | { name: 'partType_in', alias?: string  } 
  | { name: 'partType_not_in', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface WeaponPartUpdateManyWithWhereNestedInput {
  where?: WeaponPartScalarWhereInput
  data?: WeaponPartUpdateManyDataInput
}
export type WeaponPartUpdateManyWithWhereNestedInputInputObject =
  | Extract<keyof WeaponPartUpdateManyWithWhereNestedInput, string>
  | { name: 'where', alias?: string  } 
  | { name: 'data', alias?: string  } 
  
export interface WeaponPartUpdateManyDataInput {
  weaponType?: prisma.WeaponType | null
  partType?: prisma.WeaponPartType | null
}
export type WeaponPartUpdateManyDataInputInputObject =
  | Extract<keyof WeaponPartUpdateManyDataInput, string>
  | { name: 'weaponType', alias?: string  } 
  | { name: 'partType', alias?: string  } 
  
export interface BrandUpdateManyMutationInput {
  name?: string | null
}
export type BrandUpdateManyMutationInputInputObject =
  | Extract<keyof BrandUpdateManyMutationInput, string>
  | { name: 'name', alias?: string  } 
  
export interface WeaponBaseCreateInput {
  rarity?: prisma.Rarity | null
  brand?: BrandCreateOneWithoutWeaponsInput | null
  type?: prisma.WeaponType | null
  attributes?: AttributeCreateManyInput | null
}
export type WeaponBaseCreateInputInputObject =
  | Extract<keyof WeaponBaseCreateInput, string>
  | { name: 'rarity', alias?: string  } 
  | { name: 'brand', alias?: string  } 
  | { name: 'type', alias?: string  } 
  | { name: 'attributes', alias?: string  } 
  
export interface BrandCreateOneWithoutWeaponsInput {
  create?: BrandCreateWithoutWeaponsInput | null
  connect?: BrandWhereUniqueInput | null
}
export type BrandCreateOneWithoutWeaponsInputInputObject =
  | Extract<keyof BrandCreateOneWithoutWeaponsInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface BrandCreateWithoutWeaponsInput {
  name?: string
  weaponParts?: WeaponPartCreateManyWithoutBrandInput | null
}
export type BrandCreateWithoutWeaponsInputInputObject =
  | Extract<keyof BrandCreateWithoutWeaponsInput, string>
  | { name: 'name', alias?: string  } 
  | { name: 'weaponParts', alias?: string  } 
  
export interface WeaponBaseUpdateInput {
  rarity?: prisma.Rarity | null
  brand?: BrandUpdateOneWithoutWeaponsInput | null
  type?: prisma.WeaponType | null
  attributes?: AttributeUpdateManyInput | null
}
export type WeaponBaseUpdateInputInputObject =
  | Extract<keyof WeaponBaseUpdateInput, string>
  | { name: 'rarity', alias?: string  } 
  | { name: 'brand', alias?: string  } 
  | { name: 'type', alias?: string  } 
  | { name: 'attributes', alias?: string  } 
  
export interface BrandUpdateOneWithoutWeaponsInput {
  create?: BrandCreateWithoutWeaponsInput | null
  update?: BrandUpdateWithoutWeaponsDataInput | null
  upsert?: BrandUpsertWithoutWeaponsInput | null
  delete?: boolean | null
  disconnect?: boolean | null
  connect?: BrandWhereUniqueInput | null
}
export type BrandUpdateOneWithoutWeaponsInputInputObject =
  | Extract<keyof BrandUpdateOneWithoutWeaponsInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'update', alias?: string  } 
  | { name: 'upsert', alias?: string  } 
  | { name: 'delete', alias?: string  } 
  | { name: 'disconnect', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface BrandUpdateWithoutWeaponsDataInput {
  name?: string | null
  weaponParts?: WeaponPartUpdateManyWithoutBrandInput | null
}
export type BrandUpdateWithoutWeaponsDataInputInputObject =
  | Extract<keyof BrandUpdateWithoutWeaponsDataInput, string>
  | { name: 'name', alias?: string  } 
  | { name: 'weaponParts', alias?: string  } 
  
export interface BrandUpsertWithoutWeaponsInput {
  update?: BrandUpdateWithoutWeaponsDataInput
  create?: BrandCreateWithoutWeaponsInput
}
export type BrandUpsertWithoutWeaponsInputInputObject =
  | Extract<keyof BrandUpsertWithoutWeaponsInput, string>
  | { name: 'update', alias?: string  } 
  | { name: 'create', alias?: string  } 
  
export interface WeaponBaseUpdateManyMutationInput {
  rarity?: prisma.Rarity | null
  type?: prisma.WeaponType | null
}
export type WeaponBaseUpdateManyMutationInputInputObject =
  | Extract<keyof WeaponBaseUpdateManyMutationInput, string>
  | { name: 'rarity', alias?: string  } 
  | { name: 'type', alias?: string  } 
  
export interface WeaponPartCreateInput {
  effects?: EffectCreateManyInput | null
  prefixes?: NameByBrandCreateManyInput | null
  titles?: NameByBrandCreateManyInput | null
  brand?: BrandCreateOneWithoutWeaponPartsInput | null
  weaponType?: prisma.WeaponType | null
  partType?: prisma.WeaponPartType | null
}
export type WeaponPartCreateInputInputObject =
  | Extract<keyof WeaponPartCreateInput, string>
  | { name: 'effects', alias?: string  } 
  | { name: 'prefixes', alias?: string  } 
  | { name: 'titles', alias?: string  } 
  | { name: 'brand', alias?: string  } 
  | { name: 'weaponType', alias?: string  } 
  | { name: 'partType', alias?: string  } 
  
export interface BrandCreateOneWithoutWeaponPartsInput {
  create?: BrandCreateWithoutWeaponPartsInput | null
  connect?: BrandWhereUniqueInput | null
}
export type BrandCreateOneWithoutWeaponPartsInputInputObject =
  | Extract<keyof BrandCreateOneWithoutWeaponPartsInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface BrandCreateWithoutWeaponPartsInput {
  name?: string
  weapons?: WeaponBaseCreateManyWithoutBrandInput | null
}
export type BrandCreateWithoutWeaponPartsInputInputObject =
  | Extract<keyof BrandCreateWithoutWeaponPartsInput, string>
  | { name: 'name', alias?: string  } 
  | { name: 'weapons', alias?: string  } 
  
export interface WeaponPartUpdateInput {
  effects?: EffectUpdateManyInput | null
  prefixes?: NameByBrandUpdateManyInput | null
  titles?: NameByBrandUpdateManyInput | null
  brand?: BrandUpdateOneWithoutWeaponPartsInput | null
  weaponType?: prisma.WeaponType | null
  partType?: prisma.WeaponPartType | null
}
export type WeaponPartUpdateInputInputObject =
  | Extract<keyof WeaponPartUpdateInput, string>
  | { name: 'effects', alias?: string  } 
  | { name: 'prefixes', alias?: string  } 
  | { name: 'titles', alias?: string  } 
  | { name: 'brand', alias?: string  } 
  | { name: 'weaponType', alias?: string  } 
  | { name: 'partType', alias?: string  } 
  
export interface BrandUpdateOneWithoutWeaponPartsInput {
  create?: BrandCreateWithoutWeaponPartsInput | null
  update?: BrandUpdateWithoutWeaponPartsDataInput | null
  upsert?: BrandUpsertWithoutWeaponPartsInput | null
  delete?: boolean | null
  disconnect?: boolean | null
  connect?: BrandWhereUniqueInput | null
}
export type BrandUpdateOneWithoutWeaponPartsInputInputObject =
  | Extract<keyof BrandUpdateOneWithoutWeaponPartsInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'update', alias?: string  } 
  | { name: 'upsert', alias?: string  } 
  | { name: 'delete', alias?: string  } 
  | { name: 'disconnect', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface BrandUpdateWithoutWeaponPartsDataInput {
  name?: string | null
  weapons?: WeaponBaseUpdateManyWithoutBrandInput | null
}
export type BrandUpdateWithoutWeaponPartsDataInputInputObject =
  | Extract<keyof BrandUpdateWithoutWeaponPartsDataInput, string>
  | { name: 'name', alias?: string  } 
  | { name: 'weapons', alias?: string  } 
  
export interface BrandUpsertWithoutWeaponPartsInput {
  update?: BrandUpdateWithoutWeaponPartsDataInput
  create?: BrandCreateWithoutWeaponPartsInput
}
export type BrandUpsertWithoutWeaponPartsInputInputObject =
  | Extract<keyof BrandUpsertWithoutWeaponPartsInput, string>
  | { name: 'update', alias?: string  } 
  | { name: 'create', alias?: string  } 
  
export interface WeaponPartUpdateManyMutationInput {
  weaponType?: prisma.WeaponType | null
  partType?: prisma.WeaponPartType | null
}
export type WeaponPartUpdateManyMutationInputInputObject =
  | Extract<keyof WeaponPartUpdateManyMutationInput, string>
  | { name: 'weaponType', alias?: string  } 
  | { name: 'partType', alias?: string  } 
  
export interface UserSubscriptionWhereInput {
  mutation_in?: prisma.MutationType[]
  updatedFields_contains?: string | null
  updatedFields_contains_every?: string[]
  updatedFields_contains_some?: string[]
  node?: UserWhereInput | null
  AND?: UserSubscriptionWhereInput[]
}
export type UserSubscriptionWhereInputInputObject =
  | Extract<keyof UserSubscriptionWhereInput, string>
  | { name: 'mutation_in', alias?: string  } 
  | { name: 'updatedFields_contains', alias?: string  } 
  | { name: 'updatedFields_contains_every', alias?: string  } 
  | { name: 'updatedFields_contains_some', alias?: string  } 
  | { name: 'node', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  
export interface BrandSubscriptionWhereInput {
  mutation_in?: prisma.MutationType[]
  updatedFields_contains?: string | null
  updatedFields_contains_every?: string[]
  updatedFields_contains_some?: string[]
  node?: BrandWhereInput | null
  AND?: BrandSubscriptionWhereInput[]
}
export type BrandSubscriptionWhereInputInputObject =
  | Extract<keyof BrandSubscriptionWhereInput, string>
  | { name: 'mutation_in', alias?: string  } 
  | { name: 'updatedFields_contains', alias?: string  } 
  | { name: 'updatedFields_contains_every', alias?: string  } 
  | { name: 'updatedFields_contains_some', alias?: string  } 
  | { name: 'node', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  
export interface WeaponBaseSubscriptionWhereInput {
  mutation_in?: prisma.MutationType[]
  updatedFields_contains?: string | null
  updatedFields_contains_every?: string[]
  updatedFields_contains_some?: string[]
  node?: WeaponBaseWhereInput | null
  AND?: WeaponBaseSubscriptionWhereInput[]
}
export type WeaponBaseSubscriptionWhereInputInputObject =
  | Extract<keyof WeaponBaseSubscriptionWhereInput, string>
  | { name: 'mutation_in', alias?: string  } 
  | { name: 'updatedFields_contains', alias?: string  } 
  | { name: 'updatedFields_contains_every', alias?: string  } 
  | { name: 'updatedFields_contains_some', alias?: string  } 
  | { name: 'node', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  
export interface WeaponPartSubscriptionWhereInput {
  mutation_in?: prisma.MutationType[]
  updatedFields_contains?: string | null
  updatedFields_contains_every?: string[]
  updatedFields_contains_some?: string[]
  node?: WeaponPartWhereInput | null
  AND?: WeaponPartSubscriptionWhereInput[]
}
export type WeaponPartSubscriptionWhereInputInputObject =
  | Extract<keyof WeaponPartSubscriptionWhereInput, string>
  | { name: 'mutation_in', alias?: string  } 
  | { name: 'updatedFields_contains', alias?: string  } 
  | { name: 'updatedFields_contains_every', alias?: string  } 
  | { name: 'updatedFields_contains_some', alias?: string  } 
  | { name: 'node', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  

export type UserOrderByInputValues =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  
export type RarityValues =
  | 'COMMON'
  | 'UNCOMMON'
  | 'RARE'
  | 'VERY_RARE'
  | 'LEGENDARY'
  
export type ModifierTypeValues =
  | 'SCALE'
  | 'PRE_ADD'
  
export type WeaponTypeValues =
  | 'PISTOL'
  | 'SHOTGUN'
  | 'ASSAULT_RIFLE'
  | 'SNIPER'
  | 'ROCKET_LAUNCHER'
  | 'SMG'
  
export type WeaponPartTypeValues =
  | 'BODY'
  | 'BARREL'
  | 'ACCESSORY'
  | 'SIGHT'
  | 'GRIP'
  | 'STOCK'
  
export type WeaponBaseOrderByInputValues =
  | 'id_ASC'
  | 'id_DESC'
  | 'rarity_ASC'
  | 'rarity_DESC'
  | 'type_ASC'
  | 'type_DESC'
  
export type WeaponPartOrderByInputValues =
  | 'id_ASC'
  | 'id_DESC'
  | 'weaponType_ASC'
  | 'weaponType_DESC'
  | 'partType_ASC'
  | 'partType_DESC'
  
export type BrandOrderByInputValues =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  
export type MutationTypeValues =
  | 'CREATED'
  | 'UPDATED'
  | 'DELETED'
  
  