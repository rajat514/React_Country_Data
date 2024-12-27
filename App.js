import CountriesContainer from "./components/CountriesCountainer"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import SelectMenu from "./components/SelectMenu"

import "./components/style.css"

const App = () => {
    return (
        <>
            <Header />
            <main>
                <div className="search-filter-container">
                    <SearchBar />
                    <SelectMenu />
                </div>
                <CountriesContainer />
            </main>
        </>
    )
}


export default App