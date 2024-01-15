import React from 'react';
import './App.css';
import Heart from './Heart';

function generateColorByValue(max: number, value: number) {
  const colors = ['#69f0ae','#64ffda','#18ffff','#40c4ff','#448aff','#536dfe','#7c4dff','#e040fb','#ff4081','#ff5252']
  value = Math.min(value, colors.length)
  console.log(value)
  return colors[colors.length - 1 - (max - value)]
}

class App extends React.Component<{}, {songList: [string,number][]}> {

  constructor(props: any) {
    super(props)
    this.state = {
      songList: [] as [string,number][]
    }
  }

  render() {
    const { songList } = this.state
    return (
      <div style={{textAlign: 'center', fontSize: '18px'}}>
        <div style={{marginTop: '20px'}}>
          <div style={{float:'left', marginLeft: '25%'}}>
            <Heart />
          </div>
          love song
          <div style={{float:'right', marginRight: '25%'}}>
            <Heart />
          </div>
          </div>
        {songList.map(song =><div style={{paddingBottom: '10px', color: generateColorByValue(songList[0][1], song[1])}}>{song[0]}: {song[1]}</div>)}
      </div>
    );
  }

  async componentDidMount() {
    const data = await (await (await fetch("./data.txt")).text()).split("\n")
    const map = {} as any;
    for(const i of data) {
      if (map[i]) {
        map[i]++
      } else {
        map[i] = 1
      }
    }
    const songCounts = Object.entries(map).sort((a: any,b: any) => b[1] - a[1]) as [string,number][]
    this.setState({songList: songCounts})
  }
}

export default App;
