import React from 'react';
import './App.css';

class App extends React.Component<{}, {songList: string}> {

  constructor(props: any) {
    super(props)
    this.state = {
      songList: ''
    }
  }

  render() {
    const { songList } = this.state
    return (
      <div>
        <div>love song</div>
        <div>{songList}</div>
      </div>
    );
  }

  async componentDidMount() {
    const data = await (await fetch("./data.txt")).text()
    this.setState({songList: data})
    console.log(data)
  }
}

export default App;
