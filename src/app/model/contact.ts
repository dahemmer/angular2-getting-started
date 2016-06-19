export class Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  birthday: string;
  address: Address;
}

class Address {
  street: string;
  number: string;
  city: string;
  zip: string;
  country: string;
}
