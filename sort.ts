const MAX_VOLUME = 1_000_000; // (cm^3)
const MAX_WIDTH = 150; // (cm)
const MAX_HEIGHT = 150; // (cm)
const MAX_LENGTH = 150; // (cm)
const MAX_MASS = 20; // (kg)

export enum StackNames {
  STANDARD = 'STANDARD',
  SPECIAL = 'SPECIAL',
  REJECTED = 'REJECTED'
}

export const calculateVolume = (width: number, height: number, length: number): number =>
  width * height * length;

export const isPackageBulky = (width: number, height: number, length: number) => {
  const volume = calculateVolume(width, height, length)

  return volume >= MAX_VOLUME ||
    width >= MAX_WIDTH ||
    height >= MAX_HEIGHT ||
    length >= MAX_LENGTH;
}

export const isPackageHeavy = (mass: number) => mass >= MAX_MASS;

function sort(width: number, height: number, length: number, mass: number): string {
  if (width <= 0 || height <= 0 || length <= 0 || mass <= 0) {
    throw Error('Invalid input');
  }
  const isBulky = isPackageBulky(width, height, length);
  const isHeavy = isPackageHeavy(mass);

  switch (true) {
    case isBulky && isHeavy:
      return StackNames.REJECTED;
    case isBulky || isHeavy:
      return StackNames.SPECIAL;
    default:
      return StackNames.STANDARD;
  }
}

export default sort;