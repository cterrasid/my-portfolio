import React, { PureComponent } from 'react';
import Header from '../Header';
import Main from '../Main';
import './styles.scss';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      menuStatus: 'close' || 'open',
    };

    this.handleButtonMenu = this.handleButtonMenu.bind(this);
  }

  handleButtonMenu() {
    const { menuStatus } = this.state;

    menuStatus  === 'open'
      ? this.setState({
          menuStatus: 'close',
        })
      : this.setState({
          menuStatus: 'open',
        });
  }

  render() {
    const { menuStatus } = this.state;

    return (
      <div className="app__container">
        <Header
          handleButtonMenu={this.handleButtonMenu}
          menuStatus={menuStatus}
        />
        <Main />
      </div>
    );
  }
}

export default App;
