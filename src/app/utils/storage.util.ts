interface Value {
  key: string;
  value: string;
}

export function clearBrowserStorage(): void {
  localStorage.clear();
}

export function getLocalStorageValue(key: string): any {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

export function setLocalStorageKey(key: string, value: string): void {
  localStorage.setItem(key, value);
}

export function setLocalStorageKeys(items: Value[]): void {
  items.forEach((item) => {
    localStorage.setItem(item.key, item.value);
  });
}
