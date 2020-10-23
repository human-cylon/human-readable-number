module.exports = function toReadable (number) {
    const digits = ['zero','one','two','three','four',
'five','six','seven','eight','nine'];
    const tens = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen',
'seventeen','eighteen','nineteen'];
    const twentyAndUp = ['twenty','thirty','forty','fifty',
'sixty','seventy','eighty','ninety'];

    let numberString = number.toString();
    let numberArray = numberString.split("");
    let str = "";
    
    if (numberString.length === 1) {
        str += digits[number];
    } else if (numberString.length === 2 && numberArray[0] == "1") {
        str += tens[number - 10];
    } else if (numberString.length === 2) {
        str += twentyAndUp[numberArray[0] - 2];
        if (numberArray[1] != 0) {
            str += ' ' + digits[numberArray[1]];
        }
    } else if (numberString.length === 3) {
        str += digits[numberArray[0]] + " hundred";
        if (numberArray[1] == 1) {
            str += " " + tens[numberArray[2]];
        } else if (numberArray[1] == 0 && numberArray[2] != 0) {
            str += " " + digits[numberArray[2]];
        } else if (numberArray[2] != 0) {
            str += " " + twentyAndUp[numberArray[1] - 2] + " " + digits[numberArray[2]];
        } else if (numberArray[1] != 0 && numberArray[2] == 0) {
            str += " " + twentyAndUp[numberArray[1] - 2];
        }
    }
    return str;
}
