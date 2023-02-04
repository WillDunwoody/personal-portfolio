import './Portfolio.css'

export default function ProjectComponent(props) {
  console.log(props.img)
  return (
    <div className='component-container'>
      <h3 className="component-header">{props.name}</h3>
      <a href={props.live} className='explenation'>
        <p>{props.text}</p>
      </a>
      <img src={props.img} alt="Photo should be here" className='cover-image' />
      <div className='button-container'>
        <a href={props.code} target="_blank" className="button color-yellow">Code</a>
        <a href={props.live} target="_blank" className="button color-yellow">Demo</a>
      </div>
    </div>
    )
}
