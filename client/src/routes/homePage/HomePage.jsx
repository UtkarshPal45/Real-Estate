import React, { useContext } from 'react'
import "./homePage.scss"
import SearchBar from '../../components/searchBar/SearchBar'
import { AuthContext } from '../../context/AuthContext'

export default function HomePage() {

    const {currentUser}=useContext(AuthContext)
    console.log(currentUser)


  return (
    <div className='homepage'>
        <div className="textContainer">
            <div className="wrapper">
                <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
                <p>
                    lorem ipsum React.js real estate booking system design course. React real estate responsive UI design project with HTML, CSS, and React Map.
                </p>
                <SearchBar/>
                <div className="boxes">
                    <div className="box">
                        <h1>18+</h1>
                        <h2>Years of Experience</h2>
                    </div>
                    <div className="box">
                        <h1>200</h1>
                        <h2>Award Gained</h2>
                    </div>
                    <div className="box">
                        <h1>1200+</h1>
                        <h2>Property Ready</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="imgContainer">
            <img src='bg.png' alt='bg img'/>
        </div>
    </div>
  )
}
