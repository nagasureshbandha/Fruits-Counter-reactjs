import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangosCount: 0, bananasCount: 0}

  onEatMango = () => {
    this.setState(prevState => ({
      mangosCount: prevState.mangosCount + 1,
    }))
  }

  onEatBanana = () => {
    this.setState(prevState => ({
      bananasCount: prevState.bananasCount + 1,
    }))
  }

  render() {
    const {mangosCount, bananasCount} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">
            Bob ate <span className="count">{mangosCount}</span> mangoes
            <span className="count">{bananasCount}</span> bananas
          </h1>
          <div className="imgcontainer">
            <div className="counters">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="button"
                alt="mango"
              />
              <div className="button-container">
                <button
                  onClick={this.onEatMango}
                  type="buton"
                  className="button"
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="counters">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                className="button"
                alt="banana"
              />
              <div className="button-container">
                <button
                  className="button"
                  type="button"
                  onClick={this.onEatBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
