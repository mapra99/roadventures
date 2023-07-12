import z from 'zod'

export interface SignUpParams {
  email: string
  password: string
  password_confirmation: string
}

export const SignUpErrorsSchema = z.object({
  errors: z.object({
    email: z.array(z.string()).optional(),
    password: z.array(z.string()).optional(),
    password_confirmation: z.array(z.string()).optional()
  })
})

export type SignUpErrors = z.infer<typeof SignUpErrorsSchema>

export interface LoginParams {
  email: string;
  pasword: string;
}

export const LoginErrorsSchema = z.object({
  error: z.string()
})

export type LoginErrors = z.infer<typeof LoginErrorsSchema>
