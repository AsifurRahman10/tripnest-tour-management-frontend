import { useLocation } from 'react-router'
import loginImage from '@/assets/image/login.jpg'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '../../components/ui/card'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot
} from '../../components/ui/input-otp'
import { Field, FieldLabel } from '../../components/ui/field'
import { Button } from '../../components/ui/button'
import { RefreshCwIcon } from 'lucide-react'

export const VerifyPage = () => {
  const location = useLocation()
  const email = location.state?.email
  return (
    <div
      className='w-screen h-screen flex items-center justify-center bg-cover bg-center'
      style={{ backgroundImage: `url(${loginImage})` }}>
      <Card className='w-full max-w-xl bg-transparent backdrop-blur-sm'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold'>
            Verify your login
          </CardTitle>
          <CardDescription className='text-black text-md font-medium'>
            Enter the verification code we sent to your email address
            <span className='font-medium'>{email}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Field>
            <div className='flex items-center justify-between'>
              <FieldLabel htmlFor='otp-verification'>
                Verification code
              </FieldLabel>
              <Button
                variant='outline'
                size='xs'>
                <RefreshCwIcon />
                Resend Code
              </Button>
            </div>
            <InputOTP
              maxLength={6}
              id='otp-verification'
              required>
              <InputOTPGroup className='*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl '>
                <InputOTPSlot
                  index={0}
                  className='border-secondary'
                />
                <InputOTPSlot
                  index={1}
                  className='border-secondary'
                />
                <InputOTPSlot
                  index={2}
                  className='border-secondary'
                />
              </InputOTPGroup>
              <InputOTPSeparator className='mx-2' />
              <InputOTPGroup className='*:data-[slot=input-otp-slot]:h-12 *:data-[slot=input-otp-slot]:w-11 *:data-[slot=input-otp-slot]:text-xl'>
                <InputOTPSlot
                  index={3}
                  className='border-secondary'
                />
                <InputOTPSlot
                  index={4}
                  className='border-secondary'
                />
                <InputOTPSlot
                  index={5}
                  className='border-secondary'
                />
              </InputOTPGroup>
            </InputOTP>
          </Field>
        </CardContent>
        <CardFooter>
          <Field>
            <Button
              type='submit'
              className='w-full'>
              Verify
            </Button>
          </Field>
        </CardFooter>
      </Card>
    </div>
  )
}
