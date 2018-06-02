import React, { Component } from 'react';



const BaptismCard1 = ({babyName, imageName, familyName, place,time, imagePath, imageStyle}) =>
    <div className={"baptism-card "+imageName}>
        <img className="baptism-card-image " src={imagePath} alt='the card'/>
        <div className= {"baptism-card-text " + imageStyle} >
            <h2 className="baby name">{babyName}</h2>
            <h2 className="family name">{familyName}</h2>
            <h3 className="pleasure">have the pleasure <br /> to invite you to</h3>
            <h2 className="place">{place}</h2>
            <h2 className="time">{time}</h2>
        </div>
    </div>

export default class BaptismEditor extends Component{
    constructor(props, context){
        super(props, context)
        this.state = {
            babyName: 'Baby Name',
            familyName: 'Family Name',
            place:     'Place',
            time:     'Time'
        }
    }
    onChangePlace = (evt) => {
        const place = evt.target.value
        this.setState({place:place})
    }
    onChangeTime = (evt) => {
        const time = evt.target.value
        this.setState({time:time})
    }

    onChangeBabyName = (evt) => {
        const babyName = evt.target.value
        this.setState({babyName:babyName})
    }

    onChangeFamilyName = (evt) => {
        const familyName = evt.target.value
        this.setState({familyName:familyName})
    }
   
    render(){
        console.log(this.props.location)
        const image = this.props.location.pathname
        const imageStyle =this.props.location.state.imageStyle
        const arr = image.split("/")
        const imageName = arr[2]
        const imagePath = '/images/'+imageName+'.jpg'
        return (
            <div className="flex two">
                <div>
                    <div className="left">
                        <BaptismCard1 imageStyle={imageStyle} imageName={imageName} imagePath={imagePath} babyName={this.state.babyName} familyName={this.state.familyName} place={this.state.place} time={this.state.time}/>
                        
                    </div>
                    </div>
                <div>
                    <div className="right" id="card_info">
                        <input placeholder="baby name" onChange={this.onChangeBabyName}/>
                        <input placeholder="family name" onChange={this.onChangeFamilyName}/>
                        <input placeholder="place"      onChange={this.onChangePlace}/>
                        <input placeholder="time"      onChange={this.onChangeTime}/>
                    </div>
                </div>
            </div>
        )
    }
}


































