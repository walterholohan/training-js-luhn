/**
 * Function to check if card number is correct
 * Uses Luhn Algorithm
 * @param cardNumber
 * @returns {boolean}
 */
function check(cardNumber) {
    // TODO: implement card number checking
    var odd = 0,
    	even = 0,
    	digit, i;

    //reverse the string
    cardNumber = cardNumber.split('').reverse().join('');

    for (i=0; i<cardNumber.length; i++) {
    	digit = parseInt(cardNumber.charAt(i));
    	//if position of numnber is even
    	if ((i+1) % 2 == 0) {
    		digit *= 2
    		if(digit > 9) {
    			digit -= 9;
    			even += digit;
    		} else {
    			even += digit;
    		}
    	} else {
    		// IF ODD
    		odd += digit;
    	}
    }

    return (odd + even) % 10 == 0
}

module.exports = {
    'check': check
};
