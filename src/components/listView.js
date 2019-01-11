import React, {Component} from 'react';
import './listView.css';

// Here I was trying to implement a component.
// I was able to get each aspect to display, but not in the way I anticipated. 
// I wanted to write a map function that would grab each of the four values at once, but I could only figure it out to grab 1 at a tim.
// This caused this whole group the be call each time, but only display a portion each time
// It looked fine before it came to styling
// When styled it would call each style again- specifically the padding would get call 4 time for the name column
// I wanted it to be styled closer to correct, so I decided to scrap this
// Any resources for calling a map function for multiple values, or is that not possible and I need to rework all together?

class ListView extends Component {
    render() {
        return (
            <div>
                <div >
                    <div id="first-col">
                        <div>{this.props.name}</div>
                    </div>
                    <div id="second-col">
                        <div>{this.props.city}</div>
                    </div>
                    <div id="third-col">
                        <div>{this.props.state}</div>
                    </div>
                    <div id="fourth-col">
                        <div>{this.props.zip}</div>
                    </div>
                    {/* Would have wanted to put the action column here */}
                    {/* However it would get called each time and print after each value */}
                    {/* <div>
                        <button>delete and edit</button>
                    </div> */}
                </div>  
            </div> 
        );
    }
}
export default ListView;