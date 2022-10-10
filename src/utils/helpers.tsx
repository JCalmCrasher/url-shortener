export function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export function isObjectNullish(obj: any): boolean {
  return obj === null || obj === undefined;
}
