function reverseString(input) {
    let reversedString = "";
    let length = input.length;

    for (let i = length - 1; i >= 0; i--) {
        reversedString += input[i];
    }

    return reversedString;
}
