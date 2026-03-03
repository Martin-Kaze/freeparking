

function Range(props) {
  return (
    <div>
  <input
    type="range"
    id={props.id}
    name={props.name}
    min="0"
    max="100"
    value={props.value}
    step="10" 
    onChange={(e) => props.clicked(Number(e.target.value))}/>
  <label htmlFor={props.id}>{props.name}</label>
</div>
  )
}

export default Range