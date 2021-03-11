import React,{Component} from 'react';
import Details from './Details'

class Hero extends Component{
    constructor(props){
        super(props);
        this.state={
            contact:[],
        }
    }

    componentDidMount(){
        fetch("http://localhost:8080/data")
           .then(res=>res.json())
           .then((res)=>
                        {this.setState({
                            contact:res});
                        })
    }

    render(){
        return(
                <div>
                  {this.state.contact.map((item)=>
                  <Details key={item.aadharNumber} item={item} />
                  )}
                </div>
                
        );
    }

}

export default Hero;