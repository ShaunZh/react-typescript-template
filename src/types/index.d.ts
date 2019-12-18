// window.location 信息
interface Location {
  search?: string
  hash?: string
  pathname: string
}

interface HttpResponse {
  code: number
  message: string
  result?: object
}
