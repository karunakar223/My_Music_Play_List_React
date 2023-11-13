import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const PlayListItem = props => {
  const {trackDetails, onDelete} = props
  const {id, imageUrl, name, genre, duration} = trackDetails

  const onTrackDeleteBtn = () => {
    onDelete(id)
  }

  return (
    <li className="li-container">
      <div className="track-info-container">
        <img src={imageUrl} alt="track" className="track-img" />
        <div className="name-genre-container">
          <p className="track-name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="duration-delete-container">
        <p className="duration">{duration}</p>
        <button
          type="button"
          className="delete-button"
          onClick={onTrackDeleteBtn}
          data-testid="delete"
        >
          <AiOutlineDelete size={25} />
        </button>
      </div>
    </li>
  )
}

export default PlayListItem
