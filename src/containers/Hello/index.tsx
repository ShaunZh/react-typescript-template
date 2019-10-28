import * as React from 'react'
import userApi from '@api/user'

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!')
}

interface Props {
  name: string
  enthusiasmLevel?: number
}

class Hello extends React.Component<Props, object> {
  public componentDidMount() {
    console.log('componentDidMount')
    userApi.getInfo({}).then((res: any) => {
      console.log('res', res)
    })
  }
  public render() {
    const { name, enthusiasmLevel = 1 } = this.props
    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D')
    }
    return (
      <div className="hello">
        <div className="greeting">Hello {name + getExclamationMarks(enthusiasmLevel)}</div>
      </div>
    )
  }
}

export default Hello
