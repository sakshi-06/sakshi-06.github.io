function slide(row){
    let arr = row.filter(val=>val);
    let missing = 4-arr.length;
    let zeros = Array(missing).fill(0);
    arr = zeros.concat(arr);
    return arr;
}


function operate(row){
    row = slide(row);
    row= combine(row);
    row = slide(row);
    return row;
}

function combine(row){
    for(let i=3;i>=1;i--)
    {
        let a = row[i];
        let b=row[i-1];
        if(a==b)
        {
            row[i]=a+b;
            score+=(a+b);
            row[i-1]=0;
            //break;
        }
    }
    return row;
}
function gameWon(){
    for(let i=0;i<4;i++)
    {
        for(let j=0;j<4;j++)
        {
            if(grid[i][j]==2048) return true;
        }
    }
    return false;
}
function gameOver()
{
    for(let i=0;i<4;i++)
    {
        for(let j=0;j<4;j++)
        {
            if(grid[i][j] == 0)
            {
               return false;
            }
            if(j!==3 && grid[i][j] === grid[i][j+1])
            {
                return false;
            }
            if(i!==3 && grid[i][j]=== grid[i+1][j])
            {
                return false;
            }
        }
    }
    return true;
}