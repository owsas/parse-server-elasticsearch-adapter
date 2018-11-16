import * as elasticsearch from 'elasticsearch';
import { IQueryType, ISchemaType, IStorageAdapter } from './StorageTypes';

export default class Adapter implements IStorageAdapter {
  public client: elasticsearch.Client;

  constructor(params?: any) {
    this.client = new elasticsearch.Client({
      host: 'localhost:9200',
      log: 'trace',
    });
  }

  public classExists(className: string): Promise<boolean> {
    return this.client.indices.exists({
      index: className,
    });
  }

  public deleteClass(className: string): Promise<void> {
    return this.client.indices.delete({
      index: className,
    });
  }

  public deleteAllClasses(fast: boolean): Promise<void> {
    return this.client.indices.delete({
      index: '_all',
    });
  }

  public async count(
    className: string,
    schema: ISchemaType,
    query: IQueryType,
    readPreference?: string,
  ): Promise<number> {
    const response = await this.client.count({
      index: className, // missing query
    });

    return response.count;
  }
}
