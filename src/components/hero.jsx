import "./herostyles.css"

const Hero = (props) => {
  return (
    <>
    <div className={props.hName}>
        <img className={props.hImgCls} src={props.hImg} alt="HeroImg" />
   

    <div className="heroText">
        <h1>{props.hTitle}</h1>
        <br />
        <p>{props.HText}</p>
        <br />
        <br />
        <a href="/" className={props.aBtn}>{props.btnLink}</a>
    </div>
    </div>
    </>
  )
}

export default Hero