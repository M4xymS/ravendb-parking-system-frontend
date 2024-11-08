export function generateAlphabetArray() {
  return Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index));
}

export function generateParkingFloorNumbers() {
  return Array.from({ length: 30 }, (_, index) => index + 1);
}
