import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    isEven: true,
    count: 0,
  }

  change = () => {
    this.setState(i => ({
      isEven: !i.isEven,
    }))
  }

  increase = () => {
    const {count} = this.state
    const k = Math.ceil(Math.random() * 100)
    const sum = count + k
    if (sum % 2 !== 0) {
      this.state.isEven = false
    } else {
      this.state.isEven = true
    }
    this.setState(j => ({count: j.count + k}))
  }

  render() {
    const {count, isEven} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="card-heading">Count {count}</h1>
          {isEven ? (
            <p className="answer">Count is Even</p>
          ) : (
            <p className="answer">Count is Odd</p>
          )}
          <button type="button" onClick={this.increase} className="btn">
            Increment
          </button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
