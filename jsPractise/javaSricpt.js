
let str= ["Australia", "Germany", "United States of America"];


function longName(str)
{
    let ansIndex=0;
    for (let i=0; i<str.length; i++) {

        let curr=str[ansIndex].length;
        let len=str[i].length;
        if (len>curr) 
            {
           ansIndex=i;
        }
    }
    return str[ansIndex];
}

console.log(longName(str));





