import Header from './Header'

function Home() {
	return (
		<div>
			<Header />
			<h3> Welcome to our app </h3>
			<p> {resultMsg} </p>
		</div>
	)
}

export default Home