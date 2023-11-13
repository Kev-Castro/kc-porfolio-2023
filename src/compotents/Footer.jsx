import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const date = new Date();

    return (
        <footer className="text-center py-3">
            <p className="footerText">&copy; {date.getFullYear()}</p>
            <p className="footerText">
                <span className="d-none d-sm-inline">Developed by Kevin Castro</span>
                <span className="d-inline d-sm-none">Dev'd by Kevin Castro</span>
            </p>
            <div className="mt-2">
                <a href="https://github.com/Kev-Castro" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://linkedin.com/in/kevin-a-castro" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                {/* Add link for Discord icon */}
                <a href="https://discordapp.com/users/1146083711591391383" target="_blank" rel="noopener noreferrer" className="text-dark">
                    <FontAwesomeIcon icon={faDiscord} />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
