//destructuring a prop using a functional component
function Resume (props) {
/*destructuring the prop */
    const {firstName, lastName} =  props
    return(
        /*displaying the destructured elements */
        <h2>Name: {firstName} {lastName}</h2>
        )
}
export default Resume