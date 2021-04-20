import React from 'react'
import './Footer.css'
import CopyrightIcon from '@material-ui/icons/Copyright';

function Footer() {
    return (
        <footer className="footer">            
            <CopyrightIcon className="footer_copyrightIcon" />
            <span>2021</span>
            <a href='https://github.com/bbrighttaer'>bbrighttaer</a>
        </footer>
    )
}

export default Footer
