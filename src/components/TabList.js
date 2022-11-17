import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './TableList.css'

const TabList = ({ files, activeId, onsaveIds, onTabClick, onCloseTab}) => {
  return (
    <ul className='nav nav-pills tablist-component'>
      {files.map(file => {
        const withUnsaveMark = onsaveIds.includes(file.id)
        console.log(withUnsaveMark);
        const fClassName = classNames({
          'nav-link': true,
          'active': file.id === activeId,
          'withUnsaved': withUnsaveMark
        })
        return (
          <li className='nav-item' key={file.id}>
            <a
              href='#'
              className={fClassName}
              onClick={(event) => {event.preventDefault(); onTabClick(file.id)}}
            >
              {file.title}
              <span 
                className='ms-2 close-icon'
                onClick={(e) => {e.stopPropagation(); onCloseTab(file.id)}}
              >
                <FontAwesomeIcon 
                  title='markdown'
                  icon={faTimes}
                />
              </span>
              {withUnsaveMark && <span className='rounded-circle ms-2 unsaved-icon'></span>}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

TabList.propTypes = {
  files: PropTypes.array,
  activId: PropTypes.string,
  unsaveIds: PropTypes.array,
  onTabClick: PropTypes.func,
  onCloseTab: PropTypes.func
}
TabList.defaultProps = {
  unsaveIds: []
}
export default TabList