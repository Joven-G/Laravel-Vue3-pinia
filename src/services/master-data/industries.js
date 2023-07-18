import axios from '@/utils/axios'

export async function getIndustries({ page = 1, limit = 10 }) {
  try {
    const res = await axios.get(`v1/industries?page=${page}&limit=${limit}`)
    
    return res.data
  } catch(err) {
    return Promise.reject(err)
  }
}

export async function createNewIndustries({ name }) {
  try {
    const res = await axios.post(`v1/industries`, { name })
    
    return res.data
  } catch(err) {
    return Promise.reject(err)
  }
}
export async function updateIndustries(industryId, { name }) {
  try {
    const res = await axios.patch(`v1/industries/${industryId}`, { name })
    
    return res.data
  } catch(err) {
    return Promise.reject(err)
  }
}

export async function deleteIndustry(industryId) {
  try {
    await axios.delete(`v1/industries/${industryId}`)
    zz
    
    return true
  } catch(err) {
    return Promise.reject(err)
  }
}
