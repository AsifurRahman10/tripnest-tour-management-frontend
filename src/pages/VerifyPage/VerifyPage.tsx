/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation, useNavigate } from 'react-router'
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
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import {
  useSendOtpMutation,
  useVerifyOTPMutation
} from '../../redux/features/auth/auth.api'
import { Spinner } from '../../components/shared/Spinner'

export const VerifyPage = () => {
  const location = useLocation()
  const email = location.state?.email
  const navigate = useNavigate()
  const [timeLeft, setTimeLeft] = useState(120)
  const [input, setInput] = useState('')
  const [sendOtp] = useSendOtpMutation()
  const [verifyOtp, { isLoading }] = useVerifyOTPMutation()
  const onsubmit = async () => {
    const verifyInfo = {
      email,
      otp: input
    }
    try {
      const result = await verifyOtp(verifyInfo).unwrap()
      if (result.success) {
        toast.success('Verification successful!')
        navigate('/')
      }
    } catch (error: any) {
      toast.error(error.data.message)
    }
  }
  const handleResend = async () => {
    await sendOtp({ email: email })
    toast.success('Verification code sent')
    setTimeLeft(120)
  }
  useEffect(() => {
    if (!email) {
      navigate('/login')
    }
  }, [email, navigate])

  useEffect(() => {
    if (timeLeft <= 0) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])
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
                type='button'
                variant='outline'
                size='xs'
                disabled={timeLeft > 0}
                onClick={handleResend}>
                <RefreshCwIcon />

                {timeLeft > 0
                  ? `Resend in ${Math.floor(timeLeft / 60)}:${String(timeLeft % 60).padStart(2, '0')}`
                  : 'Resend Code'}
              </Button>
            </div>
            <InputOTP
              value={input}
              onChange={setInput}
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
              onClick={onsubmit}
              className='w-full'>
              {isLoading ? <Spinner /> : 'Verify'}
            </Button>
          </Field>
        </CardFooter>
      </Card>
    </div>
  )
}
