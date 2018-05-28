import React, { Component } from 'react'


const WeddingCard1 = ({brideName, imageName, groomName,place, imagePath}) =>
    <div className={"wedding-card "+imageName}>
        <img className="wedding-card-image" src={imagePath} alt='the card'/>
        <div className="wedding-card-text">
            <h1 className="bride">{brideName}</h1>
            <h3 className="and">and</h3>
            <h1 className="groom">{groomName}</h1>
            <h3 className="pleasure">have the pleasure to invite you to</h3>
            <h2 className="place">{place}</h2>
        </div>
    </div>

export default class WeddingEditor extends Component{
    constructor(props, context){
        super(props, context)
        this.state = {
            brideName: 'Ms Bride',
            groomName: 'Mr Groom'
        }
    }
    onChangeBrideName = (evt) => {
        const brideName = evt.target.value
        this.setState({brideName:brideName})
    }
    onChangeGroomName = (evt) => {
        const groomName = evt.target.value
        this.setState({groomName:groomName})
    }
    render(){
        const imageName = this.props.match.params.cardImage
        const imagePath = '/images/'+imageName+'.jpg'
        return (
            <div className="flex two">
                <div>
                    <div className="left">
                        <WeddingCard1 imageName={imageName} imagePath={imagePath} groomName={this.state.groomName} brideName={this.state.brideName}/>
                    </div>
                    </div>
                <div>
                    <div className="right">
                        <input placeholder="bride name" onChange={this.onChangeBrideName}/>
                        <input placeholder="groom name" onChange={this.onChangeGroomName}/>
                        <input placeholder="place"/>
                    </div>
                </div>
            </div>
        )
    }
}