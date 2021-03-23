import React, { useEffect, useState } from "react"
import { getUsers, newUser } from "../apis/bubble_tea"
import { useHistory } from "react-router-dom"
import { findBestMatch } from "string-similarity"

const Landing = () => {
  let history = useHistory()
  const [bestMatch, setBestMatch] = useState(null)
  const [users, setUsers] = useState([])
  const [userType, setUserType] = useState(null)
  const [error, setError] = useState(null)

  const findUsers = () => {
    getUsers().then((u) => {
      setUsers(() => u.map((uu) => uu.username))
    })
  }

  useEffect(() => {
    findUsers()
  }, [])

  const clickHandler = (type) => {
    setUserType(() => type)
    setBestMatch(null)
    type == "newUser" && localStorage.removeItem("user")
    type == "existingUser" && setError(null)
  }

  const clickHandlerNotLocalStorage = () => {
    localStorage.removeItem("user")
    setUserType(() => "existingUserNotLocalStorage")
  }

  const makeNewUser = (name) => {
    if(users.find(user => user == name)){
      setError("userAlreadyExists")
    } else {
      localStorage.setItem("user", name)
      newUser(name)
      history.push("/make")
    }
  }

  const submitHander = (e) => {
    e.preventDefault()
    setError(null)
    setBestMatch(null)
    if (userType == "newUser") {
      makeNewUser(e.target.username.value)
    } else if (userType == "existingUser" || userType == "existingUserNotLocalStorage") {
      const matches = findBestMatch(e.target.username.value, users)
      console.log(matches.bestMatch.rating)
      if (matches.bestMatch.rating == 1) {
        localStorage.setItem("user", e.target.username.value)
        history.push("/make")
      } else if(matches.bestMatch.rating < 0.5){
        setError("noCloseMatch")
      }
      else {
        setBestMatch(users[matches.bestMatchIndex])
      }
    }
  }

  const successHandler = () => {
    localStorage.setItem("user", bestMatch)
    history.push("/make")
  }

  const localStorageSuccessHandler = () => {
    history.push("/make")
  }

  return (
    <>
     {console.log(userType)}
      <div>
        <button onClick={() => clickHandler("newUser")}>New User</button>
        <button onClick={() => clickHandler("existingUser")}>
          Existing User
        </button>
      </div>

      {userType != null ? localStorage.getItem("user") == null ? (
        <form onSubmit={submitHander}>
          <input type="text" name="username" autoComplete="off"></input>
          <button>Go!</button>
        </form>
      ) : (
        <div>
          Are you {localStorage.getItem("user")}?
          <button onClick={localStorageSuccessHandler}>Yes!</button>
          <button onClick={clickHandlerNotLocalStorage}>No :(</button>
        </div>
      ) : <></>}

      {bestMatch && (
        <div>
          Are you {bestMatch}?<button onClick={successHandler}>Yes!</button>
          <button onClick={() => setBestMatch(null)}>No :(</button>
        </div>
      )}
      {error == "noCloseMatch" && <p>No match to existing user! Please try again!</p>}
      {error == "userAlreadyExists" && <p>That username already exists!</p> }
    </>
  )
}

export default Landing
