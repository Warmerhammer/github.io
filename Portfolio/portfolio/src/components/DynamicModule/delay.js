export const delay = (amount: number): Promise<void> =>
  new Promise((resolve, reject) => setTimeout(resolve, amount));

  export const randomNumberInRange = (min: number, max: number): number =>
  Math.random() * (max - min) + min;