import React from 'react'
import "./footer.css"
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation()
  const shouldRenderFooter = location.pathname !== "/login" && location.pathname !== "/signup";

  return (
    <>
      { shouldRenderFooter && 
    <div className='footer-container'>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> ComfySloth </span>
      </h5>
      <h5>All rights reserved</h5> 
    </div>
  }
  </>
  )
}

export default Footer
