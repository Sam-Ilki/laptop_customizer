import React, {Component} from 'react';
import SummaryOptions from '../SummaryOptions/SummaryOptions';
import SummaryTotal from '../SummaryTotal/SummaryTotal';

export default class MainSummary extends Component{
    render(){
        const summary = Object.keys(this.props.selected)
        .map(key => <SummaryOptions key={key} optionName={key} name={this.props.selected[key].name} cost={this.props.selected[key].cost} />)
 

        
        return(
            <section className="main__summary">
                <h3>NEW GREENLEAF 2018</h3>
                {summary}
                <SummaryTotal selected={this.props.selected}/>
            </section>
        )
    }
}