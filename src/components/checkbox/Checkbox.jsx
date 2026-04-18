import './Checkbox.css'

function Button(props) {
  return (
    <div className="zone-pill">
      <input type="checkbox" id={props.id} name={props.name} checked={props.checked}
        onChange={(e) => props.clicked(e.target.checked)} />
      <label className="zone-name" htmlFor={props.id}>{props.name}</label>
    </div>
  )
}

export default Button