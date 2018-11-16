export type ISchemaType = any;
export type IStorageClass = any;
export type IQueryType = any;

export interface IQueryOptions {
  skip?: number;
  limit?: number;
  acl?: string[];
  sort?: { [k: string]: number };
  count?: boolean | number;
  keys?: string[];
  op?: string;
  distinct?: boolean;
  pipeline?: any;
  readPreference?: string;
}

export interface IUpdateQueryOptions {
  many?: boolean;
  upsert?: boolean;
}

export type FullQueryOptions = IQueryOptions & IUpdateQueryOptions;

export interface IStorageAdapter {
  canSortOnJoinTables: boolean;

  classExists(className: string): Promise<boolean>;
  setClassLevelPermissions(className: string, clps: any): Promise<void>;
  createClass(className: string, schema: ISchemaType): Promise<void>;
  addFieldIfNotExists(
    className: string,
    fieldName: string,
    type: any,
  ): Promise<void>;
  deleteClass(className: string): Promise<void>;
  deleteAllClasses(fast: boolean): Promise<void>;
  deleteFields(
    className: string,
    schema: ISchemaType,
    fieldNames: string[],
  ): Promise<void>;
  getAllClasses(): Promise<IStorageClass[]>;
  getClass(className: string): Promise<IStorageClass>;
  createObject(
    className: string,
    schema: ISchemaType,
    object: any,
  ): Promise<any>;
  deleteObjectsByQuery(
    className: string,
    schema: ISchemaType,
    query: IQueryType,
  ): Promise<void>;
  updateObjectsByQuery(
    className: string,
    schema: ISchemaType,
    query: IQueryType,
    update: any,
  ): Promise<[any]>;
  findOneAndUpdate(
    className: string,
    schema: ISchemaType,
    query: IQueryType,
    update: any,
  ): Promise<any>;
  upsertOneObject(
    className: string,
    schema: ISchemaType,
    query: IQueryType,
    update: any,
  ): Promise<any>;
  find(
    className: string,
    schema: ISchemaType,
    query: IQueryType,
    options: IQueryOptions,
  ): Promise<[any]>;
  ensureUniqueness(
    className: string,
    schema: ISchemaType,
    fieldNames: string[],
  ): Promise<void>;
  count(
    className: string,
    schema: ISchemaType,
    query: IQueryType,
    readPreference?: string,
  ): Promise<number>;
  distinct(
    className: string,
    schema: ISchemaType,
    query: IQueryType,
    fieldName: string,
  ): Promise<any>;
  aggregate(
    className: string,
    schema: any,
    pipeline: any,
    readPreference?: string,
  ): Promise<any>;
  performInitialization(options?: any): Promise<void>;

  // Indexing
  createIndexes(className: string, indexes: any, conn?: any): Promise<void>;
  getIndexes(className: string, connection?: any): Promise<void>;
  updateSchemaWithIndexes(): Promise<void>;
  setIndexesWithSchemaFormat(
    className: string,
    submittedIndexes: any,
    existingIndexes: any,
    fields: any,
    conn?: any,
  ): Promise<void>;
}
