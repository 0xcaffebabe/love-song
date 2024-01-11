import React from 'react';
import './App.css';

function generateColorByValue(max: number, value: number) {
  const colors = ['#69f0ae','#64ffda','#18ffff','#40c4ff','#448aff','#536dfe','#7c4dff','#e040fb','#ff4081','#ff5252']
  value = Math.min(value, colors.length)
  console.log(value)
  return colors[colors.length - 1 - (max - value)]
}

// function generateColorByValue(value: number) {
//   value = Math.min(value, 10)

//   // 初始颜色为冷色调
//   let startColor = [0, 128, 255]; // 初始颜色为蓝色
//   let endColor = [255, 0, 0]; // 终止颜色为红色

//   // 计算渐变过程中给定值的颜色值
//   let r = Math.floor(startColor[0] + (endColor[0] - startColor[0]) * (value / 10));
//   let g = Math.floor(startColor[1] + (endColor[1] - startColor[1]) * (value / 10));
//   let b = Math.floor(startColor[2] + (endColor[2] - startColor[2]) * (value / 10));

//   // 将RGB值转换为16进制颜色值
//   let hexColor = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

//   return hexColor;
// }

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
        <div>love song</div>
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
