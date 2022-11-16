import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const BottonBtn = ({ text, colorClass, icon, onBtnClick}) => {
  return (
    <div className='d-grid'>
      <button
        type='button'
        className={`btn btn-block no-broder ${colorClass}`}
        onClick={onBtnClick}
      >
        <FontAwesomeIcon
          className='me-2'
          size='lg'
          icon={icon}
        />
        {text}
      </button>
    </div>
  )
}

BottonBtn.propTypes = {
  text:PropTypes.string,
  colorClass:PropTypes.string,
  // icon:PropTypes.element.isRequired,
  onBtnClick:PropTypes.func
}

BottonBtn.defaultProps = {
  text: '新建'
}

export default BottonBtn