/*
    This code appeases me. JavaScript looks ugly.
    It's whatever though, static files FTW.
*/
var Win95 = /** @class */ (function () {
    function Win95() {
    }
    Win95.prototype.CD = function () {
        var invalid = [333, 444, 555, 666, 777, 888, 999]; // Invalid sites.
        var site = Math.floor((Math.random() * 999) + 100); // Generate a random number between 1 and 999.
        while (site in invalid || site.toString().length < 3) {
            site = Math.floor((Math.random() * 999) + 100); // Keep generating until it is not in the invalid array, or is less than 100.
        }
        var dividend = Math.floor((Math.random() * 9999999) + 1000000); // Underscored numbers for readability.
        var numbers = String(dividend).split('').map(Number); // Converts to a string, to be able to be split.
        var sum;
        numbers.forEach(function (element) { return (sum += element); });
        while (((sum % 7) != 0) || (numbers[6] == 0 || numbers[6] >= 8) || dividend.toString().length > 7) { // Checks if the variables are valid. 
            dividend = null, numbers = null, sum = null; // Setting variables to have null values, since they aren't valid.
            dividend = Math.floor((Math.random() * 9999999) + 1000000);
            numbers = String(dividend).split('').map(Number); // More number generation!
            numbers.forEach(function (element) { return (sum += element); });
        }
        return "".concat(site, "-").concat(dividend);
    };
    Win95.prototype.OEM = function () {
        var date = Math.floor(Math.random() * 366) + 100; // Random Day of Year
        var years = [1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003]; // All valid OEM years.
        var year = String(years[Math.floor(Math.random() * years.length)]).substring(2);
        var dividend = Math.floor((Math.random() * 99999) + 1).toString().padStart(6, "0"); // Underscored numbers for readability.
        var garbage = Math.floor((Math.random() * 99999) + 10000); // Underscored numbers for readability.
        var numbers = String(dividend).split('').map(Number);
        var sum;
        numbers.forEach(function (element) { return (sum += element); });
        while (((sum % 7) != 0) || (numbers[7] == 0 || numbers[7] >= 8) || dividend.toString().length > 7 || garbage.toString().length > 5) { // Checks if the variables are valid. 
            dividend = null, numbers = null, sum = null; // Setting variables to have null values, since they aren't valid.
            dividend = Math.floor((Math.random() * 99999) + 1).toString().padStart(6, "0");
            garbage = Math.floor((Math.random() * 99999) + 10000);
            numbers = String(dividend).split('').map(Number); // More number generation!
            numbers.forEach(function (element) { return (sum += element); });
        }
        return "".concat(date).concat(year, "-OEM-").concat(dividend, "-").concat(garbage);
    };
    Win95.prototype.Test = function () {
        for (var i = 0; i < 25; i++) {
            console.log("Windows 95 CD Key ".concat(i, ": ").concat(Windows.CD())); // Prints a bunch of CD keys to test.
        }
        for (var i = 0; i < 25; i++) {
            console.log("Windows 95 OEM Key ".concat(i, ": ").concat(Windows.OEM())); // Prints a bunch of CD keys to test.
        }
    };
    return Win95;
}());
var Windows = new Win95();
Windows.Test();
