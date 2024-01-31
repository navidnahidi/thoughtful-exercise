import sort, { StackNames, calculateVolume, isPackageHeavy, isPackageBulky } from '../sort';


describe('sort function', () => {
  describe('volume function', () => {
    it('should calculate volume correctly', () => {
      expect(calculateVolume(1, 2, 3)).toBe(6);
      expect(calculateVolume(10, 10, 10)).toBe(1000);
    })
  });

  describe('isPackageBulky function', () => {
    it('should return true if package if volume is >= maximum volume', () => {
      expect(isPackageBulky(100, 100, 100)).toBe(true);
    })

    it('should return true if package if width is >= max width', () => {
      expect(isPackageBulky(150, 10, 10)).toBe(true);
    })

    it('should return true if package if height is >= max height', () => {
      expect(isPackageBulky(10, 150, 10)).toBe(true);
    })

    it('should return true if package if length is >= max length', () => {
      expect(isPackageBulky(10, 10, 150)).toBe(true);
    })

    it('should return false if package is not bulky', () => {
      expect(isPackageBulky(10, 10, 10)).toBe(false);
    })
  });

  describe('isPackageHeavy function', () => {
    it('should return true if package is heavy', () => {
      expect(isPackageHeavy(20)).toBe(true);
    })

    it('should return false if package is not heavy', () => {
      expect(isPackageHeavy(19)).toBe(false);
    })
  });

  it('should throw an error if called with invalid inputs', () => {
    expect(() => sort(0, 0, 0, 0)).toThrow();
  });

  it('should return STANDARD for a standard package', () => {
    expect(sort(10, 10, 10, 10)).toEqual(StackNames.STANDARD);
  });

  it('should return SPECIAL for a bulky package', () => {
    expect(sort(100, 100, 100, 10)).toEqual(StackNames.SPECIAL);
  });

  it('should return SPECIAL for a heavy package', () => {
    expect(sort(10, 10, 10, 30)).toEqual(StackNames.SPECIAL);
  });

  it('should return REJECTED for a bulky and heavy package', () => {
    expect(sort(100, 100, 100, 30)).toEqual(StackNames.REJECTED);
  });
});