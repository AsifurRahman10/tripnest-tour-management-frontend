import { SignupForm } from './component/signup-form'
import RegisterImage from '@/assets/image/register.jpg'
import { Logo } from '../../assets/logo/Logo'

export default function RegisterPage() {
  return (
    <div className='grid min-h-svh lg:grid-cols-2'>
      <div className='relative hidden bg-muted lg:block'>
        <img
          src={RegisterImage}
          alt='Image'
          className='absolute inset-0 h-full w-full object-cover'
        />
      </div>
      <div className='flex flex-col gap-4 p-6 md:p-10'>
        <div className='flex justify-center gap-2 md:justify-start'>
          <Logo /> <span className='font-semibold text-primary'>TripNest</span>
        </div>
        <div className='flex flex-1 items-center justify-center'>
          <div className='w-full max-w-xs'>
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  )
}
