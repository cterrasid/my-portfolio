import React, { PureComponent } from 'react';
import { TranslatorProvider } from "react-translate";
import Header from '../Header';
import Main from '../Main';
import './styles.scss';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      menuStatus: 'close' || 'open',
      projectType: 'group' || 'individual',
      skillType: 'tech' || 'soft',
    };

    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleProjectIndividualClick = this.handleProjectIndividualClick.bind(
      this,
    );
    this.handleProjectGroupClick = this.handleProjectGroupClick.bind(this);
    this.handleSoftSkillClick = this.handleSoftSkillClick.bind(this);
    this.handleTechSkillClick = this.handleTechSkillClick.bind(this);
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

  handleSoftSkillClick() {
    this.setState({
      skillType: 'soft',
    });
  }

  handleTechSkillClick() {
    this.setState({
      skillType: 'tech',
    });
  }

  render() {
    const { menuStatus, projectType, skillType } = this.state;

    return (
      <div className="app__container">
        <Header
          handleMenuClick={this.handleMenuClick}
          menuStatus={menuStatus}
        />
        <Main
          handleProjectIndividualClick={this.handleProjectIndividualClick}
          handleProjectGroupClick={this.handleProjectGroupClick}
          handleSoftSkillClick={this.handleSoftSkillClick}
          handleTechSkillClick={this.handleTechSkillClick}
          skillType={skillType}
          projectType={projectType}
        />
      </div>
    );
  }
}

export default App;
