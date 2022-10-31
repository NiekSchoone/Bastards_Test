export default class ValidationUtils {
  static ValidateObjectBySchema(obj: any, schema: any): boolean {
    let succes: boolean = true;

    Object.keys(schema).forEach((key: string) => {
      if (obj[key]) {
        let propType = obj[key].constructor.name.toLowerCase();
        let schemaType = schema[key].toLowerCase();

        if (propType !== schemaType) {
          succes = false;
        }
      } else {
        succes = false;
      }
    });

    return succes;
  }
}
