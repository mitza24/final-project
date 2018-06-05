import React, { Component } from "react";


const BirthdayCard1 = ({imageName, birthdayName, place,time, imagePath, imageStyle}) =>
    <div className={"birthday-card "+imageName}>
        <img className="birthday-card-image " src={imagePath} alt='the card'/>
        <div className= {"birthday-card-text " + imageStyle} >  
            <h2 className="birthday name">{birthdayName}</h2>
            <h3 className="pleasure">has the pleasure <br /> to invite you to</h3>
            <h2 className="place">{place}</h2>
            <h2 className="time">{time}</h2>
        </div>
    </div>

export default class BirthdayEditor extends Component{
    constructor(props, context){
        super(props, context)
        this.state = {
            
            birthdayName: 'Birthday Name',
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

    

    onChangeBirthdayName = (evt) => {
        const birthdayName = evt.target.value
        this.setState({birthdayName:birthdayName})
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
                    <div className="card-left">
                        <BirthdayCard1 imageStyle={imageStyle} imageName={imageName} imagePath={imagePath}  birthdayName={this.state.birthdayName} place={this.state.place} time={this.state.time}/>
                        
                    </div>
                    </div>
                <div>
                    <div className="card-right" id="card_info">

                        <input placeholder="birthday name" onChange={this.onChangeBirthdayName}/>
                        <input placeholder="place"      onChange={this.onChangePlace}/>
                        <input placeholder="time"      onChange={this.onChangeTime}/>
                    </div>
                </div>
            </div>
        )
    }
}




































// const BirthdayCard1 = ({
//   imageName,
//   birthdayName,
//   place,
//   time,
//   imagePath,
//   imageStyle
// }) => (
//   <div className={"birthday-card " + imageName}>
//     <img className="birthday-card-image " src={imagePath} alt="the card" />
//     <div className={"birthday-card-text " + imageStyle}>
//       <h2 className="birthday name">{birthdayName}</h2>
//       <h3 className="pleasure">
//         have the pleasure <br /> to invite you to
//       </h3>
//       <h2 className="place">{place}</h2>
//       <h2 className="time">{time}</h2>
//     </div>
//   </div>
// );

// export default class BirthdayEditor extends Component {
//   constructor(props, context) {
//     super(props, context);
//     this.state = {
//       birthdayName: "Birthday Name",
//       place: "Place",
//       time: "Time"
//     };
//   }
//   onChangePlace = evt => {
//     const place = evt.target.value;
//     this.setState({ place: place });
//   };
//   onChangeTime = evt => {
//     const time = evt.target.value;
//     this.setState({ time: time });
//   };

//   onChangeBirthdayName = evt => {
//     const BirthdayName = evt.target.value;
//     this.setState({ birthdayName: birthdayName });
//   };

//   render() {
//     console.log(this.props.location);
//     const image = this.props.location.pathname;
//     const imageStyle = this.props.location.state.imageStyle;
//     const arr = image.split("/");
//     const imageName = arr[2];
//     const imagePath = "/images/" + imageName + ".jpg";
//     return (
//       <div className="flex two">
//         <div>
//           <div className="left">
//             <BirthdayCard1
//               imageStyle={imageStyle}
//               imageName={imageName}
//               imagePath={imagePath}
//               birthdayName={this.state.birthdayName}
//               place={this.state.place}
//               time={this.state.time}
//             />
//           </div>
//         </div>
//         <div>
//           <div className="right" id="card_info">
//             <input
//               placeholder="birthday name"
//               onChange={this.onChangeBirthdayName}
//             />
//             <input placeholder="place" onChange={this.onChangePlace} />
//             <input placeholder="time" onChange={this.onChangeTime} />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
