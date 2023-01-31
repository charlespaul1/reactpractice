export default function FunctionEvent (){
    //the event handling function that will be called
    const handleEvent = () =>{
        console.log('button has been clicked')
    }
    return(
        <>
        <h2>event handling in a functional component</h2>
        {/*event */}
        <button onClick={handleEvent}>click me</button>
        </>
    )
}