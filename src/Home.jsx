import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
	return (
		<div>
			<Link to={"/posts"}>Go To Posts</Link>
			<Link to={"/users/1"}>User1</Link>
		</div>
	)
}

export default Home