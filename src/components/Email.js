import React from "react";
import { Link } from "react-router-dom";
import "../../node_modules/picnic/picnic.min.css";

export default class Email extends React.Component {

  

render(){
return(
    
    <div>
    <fieldset class="flex two">
  <label><input type="Email" placeholder=" Compose Email"/></label>
  <label><input type="text" placeholder="To"/></label>
  <label><input type="text" placeholder="Subject"/></label>
</fieldset>
<textarea placeholder="message"></textarea>
</div>



)
}
}
