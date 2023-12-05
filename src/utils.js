// Get random integer from 1-6
function random() {
    return Math.floor(Math.random() * 6) + 1;
}
// Get n rolls then convert value to Array
function getRolls(n) {
    console.log("Run")
    return Array.from({ length: n }, () => random());
}
// Get sum of all value of dies
function sum(nums) {
    return nums.reduce((prev, cur) => prev + cur, 0)
}

export { getRolls, sum }