import Square from "./Squre";
export default function Board({ xIsNext, history , onSqureClick , Winner }){
    

    const handleClick = (i) => {
        const newArr = history.slice();
        if(newArr[i] || Winner(history)){
            return;
        }
        if( xIsNext ){
          newArr[i] = "X"  
        }else{
            newArr[i] = "O"
        }
        onSqureClick(newArr)
        }
    return (
    <>
    <div className="board">
        <Square value = {history[0]} onSqureClick = {() => handleClick(0)}  />
        <Square value = {history[1]} onSqureClick = {() => handleClick(1)} />
        <Square value = {history[2]} onSqureClick = {() => handleClick(2)} />
    </div>
        <div className="board">
        <Square value = {history[3]} onSqureClick = {() => handleClick(3)}/>
        <Square value = {history[4]} onSqureClick = {() => handleClick(4)}/>
        <Square value = {history[5]} onSqureClick = {() => handleClick(5)}/>
    </div>
        <div className="board">
        <Square value = {history[6]} onSqureClick = {() => handleClick(6)}/>
        <Square value = {history[7]} onSqureClick = {() => handleClick(7)}/>
        <Square value = {history[8]} onSqureClick = {() => handleClick(8)}/>
    </div>
        </>
    )
}