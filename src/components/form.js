import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
class Form extends Component {
   constructor(){
       super();
       this.state = { username:'asd',
       password:''
       
    };
    this.Readusername=this.Readusername.bind(this);
    this.Readpassword=this.Readpassword.bind(this);
   }

//     Onsubmit(e) {
//         this.setState({ username: e.target.value });
//         this.setState({ username: e.target.value });
     
// }

Readusername(e){
    this.setState({ username: e.target.value });
}
Readpassword(e){
    this.setState({ password: e.target.value });
}


    render() {
      return ( 
        <div>
          <form>
          <input placeholder='username'  onChange='{this.Readusername}'></input> 
          <br />
          <input placeholder='password'  onChange='{this.Readpassword}'></input>
          <br />
          <Button >
            submit
          </Button>
          {this.state.username}
          {this.state.password}
          </form>
        </div>
      );
    }
  }
  
 export default Form;