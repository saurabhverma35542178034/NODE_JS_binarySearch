const Binary = (array, number) => {
    let low = 0;
    let high = array.length - 1;
    
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (array[mid] === number) {
            return mid;  
        }
        if (array[mid] > number) {
            high = mid - 1;
        }
       else {
            low = mid + 1;
        }
    }
    return -1;
};

module.exports = Binary;
