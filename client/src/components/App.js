import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'

const pageOne = () => {
    return <div> pageOne 
        <a href='/pageTwo'>Navigate to page Two</a>
    </div>
}

const pageTwo = () => {
    return <div>pageTwo 
        <a href='/'>Navigate to pageOne</a>
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