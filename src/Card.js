import React from "react"

//here we used title sub text, button text, and sourceImage as a default if in cardSection developer only uses our component as <Card /> then this default attributes gets added to that component
const Card = ({title="A default title",subText="A default subtext",buttonText="A default Button", sourceImage="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}) => {
    return(
            <div className="card" style={{width: "18rem"}}>
              <img //here in src SourceImage will get's added either a default one which is mentioned above or the one dev insert in respective <Card /> component in cardsection.js same goes for subText, title and buttonText mentioned below i.e. for tags p, h5, a
                src={sourceImage}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body"> 
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{subText}</p>
                <a href="#" className="btn btn-success">{buttonText}</a>
              </div>
            </div>

    )
}
export default Card