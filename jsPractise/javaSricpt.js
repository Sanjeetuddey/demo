
let str = "abcdabcdefgggh";




function unique(str){
let ans="";
    for(let i=0; i<str.length;i++){
        let cur = str[i];
        if (ans.indexOf(cur)==-1){
            ans += cur;
        }
    }
    return console.log(ans);
}

unique(str);


