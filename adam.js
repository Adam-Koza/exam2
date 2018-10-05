// Lab1, 1.
function is_array(something) {
    if ((typeof(something) === "object") && (typeof(something[0]) !== "undefined")){
        return true;
    }
    return false;
}

console.log(is_array('w3resource')); 
console.log(is_array([1, 2, 4, 0]));

// Lab1, 2.
function array_Clone(arry) {
    var newArray = [];
    for (i=0; i<arry.length; i++){
        newArray.push(arry[i]);
    }
    return newArray;
}

console.log(array_Clone([1, 2, 4, 0])); 
console.log(array_Clone([1, 2, [4, 0]]));

// Lab1, 3.
function first(arry, n) {
    if (n === undefined){
        return arry[0];
    }
    var newArray = [];
    for (i=0; ((i < n) && (i < arry.length)); i ++){
        newArray.push(arry[i]);
    }
    return newArray
}

console.log(first([7, 9, 0, -2])); 
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

// Lab1, 4.
function last(arry, n) {
    if (n === undefined){
        return arry[arry.length - 1];
    }
    var newArray = [];
    for (i=0; ((i < n) && (i < arry.length)); i ++){
        newArray.push(arry[arry.length - 1 - i]);
    }
    return newArray.reverse();
}

console.log(last([7, 9, 0, -2])); 
console.log(last([7, 9, 0, -2],3)); 
console.log(last([7, 9, 0, -2],6));

// Lab1, 5.
function array_to_string(arry, delimiter) {
    if (delimiter === undefined){
        delimiter = ",";
    }
    var newString = "";
    for (i=0; i< arry.length; i++){
        if (i === (arry.length - 1)){
            newString += arry[i];
        } else {
            newString += arry[i] + delimiter;
        }
    }
    return newString;
}

console.log(array_to_string(["Red", "Green", "White", "Black"]));
console.log(array_to_string(["Red", "Green", "White", "Black"], ","));
console.log(array_to_string(["Red", "Green", "White", "Black"], "+"));

// Lab1, 6.
//function even_dash(number){

//}

// Lab1, 7.
function array_sort(arry) {
    var newArry = [];
    var temp = [];
    var length = arry.length;
    var exit = false
    while (newArry.length < length) {
        temp = [];
        var minimum = min(arry);
        newArry.push(minimum);
        exit = false;
        for (i=0; i<arry.length; i++){
            if (arry[i] !== minimum || exit) {
                temp.push(arry[i]);
            } else {
                exit = true;
            }
        }
        arry = temp;
    }
    return newArry;
}

console.log(array_sort([ 3, 8, 7, 6, 5, -4, 3, 2, 1 ]));

// Lab1, 8.
function most_frequent(arry){
    var highest = [arry[0], 1];
    var count = 0;
    for (i=0; i < arry.length; i++){
        count = 0;
        for (j=0; j < arry.length; j++){
            if (arry[i] === arry[j]){
                count += 1;
            }
        }
        if (count > highest[1]) {
            highest = [arry[i], count];
        }
    }
    return highest[0] + " ( " + highest[1] + " times )";
}

console.log(most_frequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));

// Lab2, 1.
function base_convert(number, from_base, to_base){
    var dec = parseInt(number, from_base);
    return dec.toString(to_base);
}

// Lab2, 2.
function bin_to_dec(bin){
    final = 0;
    mult = 1;
    for (i=0; i<bin.length; i++) {
        final += parseInt(bin[bin.length - 1 - i]) * mult;
        mult *= 2;
    }
    return final
}

console.log(bin_to_dec('110011')); 
console.log(bin_to_dec('100'));

// Lab2, 3.
function dec_to_bho(dec, base) {
    if (base === "H"){
        return dec.toString(16);


    } else if (base === "O"){
        return dec.toString(8);

    } else {
        return dec.toString(2);
    }
}

// Lab2, 4.
function rand(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}


