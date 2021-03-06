import SearchBar from './containers/SearchBar'
import DataView from './containers/DataView'

function App() {
  return (
    <div>
      <header className='bg-white'>
        <SearchBar />
      </header>
      <main>
        <DataView />
      </main>
    </div>
  )
}

export default App
