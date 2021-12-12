import React, {useEffect} from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import {useHttp} from "../hooks/http.hook";
import {AuthFormInputs, AuthFormProps} from "../types";

const AuthForm = ({callPopup}: AuthFormProps) => {
    const {loading, error, request, clearError} = useHttp()
    const { register, handleSubmit, watch, formState: { errors } } = useForm<AuthFormInputs>();

    useEffect(() => {
        if (error != null) {
            callPopup(error, 'error')
            clearError()
        }
    }, [error, clearError, callPopup])

    const onSubmit: SubmitHandler<AuthFormInputs> = async (data) => {
        try {
            const res = await request('/api/auth/login', 'POST', {
                email: data.email,
                password: data.password,
            })
            callPopup(res.message, 'success')

        } catch (e) {

        }
    };

    return (
        <React.Fragment>
            <h1 className='justify-center mb-6 font-logo text-black text-2xl'>Log In:</h1>
            <form className='auth-form font-logo' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor='email'>E-mail:</label>
                    <input type='email' id='email' placeholder='Enter your e-mail ...' {...register('email', {required: true, pattern: /^\S+@\S+$/i})} />
                    {errors.email && <span>This field is required</span>}
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' id='password' placeholder='Enter your password' {...register('password', { required: true, minLength: 6 })} />
                    {errors.password && <span>This field is required</span>}
                </div>
                <button type='submit' disabled={loading}>Log In</button>
            </form>
        </React.Fragment>
    );
}

export default AuthForm