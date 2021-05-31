import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const pageOne = () => {
    return <div> pageOne 
        <Link to='/pageTwo'> Navigate to pageTwo </Link>
    </div>
}

const pageTwo = () => {
    return <div>pageTwo 
        <Link to='/'> Navigate to pageOne </Link>
    </div>
}

const App = () => {
    return <div>
        <BrowserRouter>
            <div>
                <Route path='/' exact component={pageOne} />
                <Route path='/pageTwo' component={pageTwo} />
            </div>
        </BrowserRouter>     
    </div>
}

export default App  