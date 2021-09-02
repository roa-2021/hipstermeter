import request from 'superagent'
const creatorUrl = '/api/about/'

export function getCreators () {
  return request
    .get(creatorUrl)
    .then(response => response.body)
}

// export function getWidget (id) {
//   return request
//     .get(`${widgetUrl}${id}`)
//     .then(response => response.body)
// }

// export function addWidget (body) {
//   return request
//     .post(widgetUrl)
//     .send(body)
//     .then(response => response.body)
// }
