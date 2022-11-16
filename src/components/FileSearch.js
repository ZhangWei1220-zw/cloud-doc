import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch, faTimes} from '@fortawesome/free-solid-svg-icons'
import useKeyPress from '../hooks/useKeyPress'
import PropTypes from 'prop-types'

const FileSearch = ({ title, onFileSearch }) => {
  const [ inputActive, setInputActive ] = useState(false)
  const [ value, setValue ] = useState('')
  const enterPressed = useKeyPress(13)
  const escPressed = useKeyPress(27)
  const node = useRef(null)

  const closeSearch = () => {
    setInputActive(false)
    setValue('')
  }

  useEffect(() => {
    if(enterPressed && inputActive) {
      onFileSearch(value)
    }
    if(escPressed && inputActive) {
      closeSearch()
    }

    // const handleInputEvent = (event) => {
    //   const { keyCode } = event
    //   if(keyCode === 13 && inputActive) {
    //     onFileSearch(value)
    //   }else if(keyCode === 27 && inputActive){
    //     closeSearch(event)
    //   }
    // }
    // document.addEventListener('keyup',handleInputEvent)
    // return () => {
    //   document.removeEventListener('keyup',handleInputEvent)
    // }
  })
  useEffect(()=>{
    if(inputActive){
      node.current.focus()
    }
  },[inputActive])
  return (
    <div className='alert alert-primary d-flex justify-content-between align-items-center mb-0'>
      {
        !inputActive && 
        <>
          <span>{title}</span>
          <button
            type='button'
            className='icon-button'
            onClick={() => {setInputActive(true)}}
          >
            <FontAwesomeIcon 
              title='搜索'
              icon={faSearch}
              size='lg'
            />
          </button>
        </>
      }
      {
        inputActive && 
        <>
          <input 
            className='form-control' 
            value={value}
            ref={node}
            onChange={(e)=>{setValue(e.target.value)}}
          />
          <button 
            type='button'
            className='icon-button'
            onClick={closeSearch}
          >
            <FontAwesomeIcon 
              title='关闭'
              icon={faTimes}
              size='lg'
            />
          </button>
        </>
      }
    </div>
  )
}

FileSearch.propTypes = {
  title: PropTypes.string,
  onFileSearch: PropTypes.func.isRequired
}

FileSearch.defaultProps = {
  title:'我的云文档'
}
export default FileSearch