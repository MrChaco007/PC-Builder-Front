import React, { useState} from 'react'
import RightNav from './RightNav'
import './hamburger.css'

const Hamburger = () => {
    const [open, setOpen] = useState(false)
    const isOpen = () => {
    return (
        <>
          <div className="hamburger open" open={open} onClick={() => setOpen(!open)}>
            <div id="one"></div>
            <div id="two"></div>
            <div id="three"></div>
          </div>
          <div className="outside open">

          </div>
          <div className="right-nav open">
              <RightNav/>
          </div>
        </>
    )
    }
    const isClosed = () => {
        return (
        <>
          <div className="hamburger" open={open} onClick={() => setOpen(!open)}>
              <div id="one"></div>
              <div id="two"></div>
              <div id="three"></div>
          </div>
          <div className="outside">

          </div>
          <div className="right-nav">
               <RightNav open={open}/>
            </div>
        </>
      )
    }
    return (
        open ? isOpen() : isClosed()
    )
}

export default Hamburger