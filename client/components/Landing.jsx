import React, { useEffect, useState } from "react"
import { getUsers, newUser } from "../apis/bubble_tea"
import { useHistory } from "react-router-dom"
import { findBestMatch } from "string-similarity"

const Landing = () => {
  // let history = useHistory()
  // const [bestMatch, setBestMatch] = useState(null)
  // const [users, setUsers] = useState([])
  // const [userType, setUserType] = useState(null)
  // const [error, setError] = useState(null)

  // useEffect(() => {
  //   findUsers()
  // }, [])

  // const findUsers = () => {
  //   getUsers().then((u) => {
  //     setUsers(() => u.map((uu) => uu.username))
  //   })
  // }
  // const makeNewUser = (name) => {
  //   if (users.find((user) => user == name)) {
  //     setError("userAlreadyExists")
  //   } else {
  //     localStorage.setItem("user", name)
  //     newUser(name)
  //     history.push("/make")
  //   }
  // }

  // const clickHandler = (type) => {
  //   setUserType(() => type)
  //   setBestMatch(null)
  //   type == "newUser" && localStorage.removeItem("user")
  //   type == "existingUser" && setError(null)
  // }

  // const clickHandlerNotLocalStorage = () => {
  //   localStorage.removeItem("user")
  //   setUserType(() => "existingUserNotLocalStorage")
  // }

  // const submitHander = (e) => {
  //   e.preventDefault()
  //   setError(null)
  //   setBestMatch(null)
  //   if (userType == "newUser") {
  //     makeNewUser(e.target.username.value)
  //   } else if (
  //     userType == "existingUser" ||
  //     userType == "existingUserNotLocalStorage"
  //   ) {
  //     findMatch(e.target.username.value)
  //   }

  //   const findMatch = (usersname) => {
  //     const matches = findBestMatch(usersname, users)
  //     if (matches.bestMatch.rating == 1) {
  //       localStorage.setItem("user", usersname)
  //       history.push("/make")
  //     } else if (matches.bestMatch.rating < 0.5) {
  //       setError("noCloseMatch")
  //     } else {
  //       setBestMatch(users[matches.bestMatchIndex])
  //     }
  //   }
  // }

  // const successHandler = () => {
  //   localStorage.setItem("user", bestMatch)
  //   history.push("/make")
  // }

  // const localStorageSuccessHandler = () => {
  //   history.push("/make")
  // }

  // return (
  //   <>
  //     {console.log(userType)}
  //     <div>
  //       <button onClick={() => clickHandler("newUser")}>New User</button>
  //       <button onClick={() => clickHandler("existingUser")}>
  //         Existing User
  //       </button>
  //     </div>

  //     {userType != null ? (
  //       localStorage.getItem("user") == null ? (
  //         <form onSubmit={submitHander}>
  //           <input type="text" name="username" autoComplete="off"></input>
  //           <button>Go!</button>
  //         </form>
  //       ) : (
  //         <div>
  //           Are you {localStorage.getItem("user")}?
  //           <button onClick={localStorageSuccessHandler}>Yes!</button>
  //           <button onClick={clickHandlerNotLocalStorage}>No :(</button>
  //         </div>
  //       )
  //     ) : (
  //       <></>
  //     )}

  //     {bestMatch && (
  //       <div>
  //         Are you {bestMatch}?<button onClick={successHandler}>Yes!</button>
  //         <button onClick={() => setBestMatch(null)}>No :(</button>
  //       </div>
  //     )}

  //     {error == "noCloseMatch" && (
  //       <p>Sorry, we can't find a match to your name. Please try again!</p>
  //     )}

  //     {error == "userAlreadyExists" && <p>That name already exists!</p>}
  //   </>
  // )
  let history = useHistory()
  const [users, setUsers] = useState([])
  const [user, setUser] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    findUsers()
  }, [])

  const findUsers = () => {
    getUsers().then((u) => {
      setUsers(() => u.map((user) => user.username))
    })
  }

  const searchUsernames = (e) => {
    e.preventDefault()
    const searchValue = e.target.value.toLowerCase()
    let newUsernames = []
    const matches = findBestMatch(searchValue, users.map(u => u.toLowerCase()))
    console.log(searchValue, matches)
    if(matches.bestMatch.rating == 1){
      setUsers(() => [users[matches.bestMatchIndex]])
    } else if(matches.bestMatch.rating > 0 && matches.bestMatch.rating < 1 ){
      findUsers()
      let matchesArrayIndexes = []

    }
  }

  const successHandler = (e) => {
    e.preventDefault()
    let username = e.target.value
    localStorage.setItem("user", username)
    history.push("/make")
  }

  const submitHandler = (e) => {
    e.preventDefault()
    let errorMessage = null
    let uName = e.target.username.value
    users.map(u => {
      return (u.toLowerCase() == uName.toLowerCase() && (errorMessage = "Username already exists."))
    })
    errorMessage ? setError(errorMessage) : (newUser(uName), successHandler(uName))
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <label>New User:  <input type="text" name="username" autoComplete="off"></input></label>
        <button>Go!</button>
      </form>

      {error && <p>{error}</p>}

      <p>Existing User:</p>
      <form>
        <label>Search: <input type="text" name="search" onChange={searchUsernames}></input></label>
      </form>
      {/* <ul>
        {users.sort().map((username) => {
          return (
            <li key={username}>
              <button onClick={() => successHandler(username)}>{username}</button>
            </li>
          )
        })}
      </ul> */}


      <select name="usernames" size={users.length} onChange={successHandler}>
        {users.sort().map((username) => {
          return (
            <option key={username} value={username}>{username}</option>
          )
        })}
      </select>
    </>
  )
}

export default Landing
