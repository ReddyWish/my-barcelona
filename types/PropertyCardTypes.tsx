interface Location {
  street: string;
  city: string;
  state: string;
  zipcode: string;
}

interface SellerInfo {
  name: string;
  email: string;
  phone: string;
}

interface Rates {
  nightly?: number;
  weekly?: number;
  monthly?: number;
}
export interface PropertyCardType {
  _id: string;
  owner: string;
  name: string;
  type: string;
  description: string;
  location: Location;
  beds: number;
  baths: number;
  square_feet: number;
  amenities: string[];
  rates: Rates;
  seller_info: SellerInfo;
  images: string[];
  is_featured: boolean;
  createdAt: string;
  updatedAt: string;
}
