import { NavLink } from 'react-router-dom'
import './BottomBar.css'

const BottomBar = () => {
    return (
        <div className='bottom-nav'>
            <ul>
                <li><NavLink to={"ebook-writing"}>Ebook Writing</NavLink></li>
                <li><NavLink to={"ebook-editing"}>Ebook Editing</NavLink></li>
                <li><NavLink to={"ebook-publishing"}>Ebook Publishing</NavLink></li>
                <li><NavLink to={"ebook-cover-design"}>Ebook Cover Design</NavLink></li>
                <li><NavLink to={"ebook-marketing"}>Ebook Marketing</NavLink></li>
                <li><NavLink to={"genre"}>Genre</NavLink></li>
            </ul>
        </div>
    )
}

export default BottomBar
