import './Header.css'
import {Link} from 'react-router-dom'

function Header() {
	return (
		<div className = "headerWrapper">
			<p> This is a header </p>
			<Link to = "/"> Home </Link>
			<Link to = "/about"> About </Link>
		</div>
	)
}