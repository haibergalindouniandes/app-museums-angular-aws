export class Museum {
  id: number;
  name: string;
  description: string;
  city: string;
  address: string;
  image: string;
  isBlocked?: boolean;

  constructor(
    id: number,
    name: string,
    description: string,
    city: string,
    address: string,
    image: string,
    isBlocked?: boolean
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.city = city;
    this.address = address;
    this.image = image;
    this.isBlocked = isBlocked;
  }
}
