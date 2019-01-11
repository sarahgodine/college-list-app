import React, { Component } from 'react';
import './App.css';
import ListView from './components/listView';
// import ReactDOM from 'react-dom';
// import Modal from 'react-modal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colleges: [
        {
          'name': 'University of Notre Dame',
          'city': 'Notre Dame',
          'state': 'IN',
          'zip': '46556'
        },
        {
          'name': 'University of Miami',
          'city': 'Coral Gables',
          'state': 'FL',
          'zip': '33124'
        },
        {
          'name': 'University of Mississippi',
          'city': 'Oxford',
          'state': 'MS',
          'zip': '38677'
        },
        {
          'name': 'Baylor University',
          'city': 'Waco',
          'state': 'TX',
          'zip': '76798'
        },
        {
          'name': 'University of Maryland',
          'city': 'College Park',
          'state': 'MD',
          'zip': '20783'
        },
        {
          'name': 'University of North Carolina at Chapel Hill',
          'city': 'Chapel Hill',
          'state': 'NC',
          'zip': '27599'
        },
        {
          'name': 'The University of Arizona',
          'city': 'Tuscon',
          'state': 'AZ',
          'zip': '85721'
        },
        {
          'name': 'Dartmouth College',
          'city': 'Hanover',
          'state': 'NH',
          'zip': '03755'
        },
        {
          'name': 'Georgetown University',
          'city': 'Washington',
          'state': 'DC',
          'zip': '20057'
        },
        {
          'name': 'University of Chicago',
          'city': 'Chicago',
          'state': 'IL',
          'zip': '60637'
        },
        {
          'name': 'Michigan State University',
          'city': 'East Lansing',
          'state': 'MI',
          'zip': '48824'
        },
        {
          'name': 'University of Georgia',
          'city': 'Athens',
          'state': 'GA',
          'zip': '30602'
        },
        {
          'name': 'Vanderbilt University',
          'city': 'Nashville',
          'state': 'TN',
          'zip': '37240'
        },
        {
          'name': 'Johns Hopkins University',
          'city': 'Baltimore',
          'state': 'MD',
          'zip': '21218'
        },
        {
          'name': 'University of California, Berkeley',
          'city': 'Berkeley',
          'state': 'CA',
          'zip': '94720'
        },
        {
          'name': 'University of Colorado at Boulder',
          'city': 'Boulder',
          'state': 'CO',
          'zip': '80309'
        },
        {
          'name': 'Florida State University',
          'city': 'Tallahassee',
          'state': 'FL',
          'zip': '32306'
        },
        {
          'name': 'University of Washington',
          'city': 'Seattle',
          'state': 'WA',
          'zip': '98195'
        },
        {
          'name': 'University of Michigan',
          'city': 'Ann Arbor',
          'state': 'MI',
          'zip': '48109'
        },
        {
          'name': 'The University of Texas at Austin',
          'city': 'Austin',
          'state': 'TX',
          'zip': '78712'
        },
        {
          'name': 'Northwestern University',
          'city': 'Evanston',
          'state': 'IL',
          'zip': '60208'
        },
        {
          'name': 'Cornell University',
          'city': 'Ithaca',
          'state': 'NY',
          'zip': '14853'
        },
        {
          'name': 'Boston University',
          'city': 'Boston',
          'state': 'MA',
          'zip': '02215'
        },
        {
          'name': 'Purdue University',
          'city': 'West Lafayette',
          'state': 'IN',
          'zip': '47907'
        },
        {
          'name': 'New York University',
          'city': 'New York',
          'state': 'NY',
          'zip': '10012'
        },
        {
          'name': 'Yale University',
          'city': 'New Haven',
          'state': 'CT',
          'zip': '06520'
        },
        {
          'name': 'Texas A&M University',
          'city': 'College Station',
          'state': 'TX',
          'zip': '77843'
        },
        {
          'name': 'Duke University',
          'city': 'Durham',
          'state': 'NC',
          'zip': '27708'
        },
        {
          'name': 'Massachusetts Institute of Technology',
          'city': 'Cambridge',
          'state': 'MA',
          'zip': '02139'
        },
        {
          'name': 'Stanford University',
          'city': 'Stanford',
          'state': 'CA',
          'zip': '94305'
        },
        {
          'name': 'Harvard University',
          'city': 'Cambridge',
          'state': 'MA',
          'zip': '02138'
        },
        {
          'name': 'University of Alabama',
          'city': 'Tuscaloosa',
          'state': 'AL',
          'zip': '35487'
        }
      ]
    };
  };

  // This group of functions is putting the inputs into the list
  // I am not sure if it is putting the 4 values in one group, seems it is doing 1 value
  // ex of how it think it is working:
  // {
  //   name: ""
  // },
  // {
  //   city: ""
  // },
  // ...
  // you can also see this based on how a new value is added to the table
  addNewName = () => {
    this.setState(({ colleges, name }) => ({
      colleges: [
          ...colleges,
        {
          name
        }
      ],
      name: ''
    }));
  };
  addNewCity = () => {
    this.setState(({ colleges, city }) => ({
      colleges: [
          ...colleges,
        {
          city
        }
      ],
      city: ''
    }));
  };
  addNewState = () => {
    this.setState(({ colleges, state }) => ({
      colleges: [
          ...colleges,
        {
          state
        }
      ],
      state:''
    }));
  };
  addNewZip = () => {
    this.setState(({ colleges, zip }) => ({
      colleges: [
          ...colleges,
        {
          zip
        }
      ],
      zip: ''
    }));
  };
  // end list input functions

  // this function is controlled by the save button and calls each input function
  addNewSchool = () => {
    this.addNewName();
    this.addNewCity();
    this.addNewState();
    this.addNewZip();
  };

  // this group of functions is grabbing the value of what is typed into the input function
  nameValue = e => {
    this.setState({
      name: e.target.value
    });
  };
  cityValue = e => {
    this.setState({
      city: e.target.value
    });
  };
  stateValue = e => {
    this.setState({
      state: e.target.value
    });
  };
  zipValue = e => {
    this.setState({
      zip: e.target.value
    });
  };
  // end value grabbing functions

  //delete function
  // https://stackoverflow.com/questions/35901920/deleting-an-item-in-reactjs
  // I was not able to figure out the delete function I was checking out this resource ^

  // edit function
  // I know I need an edit function, that I think would pull up the add new function in some respect

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* The header text */}
          <div id="header">
            <div id="txtHd-div">
              <h1 id="header-text">School Data</h1>
              <h2 id="subhead-text">Manage and export data collected for schools below</h2>
            </div>
            {/* Ideally the button that would bring about the add new overlay */}
            <div id="addBtn-div">
              <button id="add-new-btn">Add New School</button>
            </div>
          </div>
          {/* Ideally the add new overlay portion */}
          {/* I struggled with overlay because I could seem to import what was necessary for it  */}
          {/* These were resources I was looking at:
              https://react-bootstrap.github.io/components/overlays/
              https://github.com/reactjs/react-modal */}
          <div id="input-new-school">
              <p className="header">Add a New School</p>
              <div >
                <p>School Name</p>
                <input className="inpt-vl" type="text" value={this.state.name} onChange={this.nameValue} placeholder="School Name"/>
              </div>
              <div>
                <p>City</p>
                <input className="inpt-vl" type="text" value={this.state.city} onChange={this.cityValue} placeholder="City"/>
              </div>
              <div>
                <p>State</p>
                <input className="inpt-vl" type="text" value={this.state.state} onChange={this.stateValue} placeholder="State"/>
              </div>
              <div>
                <p>Zip</p>
                <input className="inpt-vl" type="text" value={this.state.zip} onChange={this.zipValue} placeholder="00000"/>
              </div>
              <div id="sve-cncl">
                <button id="cncl-btn">Cancel</button>
                <button id="save-btn" onClick={this.addNewSchool}>Save</button>
              </div>
            </div>
        </header>
        {/* what is displaying the schools */}
        <div id="school-flex">
          <div id="name-clmn">
            <p className="header">School Name</p>
              {/* Here I was trying to implement a component to display the schools called ListView */}
              {/* {this.state.colleges.map((name, index) => {
              return <ListView
                        index={index}
                        name={name.name}
                    />
              })} */}
              {/* I ended up just doing in this file without component due to complications - explained in listView.js */}
              {this.state.colleges.map((item, index) => (
                  <div key={index} id="first-col" className="col">{item.name}</div>
              ))}
          </div>
          <div id="city-clmn">
            <p className="header">City</p>
              {/* Here I was trying to implement a component to display the schools called ListView */}
              {/* {this.state.colleges.map((city, index) => {
              return <ListView
                        index={index}
                        city={city.city}
                    />
              })} */}
              {/* I ended up just doing in this file without component due to complications - explained in listView.js */}
              {this.state.colleges.map((item, index) => (
                  <div key={index} id="second-col" className="col">{item.city}</div>
              ))}
          </div>
          <div id="state-clmn">
            <p className="header">State</p>
              {/* Here I was trying to implement a component to display the schools called ListView */}
              {/* {this.state.colleges.map((state, index) => {
              return <ListView
                        index={index}
                        state={state.state}
                    />
              })} */}
              {/* I ended up just doing in this file without component due to complications - explained in listView.js */}
              {this.state.colleges.map((item, index) => (
                  <div key={index} id="third-col" className="col">{item.state}</div>
              ))}
          </div>
          <div id="zip-clmn">
            <p className="header">Zip</p>
              {/* Here I was trying to implement a component to display the schools called ListView */}
              {/* {this.state.colleges.map((zip, index) => {
              return <ListView
                        index={index}
                        zip={zip.zip}
                    />
              })} */}
              {/* I ended up just doing in this file without component due to complications - explained in listView.js */}
              {this.state.colleges.map((item, index) => (
                  <div key={index} id="fourth-col" className="col">{item.zip}</div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;


