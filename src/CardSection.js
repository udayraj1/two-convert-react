import React from "react"
import Card from "./Card"
const CardSection = () => {
    return(
        <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
          <div className="col-4"> 
          {/* Here we are mentioning the title sourceImage subtext and buttonText so for this component it's going to pick these attributes over the default ones which are there in Card.js */}
            <Card title="Learncodeonline" sourceImage="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" subText="A online learning platform for the developers with pre recorded courses" buttonText="My LCO App"/> 
          </div>
          <div className="col-4">
          <Card title="ineuron.ai" sourceImage="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" subText="A online learning platform for the developers with live course sessions" buttonText="iNeuron App"/>
          </div>
          <div className="col-4">
            {/* Here we haven't mentioned any title, sourceImage, subText and buttonText properties so for this component these attributes are going to be picked from the Card.js which are default */}
          <Card />
          </div>
        </div>
      </div>
    </section>
    )
}
export default CardSection
