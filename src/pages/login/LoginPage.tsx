import LoginImage from '@/assets/image/login.jpg'

import { LoginForm } from '@/pages/login/component/login-form'
import { Logo } from '../../assets/logo/Logo'

export default function LoginPage() {
  return (
    <div className='grid min-h-svh lg:grid-cols-2'>
      <div className='relative hidden bg-muted lg:block'>
        <img
          src={LoginImage}
          alt='login image'
          className='absolute inset-0 h-full w-full object-cover '
        />
      </div>
      <div className='flex flex-col gap-4 p-6 md:p-10'>
        <div className='flex justify-center md:justify-start items-center gap-2'>
          <Logo /> <span className='font-semibold text-primary'>TripNest</span>
        </div>
        <div className='flex flex-1 items-center justify-center'>
          <div className='w-full max-w-xs'>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}
