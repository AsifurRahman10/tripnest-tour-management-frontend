/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import z from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { useLoginMutation } from '../../../redux/features/auth/auth.api'
import { toast } from 'sonner'
import { Spinner } from '../../../components/shared/Spinner'
import { useNavigate } from 'react-router'

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address.'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters.')
    .max(100, 'Password must be at most 100 characters.')
})

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<'form'>) {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const [login, { isLoading }] = useLoginMutation()
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    try {
      const result = await login(data).unwrap()
      if (result.success) {
        toast.success('Login successful!')
        navigate('/')
      }
    } catch (error: any) {
      const message = error?.data?.message || 'Something went wrong'

      toast.error(message)

      if (message === 'User is not verified') {
        navigate('/verify', { state: { email: data.email } })
      }
    }
  }
  return (
    <form
      className={cn('flex flex-col gap-6', className)}
      {...props}
      onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <div className='flex flex-col items-center gap-1 text-center'>
          <h1 className='text-2xl font-bold'>Login to your account</h1>
          <p className='text-sm text-balance text-muted-foreground whitespace-nowrap'>
            Enter your email and password below to login to your account
          </p>
        </div>
        <Controller
          name='email'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor='email'>Email</FieldLabel>

              <Input
                {...field}
                id='email'
                type='email'
                placeholder='m@example.com'
                className='bg-background'
                aria-invalid={fieldState.invalid}
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name='password'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <div className='flex items-center'>
                <FieldLabel htmlFor='password'>Password</FieldLabel>

                <a
                  href='#'
                  className='ml-auto text-sm underline-offset-4 hover:underline'>
                  Forgot your password?
                </a>
              </div>

              <div className='relative'>
                <Input
                  {...field}
                  id='password'
                  type={showPassword ? 'text' : 'password'}
                  className='bg-background pr-10'
                  aria-invalid={fieldState.invalid}
                />

                <Button
                  type='button'
                  variant='ghost'
                  size='icon'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-2 top-1 h-6 w-6'>
                  {showPassword ? (
                    <EyeOff className='h-3 w-3' />
                  ) : (
                    <Eye className='h-3 w-3' />
                  )}
                </Button>
              </div>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Field>
          <Button type='submit'>{isLoading ? <Spinner /> : 'Login'}</Button>
        </Field>
        {/* <FieldSeparator>Or continue with</FieldSeparator>
        <Field>
          <Button
            variant='outline'
            type='button'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'>
              <path
                d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'
                fill='currentColor'
              />
            </svg>
            Login with GitHub
          </Button>
          <FieldDescription className='text-center'>
            Don&apos;t have an account?{' '}
            <a
              href='#'
              className='underline underline-offset-4'>
              Sign up
            </a>
          </FieldDescription>
        </Field> */}
        <FieldDescription className='text-center'>
          Don&apos;t have an account?{' '}
          <span
            onClick={() => navigate('/register')}
            className='cursor-pointer underline underline-offset-4'>
            Sign up
          </span>
        </FieldDescription>
      </FieldGroup>
    </form>
  )
}
