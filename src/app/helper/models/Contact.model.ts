export class Contact {
    id: number;
    name: string;
    phoneNumber: string;

    constructor(values: Object = {}) {
        Object.assign(this, values)
      }
  }