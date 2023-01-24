const Button = () => {
    const onClick = (e) => {
        console.log('click')
    }
  return <button 
  onClick={onClick}
  style={{backgroundColor: 'blue'}}
  className='btn'>Add</button>
}

export default Button
