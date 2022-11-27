"use strict";
class Win95 {
    CD() {
        let invalid = [333, 444, 555, 666, 777, 888, 999]; // Invalid sites.
        let site = Math.floor((Math.random() * 999) + 100); // Generate a random number between 1 and 999.
        while (site in invalid || site.toString().length > 3) {
            site = Math.floor((Math.random() * 999) + 100); // Keep generating until it is not in the invalid array, or is less than 100.
        }
        let dividend = Math.floor((Math.random() * 9999999) + 1000000); // Underscored numbers for readability.
        let numbers = String(dividend).split('').map(Number); // Converts to a string, to be able to be split.
        let sum;
        numbers.forEach(element => (sum += element));
        while (((sum % 7) != 0) || (numbers[6] == 0 || numbers[6] >= 8) || dividend.toString().length > 7) { // Checks if the variables are valid. 
            dividend = null, numbers = null, sum = null; // Setting variables to have null values, since they aren't valid.
            dividend = Math.floor((Math.random() * 9999999) + 1000000);
            numbers = String(dividend).split('').map(Number); // More number generation!
            numbers.forEach(element => (sum += element));
        }
        return `${site}-${dividend}`;
    }
    OEM() {
        let date = Math.floor(Math.random() * 366) + 100; // Random Day of Year
        let years = [1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003]; // All valid OEM years.
        let year = String(years[Math.floor(Math.random() * years.length)]).substring(2);
        let dividend = Math.floor((Math.random() * 9999999) + 1000000); // Underscored numbers for readability.
        dividend = Number("0" + String(dividend));
        let garbage = Math.floor((Math.random() * 99999) + 10000); // Underscored numbers for readability.
        let numbers = String(dividend).split('').map(Number);
        let sum;
        numbers.forEach(element => (sum += element));
        while (((sum % 7) != 0) || (numbers[7] == 0 || numbers[7] >= 8) || dividend.toString().length > 7 || garbage.toString().length > 5) { // Checks if the variables are valid. 
            dividend = null, numbers = null, sum = null; // Setting variables to have null values, since they aren't valid.
            dividend = Math.floor((Math.random() * 9999999) + 1000000);
            garbage = Math.floor((Math.random() * 99999) + 10000);
            numbers = String(dividend).split('').map(Number); // More number generation!
            numbers.forEach(element => (sum += element));
        }
        return `${date}${year}-OEM-${dividend}-${garbage}`;
    }
    Test() {
        for (let i = 0; i < 25; i++) {
            console.log(`Windows 95 CD Key ${i}: ${Windows.CD()}`); // Prints a bunch of CD keys to test.
        }
        for (let i = 0; i < 25; i++) {
            console.log(`Windows 95 OEM Key ${i}: ${Windows.OEM()}`); // Prints a bunch of CD keys to test.
        }
    }
}
