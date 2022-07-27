export function getDifferenceKey<T>(obj1: T, obj2: T): string | null {
  let keyFound: string | null = null;

  const obj1Length = Object.keys(obj1).length;
  const obj2Length = Object.keys(obj2).length;

  if (obj1Length === 0 || obj2Length === 0) return null;

  if (obj1Length > obj2Length) {
    Object.keys(obj1).forEach((key: string) => {
      if (obj1[key as keyof typeof obj1] !== obj2[key as keyof typeof obj2]) {
        return (keyFound = key);
      }
    });
  } else {
    Object.keys(obj2).forEach((key: string) => {
      if (obj2[key as keyof typeof obj2] !== obj1[key as keyof typeof obj1]) {
        return (keyFound = key);
      }
    });
  }

  return keyFound;
}
