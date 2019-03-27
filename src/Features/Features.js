import React, {Component} from 'react';
import FeatureItem from '../FeatureItem/FeatureItem'

export default class Features extends Component{
    render(){
        const options = this.props.features.map((item, index) => {
           
            return (<FeatureItem handleUpdate={this.props.handleUpdate} selected={this.props.selected} featureName={this.props.featureName} key={index} name={item.name} cost={item.cost} item={item}/>
                )})

        return(
            <div className="feature">
                <div className="feature__name">{this.props.featureName}</div>
                <ul className="feature__list">
                { options }
                </ul>
            </div>   
        )
    }
}