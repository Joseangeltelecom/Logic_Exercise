const printing = (arr) => { 

    const helper = (i) => {
        if (i > arr.length - 1) {
          return;
        }
        console.log(arr[i]);
        helper(i + 1);
    }
    
    return helper(0);
}

printing([3, 1, 4, 1, 5]);
