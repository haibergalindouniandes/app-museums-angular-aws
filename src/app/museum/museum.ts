export class Museum {
  id: number;
  name: string;
  description: string;
  city: string;
  address: string;
  image: string;

  constructor(
    id: number,
    name: string,
    description: string,
    city: string,
    address: string,
    image: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.city = city;
    this.address = address;
    this.image = image;
  }
}
