// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return the string "Hello, Jane!" when called', function() {
        expect(sayHello('Jane')).toBe('Hello, Jane!');
    });
    it('should return a string "Hello, Alex!" when called', function() {
        expect(sayHello('Alex')).toBe('Hello, Alex!');
    });
    it('should return a string "Hello, Pat!" when called', function() {
        expect(sayHello('Pat')).toBe('Hello, Pat!');
    });
    it('should return a string "Hello, World!" when called', function() {
        expect(sayHello('World')).toBe('Hello, World!');
    });
    it('should return  "Hello, World!" if input is true when called', function() {
        expect(sayHello(true)).toBe('Hello, World!');
    });
    it('should return "Hello, World" if input is false when called', function() {
        expect(sayHello(false)).toBe('Hello, World!');
    })
    it('should never return "undefined" when called', function() {
        expect(sayHello()).not.toBe(undefined);
    });
});

describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return true if inputted value is five', function() {
        expect(isFive(5)).toBe(true);
    });
    it('should return true if inputted value is the string "5"', function() {
        expect(isFive('5')).toBe(true);
    });
    it('should return false if input is not five', function() {
        expect(isFive()).toBe(false);
    });
});

describe('isEven', function() {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('should return true if the input is even', function() {
        expect(isEven(2)).toBe(true);
    });
    it('should return false if the input is odd', function() {
        expect(isEven(3)).toBe(false);
    });
    it('should return false if the input is not a number', function() {
        expect(isEven(isNaN)).toBe(false);
    });
    it('should return true if the input is a number in a string that\'s even "2" when called', function() {
        expect(isEven('2')).toBe(true);
    });
    it('should return false if the input is infinity', function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when input is boolean value', function() {
        expect(isEven(Boolean)).toBe(false);
    });
    it('should return false if no argument is passed in', function() {
        expect(isEven()).toBe(false);
    });
});

describe('isVowel', function() {
    it('should be a defined function', function() {
        expect(typeof isVowel).toBe('function');
    });
    it('should return true if the input is a vowel', function() {
        expect(isVowel('a')).toBe(true);
        expect(isVowel('A')).toBe(true);
        expect(isVowel('e')).toBe(true);
        expect(isVowel('O')).toBe(true);
    });
   it('should return false if input is not a vowel', function() {
       expect(isVowel('y')).toBe(false);
       expect(isVowel('banana')).toBe(false)
   });
});

describe('add', function() {
    it('should be a defined function', function() {
        expect(typeof add).toBe('function');
    });
    it('should return the sum of 2 and 3 to be 5', function() {
        expect(add(1, 4)).toBe(5);
    });
    it('should expect to return false if input is not a number', function() {
        expect(add('banana', 'split')).toBeNaN();
        expect(add(2, 'apples')).toBeNaN();
    });
    it('should expect to return NaN if no args are present', function() {
        expect(add()).toBeNaN();
    });
    it('should expect the sum of -3 + -9 to be -12', function() {
        expect(add(-3, -9)).toBe(-12)
    });
    it('should expect the sum of -4 + 10 to be 6', function() {
        expect(add('-4', '10')).toBe(6);
    });
    it('should expect the sum of "5" and 6 to be 11', function() {
        expect(add('5', 6)).toBe(11);
    });

});


