export default class Transform {
  public static parseTypeToElasticSearchType(type) {
    switch (type.type) {
      case 'String': return 'string';
      case 'Date': return 'date';
      case 'Object': return 'json';
      case 'File': return 'text';
      case 'Boolean': return 'boolean';
      case 'Pointer': return 'json';
      case 'Number': return 'number';
      case 'GeoPoint': return 'geo_point';
      case 'Bytes': return 'json';
      case 'Array': return 'json';
      default: throw new Error(`no type for ${JSON.stringify(type)} yet`);
    }
  }
}
