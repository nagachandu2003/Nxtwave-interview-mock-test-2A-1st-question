import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CharObj from '../CharObj'
import './index.css'

class CharacterCounter extends Component {
  state = {userInput: '', charList: []}

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onSubmitBtn = event => {
    event.preventDefault()
    const {userInput, charList} = this.state
    if (userInput.length !== 0) {
      const newObj = {
        id: uuidv4(),
        name: userInput,
        len: userInput.length,
      }
      const updatedList = [...charList, newObj]
      this.setState({charList: updatedList, userInput: ''})
    }
  }

  render() {
    const {userInput, charList} = this.state

    return (
      <div className="bg-container">
        <div className="main-container">
          <div className="card1">
            <h1 className="heading1">Count the characters like a Boss...</h1>
            {charList.length === 0 && (
              <img
                className="img1"
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
              />
            )}
            {charList.length !== 0 && (
              <ul>
                {charList.map(ele => (
                  <CharObj key={ele.id} itemDetails={ele} />
                ))}
              </ul>
            )}
          </div>
          <div className="card2">
            <h1 className="heading2">Character Counter</h1>
            <form className="myForm" onSubmit={this.onSubmitBtn}>
              <input
                onChange={this.onChangeUserInput}
                className="user-input"
                value={userInput}
                type="text"
                placeholder="Enter the Characters here"
              />
              <button type="submit" className="button1">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default CharacterCounter
