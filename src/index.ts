import Adapter from './Adapter';

export default class ElasticSearch {
  public adapter: Adapter;
  public uri: string;
  public options: any;

  constructor(uri, options) {
    this.uri = uri;
    this.options = options || {};
  }

  public getAdapter() {
    if (this.adapter) {
      return this.adapter;
    }

    this.adapter = new Adapter({
      collectionPrefix: '',
      databaseOptions: this.options,
      uri: this.uri,
    });

    return this.adapter;
  }
}
