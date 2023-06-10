import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: 'Ugandan Knuckles',
      bio: 'Do you know da wae?',
      imgSrc: 'https://m.media-amazon.com/images/I/71-o46CzdiL.png',
      profession: 'Web Developer'
    },
    show: false,
    elapsedTime: 0
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({ elapsedTime: prevState.elapsedTime + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, elapsedTime } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>Toggle Show</button>
        {show && (
          <div>
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <img src={imgSrc} alt={fullName} />
            <p>Profession: {profession}</p>
          </div>
        )}
        <p>Elapsed Time: {elapsedTime} seconds</p>
      </div>
    );
  }
}

export default App;
