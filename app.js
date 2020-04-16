function yugioh(number) {
    let array = [];
    for (let i = 1; i <= number; i++) {
        array.push(i)
    }
    
    let newArray = array.map((item) => {
        let value;
        // divisible by 2
        if (item % 2 === 0) {
            value = 'yu'
            // divisible by 2 x 3
            if ((item / 2) % 3 === 0) {
                value += '-gi';
                // divisible by 2 x 3 x 5
                if ((item / 6) % 5 === 0) {
                    value += '-oh';
                }
            // divisible by 2 x 5    
            } else if ((item / 2) % 5 === 0) {
                value += '-oh';
            }
        // divisible by 3
        } else if (item % 3 === 0) {
            value = 'gi';
            // divisible by 3 x 5
            if ((item / 3) % 5 === 0) {
                value += '-oh';
            }
        // divisible by 5
        } else if (item % 5 === 0) {
            value = 'oh';
        // not divisible
        } else {
            value = item;
        }
        return item = value;
    });

    // check
    console.log(newArray);
    
    return newArray;
};

//Call the function and pass 100 as an argument.
yugioh(100);
//Call the function and pass it a random number of your choice
yugioh(69);

