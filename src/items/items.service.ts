/* *
* A service lets you encapsulate related business logic that you can share across multiple projects. 
As such, your application can use a service to access and manipulate records from your store.
*/

/**
 * Data Model Interfaces
 */
import { BaseItem, Item } from "./item.interface";
import { Items } from "./items.interface";

/**
 * In-Memory Store
 * Since we aren't using a database
 */
let items: Items = {
  1: {
    id: 1,
    name: "Burger",
    price:599,
    description: "Delicious",
    image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
  },
  2: {
    id: 2,
    name: "Pizza",
    price: 299,
    description: "Cheesy",
    image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png"
  },
  3: {
    id: 3,
    name: "Tea",
    price: 199,
    description: "Informative",
    image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png"
  }
};


/**
 * Service Methods
 */
export const findAll = async (): Promise<Item[]> => Object.values(items);
export const find = async (id: number): Promise<Item> => items[id];

// retrieve object of type BaseItem
// provides all required values to make new item in the store
// except for the items id
// the unique id is created by the number of milliseconds between jan 1970 and now
export const create = async (newItem: BaseItem): Promise<Item> => {
  const id = new Date().valueOf();
  items[id] = {
    id,
    ...newItem,
  };
  return items[id];
};

export const update = async(
  id: number,
  itemUpdate: BaseItem
): Promise<Item | null> => {
  const item = await find(id);

  if (!item) {
    return null;
  }
  
  items[id] = { id, ...itemUpdate };
  return items[id];
};