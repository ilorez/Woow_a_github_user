import "handyscript"; // u can use it directly
import { useEffect, useState } from "react";
import User from './User'

// explicitly use the HOperators, HashMap
// import { toWords } from "handyscript"

function App() {
  const [search, setSearch] = useState('ilorez')
  const [user, setUser] = useState({})
  useEffect(() => {
    fetch(`https://api.github.com/users/${search}`)
      .then((res) => res.json())
      .then((data) => setUser(data))


  }, [search])
  const handleSearch = (e) => {
    e.preventDefault()
    let data = Object.fromEntries(new FormData(e.currentTarget))
    setSearch(data.search)
  }
  return (
    <div>
      <form onSubmit={(e) => handleSearch(e)} className="w-full flex items-center justify-center">

        <div className="flex gap-4 w-fit">
          <input type="text" name='search' className="border border-gray-400 " placeholder="username" />
          <div>
            <button type="submit" className="bg-blue-600 px-1 py-1">Search</button>
          </div>
        </div>
      </form>
      <User avatar_url={user.avatar_url} bio={user.bio} login={user.login} name={user.name} />
    </div>
  )
}

export default App
