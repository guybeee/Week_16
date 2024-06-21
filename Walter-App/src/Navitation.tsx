import { Link, Route, Routes } from 'react-router-dom'
import './Navigation.css'
import Home from './Home'
import ImageListComponent from './ImageList'
import { Contact } from './Contact'
import AboutMe from './AboutMe'
import Gallery from './Gallery'


export default function Navigation() {
    return (
        <>
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to='/Home'>Home</Link>
                    </li>
                    <li>
                        <Link to='/AboutMe'>About Me</Link>
                    </li>
                    <li>
                        <Link to='/ImageList'>Gallery</Link>
                    </li>
                    <li>
                        <Link to='/Gallery'>Gallery 1.2</Link>
                    </li>
                    <li>
                        <Link to='/Contact'>Contact Us</Link>
                    </li>
                </ul>
            </nav>
        
            <Routes>
                <Route path='/Home' element= {<Home/>}/>
                <Route path='/AboutMe' element= {<AboutMe/>}/>
                <Route path='/ImageList' element= {<ImageListComponent/>}/>
                <Route path='/Gallery' element= {<Gallery/>}/>
                <Route path='/Contact' element= {<Contact/>}/>
            </Routes>
        </>
    )
}