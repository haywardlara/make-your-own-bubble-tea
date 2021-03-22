import request from 'superagent'

const rootUrl = '/api/v1/bubble_tea'

export function getBubbleTea () {
  return request.get(rootUrl)
    .then(res => {
      return res.body
    })
}
