


function Button(props) {
  return (

    <div>
  <input type="checkbox" id={props.id} name={props.name } checked={props.checked}
  onChange={(e) => props.clicked(e.target.checked)} />
  <label htmlFor={props.id}>{props.name}</label>
    </div>
    
  )
}

export default Button