import request from 'superagent'

const rootUrl = '/api/v1/bubble_tea'

export function getBubbleTea () {
  return request.get(rootUrl)
    .then(res => {
      return res.body
    })
}

export function getUsers () {
  return request.get(rootUrl + "/users")
    .then(res => {
      return res.body
    })
}

export function newUser (username) {
  return request
    .post(rootUrl + "/users")
    .send({username : username})
    .then(res => {
      return res.body
    })
    
}
