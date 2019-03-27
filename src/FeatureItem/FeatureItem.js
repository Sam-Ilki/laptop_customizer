import React, {Component} from 'react';

export default class FeatureItem extends Component{
    render(){
        const selectedClass = this.props.name === this.props.selected.name ? 'feature__selected' : '';
        const featureClass = 'feature__option ' + selectedClass;
        return(
             <li className="feature__item">
                <div className={featureClass}
                    
                    onClick={e => this.props.handleUpdate(this.props.featureName, this.props.item)}>
                    { this.props.name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                        .format(this.props.cost) })
                </div>
            </li>
        )
    }
}