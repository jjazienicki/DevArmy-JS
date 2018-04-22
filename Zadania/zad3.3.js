function doubleDelete(dD){
    var doubleArray = [];
    for (var number of dD){
        if (number<=0){
            doubleArray.push (0);
        }
        else {
            doubleArray.push(number*2);
        }
        }

    return doubleArray;
}
console.log(doubleDelete([-2, 1, 0, -8, 9]))