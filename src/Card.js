import React from "react"

const Card = ({title="Basketball",subText="A default subtext",buttonText="MyButton", sourceImage="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}) => {
    return(
            <div className="card" style={{width: "18rem"}}>
              <img
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