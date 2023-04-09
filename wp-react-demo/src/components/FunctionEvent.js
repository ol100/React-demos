function FunctionEvent(){
    const handleClick = () =>{
        console.log("Button pressed")
    }
    
    return(
        <div>
            Functional component
            <button onClick={handleClick}>Click here</button>
        </div>
    )
}

export default FunctionEvent;