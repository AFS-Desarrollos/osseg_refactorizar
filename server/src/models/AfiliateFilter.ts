interface IAfiliateFilter {
  name?: string | null;
  lastname?: string | null;
  state?: string | null;
  afiliateNumber?: string | null;
}

export class AfiliateFilter implements IAfiliateFilter {
  name: string | null;
  lastname: string | null;
  state: string | null;
  afiliateNumber: string | null;

  constructor(name: string | null = null, lastname: string | null = null, state: string | null = null, afiliateNumber: string | null = null) {
    this.name = name;
    this.lastname = lastname;
    this.state = state;
    this.afiliateNumber = afiliateNumber;
  }

  static from_json(data: Partial<IAfiliateFilter>): AfiliateFilter {
    return new AfiliateFilter(
      data.name || null,
      data.lastname || null,
      data.state || null,
      data.afiliateNumber || null
    );
  }
}
