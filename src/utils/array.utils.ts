/** returns random element from an array **/
const pickRandom = <T>(array: T[]): T => {
  if (array.length === 0) {
    throw new Error('Cannot pick a random element from an empty array');
  }

  return array[Math.floor(Math.random() * array.length)];
};

export { pickRandom };
