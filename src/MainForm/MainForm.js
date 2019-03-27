import React, {Component} from 'react';
import Features from '../Features/Features'



export default class MainForm extends Component{
    render(){
        const features = Object.keys(this.props.features)
        .map(key => {
          
        
          return(
              <Features handleUpdate={this.props.handleUpdate} key={key} featureName={key} features={this.props.features[key]} selected={this.props.selected[key]}/>
          )
        });
        return(
            <section className="main__form">
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                { features }
            </section>
        )
    }
}