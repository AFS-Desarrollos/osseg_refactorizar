interface IQueryParams {
    limit?: number | 20;
    skip?: number | 0;
  }
  
  export class QueryParams implements IQueryParams {
    limit: number | 20;
    skip: number | 0;
  
    constructor(limit: number = 20, skip: number = 0) {
      this.limit = limit;
      this.skip = skip;
    }
  
    static from_json(data: Partial<IQueryParams>): QueryParams {
      return new QueryParams(
        data.limit || 20,
        data.skip || 0
      );
    }
  }
  