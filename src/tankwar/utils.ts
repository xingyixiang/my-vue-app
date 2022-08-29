const ids: Record<string, undefined | number> = {};
let c = 0;

export function uniqueId(): number;
export function uniqueId(key: string): string;
export function uniqueId(key?: string) {
  if (typeof key === 'string') {
    if (typeof ids[key] === 'undefined') {
      ids[key] = 0;
    }
    (ids[key] as number) += 1;
    return `${key}_${ids[key]}`;
  }
  c += 1;
  return c;
}
