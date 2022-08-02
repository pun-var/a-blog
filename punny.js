exports.sluggify = (inputString, slugArray) => {

    inputString = inputString.replace(/[^\w\s]/gi, '');
    const results = [];
    const len = inputString.length;  
    
    for(i=0; i<len; i++) {

        if(inputString[i] == " "){            
            if(inputString[i-1] !== " " && i !== 0 && i !== len-1) {
                results.push("-");          
            }            
        } else { 
            results.push(inputString[i].toLowerCase());
        }
    }

    slug =  results.join("");

    let k = 1;
    let slugTemp = slug;

    if(slugArray.includes(slugTemp) === true) {

        while (slugArray.includes(slugTemp) === true) {
    
            slugTemp = slug +"-"+ k;
            k++;
        }
        slug = slug +"-" + (k-1);
        return slug;
    } else {
        return slug; 
    }
}




