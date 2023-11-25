import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import headshot from '../../images/headshot.png';

function About() {
    const [showModal, setShowModal] = useState(false);
    const [displayText, setDisplayText] = useState('');
    const [textColor, setTextColor] = useState('blue');

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const originalText = "My name is Kevin Castro, but you probably already knew that.";

    useEffect(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index <= originalText.length) {
                setDisplayText((prevText) => originalText.substring(0, index));
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100); // Typing speed (100ms per character)

        const colorChangeInterval = setInterval(() => {
            const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            setTextColor(randomColor);
        }, 1000); // Change color every second (1000ms)

        return () => {
            clearInterval(typingInterval);
            clearInterval(colorChangeInterval);
        };
    }, []); // Empty dependency array to run effect once on initial mount


    return (
        <>
            <main className="text-center">
                <img className="headshot mx-auto" src={headshot} alt="headshot" />
                <h2>Discover My Work</h2>
                <p className="p-3">{displayText}</p>
                <hr className="divider" />

                <p className="p-3">
                    <span
                        onClick={handleShow}
                        style={{
                            textDecoration: 'none',
                            cursor: 'pointer',
                            color: textColor,
                            backgroundColor: 'black',
                            padding: '8px 12px',
                            borderRadius: '5px',
                            transition: 'color 0.5s ease',
                            display: 'inline-block',
                        }}
                    >
                        Click here to read more about me
                    </span>
                </p>

                <Modal show={showModal} onHide={handleClose} size="lg" centered>
                    <Modal.Header closeButton>
                        <Modal.Title>About Me</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p className="p-3 par">As a kid I was always into electronics, computers especially.And I"m sure as we all were at some point, I was the go to I.T. person in my house. When all we really did was restart the router haha. I always wanted to know more about what was going on inside my computer and why it wasnt as fast as I wanted it to be so I would go off to highschool and join a new course called Cisco: Intro to Technology. While in that class I found a new liking to Computers, mostly the hardware part of things and went off to help build computers with my nephews and friends, made ethernet cables that I would use for my xbox and router. From there I went off to working full time and managing a couple of places and thought I needed some change. I started the Bootcamp with Rutgers and found myself loving hte ins and outs of computers all over again. Thoughout the Bootcamp I started to lean towards Frontend Development and thats where I want to basic my focus on now.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                <hr className="divider" />
                <p className='p-2'> Connect with me, interact with me and let's create amazing things together.</p>
            </main>
        </>
    );
}

export default About;

