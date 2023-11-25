import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const date = new Date();
    const fonts = ['Arial', 'Verdana', 'Courier New', 'Times New Roman'];
    const colors = ['#ffffff', '#f8f9fa']; // White and light gray colors

    const [currentFont, setCurrentFont] = useState(fonts[0]);
    const [currentColor, setCurrentColor] = useState(colors[0]);

    useEffect(() => {
        const fontInterval = setInterval(() => {
            setCurrentFont(prevFont => {
                const nextFontIndex = (fonts.indexOf(prevFont) + 1) % fonts.length;
                return fonts[nextFontIndex];
            });
        }, 500); // Change font every 0.5 seconds (500ms)

        const colorInterval = setInterval(() => {
            setCurrentColor(prevColor => {
                const nextColorIndex = (colors.indexOf(prevColor) + 1) % colors.length;
                return colors[nextColorIndex];
            });
        }, 1000); // Change color every second (1000ms)

        return () => {
            clearInterval(fontInterval);
            clearInterval(colorInterval);
        };
    }, [fonts, colors]);

    return (
        <footer className="footer text-center py-3">
            <p className="footerText text-dark">
                &copy; {date.getFullYear()}
            </p>
            <p className="footerText" style={{ fontFamily: currentFont, color: currentColor }}>
                <span className="d-none d-sm-inline text-dark">
                    Developed by Kevin Castro
                </span>
                <span className="d-inline d-sm-none text-dark">
                    Dev'd by Kevin Castro
                </span>
            </p>
            <div>
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

            <style>
                {`
                    @media screen and (max-width: 576px) {
                        .footerText .d-sm-none .font-changing {
                            font-size: 0.8rem; /* Adjust font size for smaller screens */
                        }
                    }
                `}
            </style>
        </footer>
    );
}

export default Footer;
