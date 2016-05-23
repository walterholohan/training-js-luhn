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
    	digit, i, j=0;

    for (i=cardNumber.length-1; i>=0; i--) {
    	digit = parseInt(cardNumber.charAt(i));
    	//IF EVEN
    	if ((j+1) % 2 == 0) {
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
        j++;
    }

    return (odd + even) % 10 == 0
}

module.exports = {
    'check': check
};
