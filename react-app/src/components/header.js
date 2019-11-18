import React from 'react';

var temp_arr = window.location.hostname.split('.');
var port_num = window.location.port;
if(port_num == "80"){
    port_num = '';
}
else{
    port_num = ":" + port_num;
}
if(temp_arr.includes('localhost') && temp_arr.length <=2 ){
    var domain = 'localhost' + port_num;
}
else {
    var domain = [temp_arr[temp_arr.length - 2], temp_arr[temp_arr.length - 1]].join('.');
}

class NavLink extends React.Component{
    constructor(props){
        super(props);
        this.name = this.props.name;
    }

    render(){
        var chosen_class = ""
        if (["portfolio", "about", "blog"].includes(this.name.toLowerCase())){
            var redirect_url = window.location.protocol + "//" + this.name.toLowerCase() + '.' + domain;
            if (temp_arr[0] === this.name.toLowerCase()){
                chosen_class = "chosen-class";
            }
        }
        else{
            var redirect_url = window.location.protocol + "//" + domain;
            if(!["portfolio", "about", "blog"].includes(temp_arr[0])) {
                chosen_class = "chosen-class";
            }
        }

        return(
            <a className={chosen_class + " nav-link"} href={redirect_url}>{this.name}</a>
        )

    }
}

class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
        <div id="header">
            <div id="navigation">
                <NavLink name="Home"/>
                <NavLink name="About"/>
            </div>
        </div>
        )
    }
}

export default Header