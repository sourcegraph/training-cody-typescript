/**
 * Find duplicates in a list of numbers.
 *
 * @param numbers - The list of numbers to check
 * @returns A list containing duplicate numbers
 */
function findDuplicates(numbers: number[]): number[] {
    const duplicates: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] === numbers[j] && !duplicates.includes(numbers[i])) {
                duplicates.push(numbers[i]);
            }
        }
    }
    return duplicates;
}

function main(): void {
    const numbers: number[] = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 9, 1];
    const duplicates: number[] = findDuplicates(numbers);
    console.log("Duplicate numbers found:", duplicates);
}

// Run the main function
main();
