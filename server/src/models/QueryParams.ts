interface IQueryParams {
    limit?: number | 20;
    skip?: number | 0;
    cardCode: string
  }
  
  export class QueryParams implements IQueryParams {
    limit: number | 20;
    skip: number | 0;
    cardCode: string = "";
  
    constructor(limit: number = 20, skip: number = 0, cardCode: string) {
      this.limit = limit;
      this.skip = skip;
      this.cardCode = cardCode;
    }
  
    static from_json(data: Partial<IQueryParams>): QueryParams {
      return new QueryParams(
        data.limit || 20,
        data.skip || 0,
        data.cardCode || "",
      );
    }
  }
  