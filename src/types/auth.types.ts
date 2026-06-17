export interface IRegisterInfo {
  name: string
  email: string
  password: string
}

export interface IRegisterResponse {
  name: string
  email: string
  password: string
  isActive: string
  role: string
  auths: Auth[]
  _id: string
  createdAt: string
  updatedAt: string
}

export interface Auth {
  provider: string
  providerID: string
}

export interface IUser {
  _id: string
  name: string
  email: string
  phone: string
  address: string
  isActive: string
  isVerified: boolean
  role: string
  auths: Auth[]
  createdAt: string
  updatedAt: string
}

export interface ILoginResponse {
  accessToken: string
  refreshToken: string
  user: IUser
}

export interface ILoginInfo {
  email: string
  password: string
}
