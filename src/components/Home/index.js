import './index.css'

import {v4 as uuidv4} from 'uuid'
import Cookies from 'js-cookie'

import {CgNotes} from 'react-icons/cg'

import {Component} from 'react'

import NoteCard from '../NoteCard'

class Home extends Component {
  state = {showInput: false, notesList: [], textAreaText: '', title: ''}

  onClickCreate = () => {
    this.setState({showInput: true})
  }

  onClickCloseInput = () => {
    this.setState({showInput: false})
  }

  onChangeText = e => {
    this.setState({textAreaText: e.target.value})
  }

  onChangeTitle = e => {
    this.setState({title: e.target.value})
  }

  onClickSaveInput = () => {
    const {notesList, textAreaText, title} = this.state
    this.setState({textAreaText: '', title: ''})
    if (textAreaText !== '' && title !== '') {
      this.setState({
        notesList: [...notesList, {title, textAreaText, id: uuidv4()}],
      })
    } else {
      alert('enter valid text')
    }
  }

  deleteNote = id => {
    console.log(id)
    const {notesList} = this.state
    const filteredList = notesList.filter(each => each.id !== id)
    this.setState({notesList: filteredList})
  }

  editNote = values => {
    const {id, title, textAreaText} = values
    const {notesList} = this.state
    const filteredList = notesList.filter(each => each.id !== id)
    this.setState({notesList: filteredList})
    this.setState({title, textAreaText})
  }

  renderSavedList = () => {
    const {notesList} = this.state
    if (notesList.length === 0) {
      return (
        <p className="empty-note">There is no saved notes yet, create one.</p>
      )
    }
    return (
      <>
        {notesList.map(each => (
          <NoteCard
            onDeleteNote={this.deleteNote}
            onEditNote={this.editNote}
            details={each}
            key={each.id}
          />
        ))}
      </>
    )
  }

  render() {
    const {showInput, notesList, textAreaText, title} = this.state
    return (
      <div className="home-background">
        <div className="heading-con">
          <h1 className="notes-heading">NOTES</h1>
          <CgNotes className="note-icon" />
        </div>
        <div className="my-notes-con">
          <h1>
            <span className="span-head">My </span>Notes
          </h1>
          {this.renderSavedList()}
        </div>
        <div className="create-notes-con">
          <h1>
            <span className="span-head">Create </span>Notes
          </h1>
          <button
            type="button"
            onClick={this.onClickCreate}
            className="save-button"
          >
            Create
          </button>
          <br />
          {showInput ? (
            <>
              <input
                value={title}
                onChange={this.onChangeTitle}
                placeholder="ENTER TITLE"
                className="title-input"
                type="text"
              />
              <br />
              <textarea
                placeholder="ENTER YOUR NOTE HERE"
                value={textAreaText}
                onChange={this.onChangeText}
                className="text-area"
                rows="13"
              />
              <br />
              <button
                onClick={this.onClickCloseInput}
                className="cancel-button"
              >
                Close
              </button>
              <button onClick={this.onClickSaveInput} className="cancel-button">
                Save
              </button>
            </>
          ) : null}
        </div>
      </div>
    )
  }
}

export default Home
