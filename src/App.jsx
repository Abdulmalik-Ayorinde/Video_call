import { useState } from "react"
import "./App.css"
import { Link } from "react-router-dom"

function App() {
	return (
		<div className='App'>
			Go to <Link to='chat'>Chat</Link>
		</div>
	)
}

export default App
