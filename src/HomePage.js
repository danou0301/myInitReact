import React from 'react'

import { getLanguage, translate } from 'react-multi-lang'



// const one = require('../img/1.png')
// const two = require('../img/2.png');



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            width: 0, 
            height: 0, 
            lang: getLanguage()
        };
        

    }
    componentDidMount() {
        

    }
    
    componentWillUnmount() {
    }
    


    handleLangChange = (lg) => { 
        this.setState({lang: lg})
    }

    render() {

        return (
            <div className="mainHomePage">
                Helloo
            </div>
        )
    }
}


export default HomePage
