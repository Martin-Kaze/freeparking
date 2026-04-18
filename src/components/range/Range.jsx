import './Range.css'

function Range(props) {
  return (
    <div className="range-wrapper">
      <p className="range-label">{props.name}</p>
      <div className="range-row">
        <input type="range" min="0" max="100" value={props.value} step="1"
          onChange={(e) => props.clicked(Number(e.target.value))} />
        <span className="range-val">{props.value}%</span>
      </div>
    </div>
  )
}

export default Range