// Lab2, 5.
function decimals(number, digits) {
    number = number.toString();
    var newNum = "";
    var dec_hit = false;
    for (i=0; i<number.length; i++) {
        if (!dec_hit) {
            newNum += number[i];
        } else {
            if (digits > 0) {
                newNum += number[i];
                digits -= 1;
            }
        }
        if (number[i] === "."){
            dec_hit = true;
        }
    }
    if (digits > 0) {
        if (dec_hit === false) {
            newNum += ".";
        }
        while (digits > 0) {
            newNum += "0";
            digits -= 1;
        }
    }
    return newNum;
}

console.log(decimals(2.100212, 2));
console.log(decimals(2.100212, 3));
console.log(decimals(2100, 2));

// Lab2, 6.
function max(arry) {
    var highest = null;
    for (i=0; i<arry.length; i++){
        if ((highest !== null) && (highest < arry[i])){
            highest = arry[i];           
        }
        if (highest === null) {
            highest = arry[i];
        }
    }
    return highest;
}

console.log(max([12,34,56,1]));
console.log(max([-12,-34,0,-56,-1]));

// Lab2, 7.
function min(arry) {
    var lowest = null;
    for (i=0; i<arry.length; i++){
        if ((lowest !== null) && (lowest > arry[i])){
            lowest = arry[i];           
        }
        if (lowest === null) {
            lowest = arry[i];
        }
    }
    return lowest;
}

console.log(min([12,34,56,1])); 
console.log(min([-12,-34,0,-56,-1]));

// Lab2, 8.
function gcd_more_than_two_numbers(arry) {
    var highest = max(arry);
    for (i = highest; i > 0; i--) {
        var true_count = 0;
        for (j=0; j<arry.length; j++){
            if ((arry[j] % i) === 0) {
                true_count += 1;
            }
        }
        if (true_count === arry.length){
            return i;
        }
    }
    return 1;
}

console.log(gcd_more_than_two_numbers([3,15,27])); 
console.log(gcd_more_than_two_numbers([5,10,15,25]));

// Lab2, 9.
function lcm_more_than_two_numbers(arry){
    var res = 1;
    for (i=0;i<arry.length;i++){
        res *= arry[i];
    }
    return res / gcd_more_than_two_numbers([arry]);
}

console.log(lcm_more_than_two_numbers([100,90,80,7]));
console.log(lcm_more_than_two_numbers([5,10,15,25]));

// Lab3, 1.
function is_string(something) {
    if (typeof(something) === "string") {
        return true;
    }
    return false;
}

console.log(is_string('w3resource')); 
console.log(is_string([1, 2, 4, 0]));

// Lab3, 2.
function is_Blank(str) {
    if (str.length === 0) {
        return true;
    }
    return false;
}

console.log(is_Blank('')); 
console.log(is_Blank('abc'));

// Lab3, 3.
function string_to_array(str) {
    var arry = [];
    var temp = "";
    for (i=0; i<str.length; i++) {
        if (str[i] === " ") {
            arry.push(temp);
            temp = "";
        } else {
            temp += str[i];
        }
    }
    arry.push(temp);
    return arry;
}

console.log(string_to_array("Robin Singh"));

// Lab3, 4.
function truncate_string(str, n) {
    newStr = "";
    for(i=0;i<n;i++){
        newStr += str[i];
    }
    return newStr;
}

console.log(truncate_string("Robin Singh",4));

// Lab3, 5.
function abbrev_name(str) {
    var temp = string_to_array(str);
    var newStr = temp[0] + " " + temp[1][0] + ".";
    return newStr;
}

console.log(abbrev_name("Robin Singh"));

// Lab3, 6.
function protect_email(str) {
    var at = false;
    var newStr = "";
    for (i=0; i<str.length; i++) {
        if ((i < 5) || (at)) {
            newStr += str[i];
        }
        if (i === 4) {
            newStr += "...";
        }
        if (str[i] === "@") {
            at = true;
            newStr += "@";
        }
    }
    return newStr;
}

console.log(protect_email("robin_singh@example.com"));

// Lab3, 7.
function capitalize_Words(str) {
    var temp = string_to_array(str);
    var newStr = "";
    for (i=0;i<temp.length;i++){
        newStr += temp[i][0].toUpperCase() + temp[i].slice(1);
        if (i !== (temp.length - 1)) {
            newStr += " ";
        }
    }
    return newStr;
}

console.log(capitalize_Words('js string exercises'));
