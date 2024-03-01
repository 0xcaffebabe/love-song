import { useState } from "react"

function choose(val: string) {
  const res = val.split('\n')
    .map(v => {
      const arr = v.split(" ")
      const index = Math.floor(Math.random() * arr.length)
      return arr[index]
    })
    .join(",")
  alert('今天:' + res)
}

export default function RandomEvent() {
  const [val, setValue] = useState('做手工花1朵 一二布布40分钟 做手帐1页 练吉他1小时 冥想\n读书40分钟 运动40分钟 学python1小时')
  return <div>
    <div>
      <textarea value={val} rows={5} cols={100} onChange={e => setValue(e.target.value)}></textarea>
    </div>
    <button onClick={e => choose(val)}>选择</button>
  </div>
}