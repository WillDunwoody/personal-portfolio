import './Portfolio.css'

export default function ProjectComponent(props) {
  console.log(props.img)
  return (
    <div className='component-container'>
      <h3 className='color-red'>{props.name}</h3>
      <img src={props.img} alt="Photo should be here" className='cover-image' />
      <div className='button-container'>
        <a href={props.code} target="_blank" className="button color-red">Code</a>
        <a href={props.live} target="_blank" className="button color-red">Demo</a>
      </div>
    </div>
    )
}
