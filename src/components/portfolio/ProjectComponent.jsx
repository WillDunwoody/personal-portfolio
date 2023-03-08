import './Portfolio.css'

export default function ProjectComponent(props) {
  const textArray = props.text
  console.log(textArray instanceof Array)
  return (
    <div className='component-container display-flex'>
      <div className="cover-image trans" id="coverimage" style={{backgroundImage: `url(${props.img})`}}></div>
      <div className="component-text-container">
        <h3 className="component-header trans" id="comptitle">{props.name}</h3>
        <div className="trans" id="comptext">
          {props.text.map(text => {
            return <p className="component-text">{text}</p>
          })}
        </div>
        <div className='button-container trans' id="compbutton">
          <a href={props.code} target="_blank" className="button">Code</a>
          <a href={props.live} target="_blank" className="button">Demo</a>
        </div>
      </div>
    </div>
    )
}
