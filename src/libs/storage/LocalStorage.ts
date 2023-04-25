// import { Storage } from "./Storage.interface";
// class LocalStorage implements Storage {
//   static get(ACCESS_TOKEN_KEY: string) {
//     throw new Error("Method not implemented.");
//   }
//   get(key: string): string | null {
//     return localStorage.getItem(key);
//   }
//   set(key: string, value: string): void {
//     localStorage.setItem(key, value);
//   }
//   remove(key: string): void {
//     localStorage.removeItem(key);
//   }
// }

const LocalStorage = {
  get(key: string): string | null {
    return localStorage.getItem(key);
  },
  set(key: string, value: string): void {
    localStorage.setItem(key, value);
  },
  remove(key: string): void {
    localStorage.removeItem(key);
  },
};

export default LocalStorage;
