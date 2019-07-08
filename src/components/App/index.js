import React, { PureComponent } from 'react';
import Header from '../Header';
import Main from '../Main';
import './styles.scss';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      menuStatus: 'close' || 'open',
      projectType: 'group' || 'individual',
    };

    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleProjectIndividualClick = this.handleProjectIndividualClick.bind(this);
    this.handleProjectGroupClick = this.handleProjectGroupClick.bind(this);
  }

  handleMenuClick() {
    const { menuStatus } = this.state;

    menuStatus === 'open'
      ? this.setState({
          menuStatus: 'close',
        })
      : this.setState({
          menuStatus: 'open',
        });
  }

  handleProjectIndividualClick() {
    this.setState({
      projectType: 'individual',
    });
  }

  handleProjectGroupClick() {
    this.setState({
      projectType: 'group',
    });
  }

  render() {
    const { menuStatus, projectType } = this.state;

    return (
      <div className="app__container">
        <Header
          handleMenuClick={this.handleMenuClick}
          menuStatus={menuStatus}
        />
        <Main
          handleProjectIndividualClick={this.handleProjectIndividualClick}
          handleProjectGroupClick={this.handleProjectGroupClick}
          projectType={projectType}
        />
      </div>
    );
  }
}

export default App;
