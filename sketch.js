let grid;
let grid_new;
let score =0;


function setup (){
    createCanvas(400, 400);
    noLoop();
    grid = blankGrid();
    grid_new = blankGrid();
    //console.table(grid);
    new_number();
    new_number();
    updateCanvas();
    //console.table(grid);
}

function keyPressed(){
    let flipped = false;
    let rotated = false;
    let played = true;
    if(keyCode === DOWN_ARROW)
    {
        // do nothing
       
    }
    else if(keyCode === UP_ARROW)
    {
        // flip grid 
        grid = flipGrid(grid);
        flipped=true;
    
    }
    else if(keyCode === RIGHT_ARROW)
    {
        grid = rotateGrid(grid);
        rotated = true;
        
    }
    else if(keyCode === LEFT_ARROW)
    {
        grid = rotateGrid(grid);
        grid = flipGrid(grid);
        rotated = true;
        flipped = true;
       
    }
    else{
        played = false;
    }
    if(played){
    let past=copyGrid(grid);
    for(let i=0;i<4;i++)
    {
        grid[i] = operate(grid[i]);
    }
    let changed = compare(past, grid);
    if(flipped)
    {
        grid = flipGrid(grid);
    }
    if(rotated){
       grid = rotateGrid();
       grid = rotateGrid();
       grid = rotateGrid();
    }
    if(changed){
        new_number();
    }
    updateCanvas();
    let gameover = gameOver();
    if(gameover)
    {
        alert("Game over !! :(");
    }
    let wingame = gameWon();
    if(wingame){
        alert("YOU have reached 2048!!! :)");
    }
}
     
}


function updateCanvas(){
    background(255);
    drawGrid();
    select('#score').html(score);
}

function drawGrid()
{
    let w = 100;
    for(let i=0;i<4;i++)
    {
        for(let j=0;j<4;j++)
        {
            noFill();
            strokeWeight(2);
            let val = grid[i][j];
            let s = val.toString();
            if (grid_new[i][j] === 1) {
              stroke(200, 0, 50);
              strokeWeight(4);
              grid_new[i][j] = 0;
            } else {
              strokeWeight(4);
              stroke(0);
            }
      
            if (val != 0) {
              fill(colorsSizes[s].color);
            } else {
              noFill();
            }
            rect(i * w, j * w, w, w, 30);
            if (val !== 0) {
              textAlign(CENTER, CENTER);
              noStroke();
              fill(0);
              textSize(colorsSizes[s].size);
              text(val, i * w + w / 2, j * w + w / 2); 
            }
            
        }
    }
}

