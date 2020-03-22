export interface IRequest {
  distance: number;
  title: string;
  description: string;
  category: {
    _id: string;
    name: string;
    internal_id: number;
    description: string;
  };
  _id: string;
}

interface IAddress {
  plz: string;
  city: string;
  street: string;
  street_nr: string;
}
