export interface IRequest {
  title: string;
  description: string;
  category: string;
  address: IAddress;
}

interface IAddress {
  plz: string;
  city: string;
  street: string;
  street_nr: string;
}
