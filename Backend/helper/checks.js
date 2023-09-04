export const isMissing = (...values) => {
  return values.some((val) => {
    return val === null || val === undefined || val === "" || val === NaN;
  });
};
