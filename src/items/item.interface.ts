export interface BaseItem {
  name: string;
  price: number;
  description: string;
  image: string;
}
// Separate the two, the user can put / post without the id
export interface Item extends BaseItem {
  id: number;
}