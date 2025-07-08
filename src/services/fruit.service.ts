const FRUITS = [
  'Apple',
  'Banana',
  'Orange',
  'Mango',
  'Strawberry',
  'Pineapple',
  'Grapes',
  'Watermelon',
  'Kiwi',
  'Peach',
  'Pear',
  'Cherry',
  'Blueberry',
  'Raspberry',
  'Blackberry',
  'Papaya',
  'Coconut',
  'Lemon',
  'Lime',
  'Avocado'
];

export async function getFruits() {
  return {
    fruits: FRUITS,
    count: FRUITS.length
  };
}