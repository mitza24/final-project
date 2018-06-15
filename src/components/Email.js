import React from "react";
import { Link } from "react-router-dom";
import "../../node_modules/picnic/picnic.min.css";

export default class Email extends React.Component {

  

render(){
return(
    
<div>

  <div class="third">
    <input class="stack" placeholder="First name" />
    <input class="stack" placeholder="Last name" />
    <input class="stack" placeholder="Email" />
  </div>

  <div class="third">
    <textarea class="stack" placeholder="message"></textarea>
    <button class="stack icon-paper-plane">Send</button>
  </div>
  <br/>
  <hr/>
  <br/>

   {/* <table class="primary">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Coming</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Francisco</td>
        <td>francisco@gmail.com</td>
        <td>
          <label>
            <input type="checkbox" disabled/>
            <span className="checkable"></span>
          </label>
        </td>
      </tr>
    </tbody>
  </table> */}
</div> 

)
}
}


