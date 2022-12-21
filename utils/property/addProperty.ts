interface PropAddress {
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  pinCode: number;
  country: string;
}
interface Property {
  userId: string;
  name: string;
  address: PropAddress;
}
export const addProperty = (property: Property) => {};
