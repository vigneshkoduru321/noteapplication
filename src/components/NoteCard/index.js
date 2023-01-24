import './index.css'

import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'

const NoteCard = props => {
  const {details, onDeleteNote, onEditNote} = props
  const {id, title, textAreaText} = details
  const onClickDelete = () => {
    onDeleteNote(id)
  }
  const onClickEdit = () => {
    const values = {title, textAreaText, id}
    onEditNote(values)
  }
  return (
    <div className="note-card">
      <div className="text-con">
        <p className="title">{title}</p>
        <p className="text">{textAreaText}</p>
      </div>
      <div>
        <button className="edit-button">
          <BiEdit onClick={onClickEdit} className="edit-icon" />
        </button>
        <button onClick={onClickDelete} className="edit-button">
          <MdDelete className="edit-icon" />
        </button>
      </div>
    </div>
  )
}

export default NoteCard
