// Code your solutions in this file

function writeCards(array,event)
{
    let newA = [];
    for (let i=0;i<array.length;i++)
    {
        newA[i]=`Thank you, ${array[i]}, for the wonderful ${event} gift!`
    
    }
    
    return newA;
}

writeCards(["Guadalupe", "Ollie", "Aki"], "birthday");


function countDown(i) {
    if (i>0)
    {
        while (i>=0)
        {
            console.log(i)
            i=i-1;
        }
    }
}

