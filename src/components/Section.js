import React from 'react'
import { Fade } from 'react-reveal'
import './Section.css'

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {
    return (
        <div className='section' style={{
            backgroundImage: `url("/images/${backgroundImg}")`
        }}>
            <Fade bottom>
                <div className='section__itemText'>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </Fade>
            <div className='section__buttons'>
                <Fade bottom>
                    <div className='section__buttonGroup'>
                        <div className='section__leftBtn'>
                            {leftBtnText}
                        </div>
                        {rightBtnText &&
                            <div className='section__rightBtn'>
                                {rightBtnText}
                            </div>
                        }

                    </div>
                </Fade>
                <img className='section__downArrow' src='/images/down-arrow.svg' alt='' />
            </div>
        </div>
    )
}

export default Section
