import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import {useHttp} from "../hooks/http.hook";

type Inputs = {
    email: string,
    password: string,
    passwordConfirm: string,
    stayLoggedIn: boolean
};

const AuthForm = () => {
    const {loading, error, request} = useHttp()
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            const res = await request('/api/auth/register', 'POST', {
                email: data.email,
                password: data.password,
                stayLoggedIn: data.stayLoggedIn
            })

            console.log('Data', res)
        } catch (e) {

        }
    };

    console.log(watch('email')) // watch input value by passing the name of it

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <div>
                <label htmlFor='passwordConfirm'>Confirm password:</label>
                <input type='password' id='passwordConfirm' placeholder='Confirm your password' {...register('passwordConfirm', { required: true, minLength: 6 })} />
                {errors.passwordConfirm && <span>This field is required</span>}
            </div>
            <div>
                <input type='checkbox' id='stayLoggedIn' {...register('stayLoggedIn')} />
                <label htmlFor='stayLoggedIn'>Stay logged in?</label>
            </div>
            <input value='Register' type='submit' disabled={loading} />
        </form>
    );
}

export default AuthForm