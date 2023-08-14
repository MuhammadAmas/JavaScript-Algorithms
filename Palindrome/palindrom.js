function isPalindrome(str) {
    let check = true
    for (let i = 0; i < Math.ceil(str.length / 2); i++) {
        if (str[i] !== str[str.length - i - 1]) {
            check = false;
            break
        }
    }
    return check
}

const str = 'amama'
console.log(isPalindrome(str))