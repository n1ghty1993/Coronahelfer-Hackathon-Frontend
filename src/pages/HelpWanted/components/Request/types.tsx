export interface IRequest {
  distance: number;
  title: string;
  description: string;
  category: string;
  _id: string;
}

interface IAddress {
  plz: string;
  city: string;
  street: string;
  street_nr: string;
}
