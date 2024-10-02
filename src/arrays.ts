/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    // Handle the case of empty input list
    if (numbers.length == 0) {
        return [];
    }
    // Handle cases of input list length >= 1
    // If input is length 1, then [0] and [in.length-1] both refer to the same element, which is desired.
    const numbersInside = [numbers[0], numbers[numbers.length - 1]];
    return numbersInside;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((n: number): number => n * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const result = numbers.map((n: string): number =>
        parseInt(n) ? parseInt(n) : 0,
    );
    return result;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    // If the element a can be parsed to an int
    // or if the element a without the first character can be parsed to an int
    // use that value (prefering to not remove character)
    // else
    // use 0
    const result = amounts.map((a: string): number =>
        parseInt(a) || parseInt(a.slice(1)) ?
            parseInt(a) || parseInt(a.slice(1))
        :   0,
    );
    return result;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    // Filter out messages that end with a "?" symbol
    // Conditionally modify the remaining messages to be uppercase if they end with a "!" symbol
    const result = messages
        .filter((msg: string): boolean => msg.charAt(msg.length - 1) !== "?")
        .map((msg: string): string =>
            msg.charAt(msg.length - 1) === "!" ? msg.toUpperCase() : msg,
        );
    return result;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word: string): boolean => word.length < 4);
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    // Create an array of all colors that are not 'red', 'blue', or 'green'
    const nonRGB = colors.filter(
        (color: string): boolean =>
            !(color === "red" || color === "blue" || color === "green"),
    );
    // Return True if there are no elements in the list of non RGB colors
    return nonRGB.length === 0;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    // If input is empty array, replace with array containing the element '0'
    if (addends.length === 0) {
        addends = [0];
    }
    // Calculate sum of all array elements
    let sum: number = addends.reduce(
        (currentSum: number, n: number) => currentSum + n,
        0,
    );
    // Combine pieces into output string
    let result: string = sum.toString() + "=" + addends.join("+");
    return result;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    // Determine where first negative element is, if any
    let index: number = values.findIndex((n: number): boolean => n < 0);
    // Initialize numbers to sum as all elements
    const numbersToSum = [...values];
    // If there was a negative element
    if (index >= 0) {
        // Get rid of the negative value and all values after it
        numbersToSum.splice(index, numbersToSum.length - index);
        // Change the index to point to element after the first negative
        index += 1;
    } else {
        // Change the index to point to the end of the list
        index = values.length;
    }
    // Calculate the sum of the elements
    let sum: number = numbersToSum.reduce(
        (currentSum: number, n: number) => currentSum + n,
        0,
    );
    // Prepare copy of values as result
    const result = [...values];
    // Insert sum into the result
    result.splice(index, 0, sum);
    return result;
}
