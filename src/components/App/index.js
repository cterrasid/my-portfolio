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

    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick() {
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
          handleMenuClick={this.handleMenuClick}
          menuStatus={menuStatus}
        />
        <Main />
      </div>
    );
  }
}

export default App;
