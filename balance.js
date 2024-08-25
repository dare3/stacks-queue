function isBalanced(string) {
    const stack = [];
    const bracketMap = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (const char of string) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else if (char === ')' || char === ']' || char === '}') {
            if (stack.length === 0) {
                return false; // Unmatched closing bracket
            }
            const top = stack.pop();
            if (bracketMap[char] !== top) {
                return false; // Mismatched brackets
            }
        }
    }

    return stack.length === 0; // Check for any unclosed opening brackets
}
