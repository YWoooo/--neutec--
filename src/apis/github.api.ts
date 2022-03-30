import { axiosInstance } from '@/apis/index'
import { Repo } from '@/types/index'

export default {
  async repos(username: string, params?: {
    per_page?: number,
    page?: number
  }): Promise<Repo[]> {
    const per_page = params?.per_page ?? 6
    const page = params?.page ?? 1
    
    const res = await axiosInstance.get(`https://api.github.com/users/${username}/repos`, {
      params: {
        per_page,
        page
      }
    })
    return res.data
  }
}
