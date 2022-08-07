export function setItemToLocalStorage(key: string, value: string) {
  localStorage.setItem(key, value);
}

export function getItemFromLocalStorage(key: string) {
  return localStorage.getItem(key);
}
