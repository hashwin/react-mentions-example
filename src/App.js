import React, { Component } from 'react';
import { MentionsInput, Mention } from 'react-mentions';

const users = [
  {
    id: 'walter',
    display: 'Walter White',
  },
  {
    id: 'jesse',
    display: 'Jesse Pinkman',
  }
]

class App extends Component {
  state = {
    value: ''
  }

  handleChange = (e, value) => {
    this.setState({ value });
  }

  render() {
    return (
      <MentionsInput value={this.state.value} onChange={this.handleChange}>
        <Mention
          trigger="@"
          data={users}
          renderSuggestion={this.renderUserSuggestion}
        />
      </MentionsInput>
    );
  }
}

export default App;
