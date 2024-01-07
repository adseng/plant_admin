import axios from 'axios'

const api = axios.create({
  baseURL: 'http://127.0.0.1:5000'
})

export function addPlant(plant) {
  return api.post('/plants/add', plant)
}

export function getAllPlants() {
  return api.get('/plants')
}

// 模糊查询（条件是哪个字段有值就作为其中一个模糊查询条件）
export function searchUsersLikely(plant) {
  return api.post('/users/search', plant)
}

export function deletePlant(id) {
  return api.delete(`/plants/delete/${id}`)
}

export function updatePlantsById(id, plants) {
  return api.put(`/plants/update/${id}`, plants)
}

// 模糊查询（条件是哪个字段有值就作为其中一个模糊查询条件）
export function searchPlantLikely(plant) {
  return api.post('/plants/search', plant)
}

export function getUserAll() {
  return api.get('/users')
}

export function addUser(user) {
  return api.post('/adduser', user)
}

export function updateUserById(id, user) {
  return api.put(`/updateuserbyid/${id}`, user)
}

export function deleteUserById(id) {
  return api.delete(`/deleteuserbyid/${id}`)
}

export function selectUserByAccount(account) {
  return api.get(`/selectuserbyaccount/${account}`)
}
