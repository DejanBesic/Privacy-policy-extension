import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { store, persistor} from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import Settings from './components/Settings';
import Validation from './components/Validation/Validation';
import MultiToggle from 'react-multi-toggle';

let editedOptions = [
  {
    displayName: 'Validation',
    value: 1,
  },
  {
    displayName: 'Settings',
    value: 2
  },
];

class App extends Component {
  constructor(){
    super();
    this.state = {
      selected: 1,
    };
  }
  
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null} >
          <div style={{ width: 500 }}>
            <MultiToggle
              options={editedOptions}
              selectedOption={this.state.selected}
              onSelectOption={(value) => this.setState({ selected: value })}
            />
            {this.state.selected === 1 ? 
              <Validation />
            : <Settings />
            }
          </div>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
