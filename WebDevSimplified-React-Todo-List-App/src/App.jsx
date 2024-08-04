import './App.css'

const App = () => (
    <>
        <header>
            <h1>WebDevSimplified-React-Todo-List-App</h1>
        </header>
        <main>
            <form action="" className="new-item-form">
                <div className="form-row">
                    <label htmlFor="item" >New Item</label>
                    <input type="text" id='item' />
                    <button className='btn'>Add</button>
                </div>
            </form>
            <div>
                <h2 className="header">Todo List</h2>
                <ul className='list'>
                <li>
                        <label >
                            <input type="checkbox" name="" id="" />
                            Item 1
                        </label>
                        <button className='btn btn-danger'>Delete</button>
                    </li>
                    <li>
                        <label >
                            <input type="checkbox" name="" id="" />
                            Item 1
                        </label>
                        <button className='btn btn-danger'>Delete</button>
                    </li>
                    <li>
                        <label >
                            <input type="checkbox" name="" id="" />
                            Item 1
                        </label>
                        <button className='btn btn-danger'>Delete</button>
                    </li>
                </ul>

                <label ></label>
            </div>
        </main>
    </>
)

export default App
