import request from '@/utils/request'


export const getCate = (params: any) => {
  return request({
    url: '/index/getCate',
    method: 'post',
    data: {
      params
    }
  })
}

export const login = (needID: number) => {
  return request({
    url: '/login/checkUser',
    method: 'post',
    data: {
      needID
    }
  })
}
