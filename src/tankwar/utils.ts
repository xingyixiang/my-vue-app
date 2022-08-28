function getUniqueIdFn(): (key?: string) => string {
  let c: number = 0;
  const ids: Record<string, undefined | number> = {};
  return (key?: string) => {
    if (typeof key === 'string') {
      if (typeof ids[key] === 'undefined') {
        ids[key] = 0;
      }
      (ids[key] as number) += 1;
      return `${key}_${ids[key]}`;
    }
    c += 1;
    return `${c}`;
  };
}

export const uniqueId = getUniqueIdFn();
