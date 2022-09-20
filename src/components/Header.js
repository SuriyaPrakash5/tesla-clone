import { Close, Menu } from '@mui/icons-material'
import React, { useState } from 'react'
import './Header.css'
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux'

function Header() {

    const [burgerStatus, setBurgerStatus] = useState(false)
    const cars = useSelector(selectCars)
    return (
        <div className='header'>
            <a href="{#}">
                <img src='/images/logo.svg' alt='' />
            </a>
            <div className='header__menu'>
                {cars && cars.map((car, index) => (
                    <a key={index} href="{#}">{car}</a>
                ))}
            </div>
            <div className='header__rightMenu'>
                <a href="{#}">Shop</a>
                <a href="{#}">Tesla Account</a>
                <Menu className='header__menuIcon' onClick={() => setBurgerStatus(true)} />
            </div>
            <div className='header__burgerNav' style={{
                transform: `${burgerStatus ? 'translateX(0)' : 'translateX(100%)'}`
            }}>
                <div className='header__closeWrap'>
                    <Close className='header__closeIcon' onClick={() => setBurgerStatus(false)} />
                </div>

                {cars && cars.map((car, index) => (
                    <li key={index}><a href="{#}">{car}</a></li>
                ))}
                <li><a href="{#}">Existing Inventory</a></li>
                <li><a href="{#}">Used Inventory</a></li>
                <li><a href="{#}">Trade-in</a></li>
                <li><a href="{#}">Cybertruck</a></li>
                <li><a href="{#}">Roadaster</a></li>
            </div>
        </div>
    )
}

export default Header
