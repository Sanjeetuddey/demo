let guess = prompt("please enter the limit");

let num = Math.floor(Math.random() * guess)+1;
console.log(num);


let guess1 = prompt("please enter the number of u guess");

while (true) 
    {
        if (num==guess1) 
         {
                console.log(`congratulation your guess is correst ${num} `);
                break;    
        }
        if (guess1=="quit") 
        {
            console.log("you quit the game");
            break;
        }
            else
                {
                guess1=prompt("wrong guess please enter again");
            }
};










