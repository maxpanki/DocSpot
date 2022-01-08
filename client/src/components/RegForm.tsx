import React, {useEffect, useRef} from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import {useHttp} from "../hooks/http.hook";
import {RegFormInputs, RegFormProps} from "../types";

const RegForm = ({callPopup}:RegFormProps) => {
    const { loading, error, request, clearError } = useHttp()
    const { register, handleSubmit, watch, formState: { errors } } = useForm<RegFormInputs>();

    useEffect(() => {
        if (error != null) {
            callPopup(error, 'error')
            clearError()
        }
    }, [error, clearError, callPopup])

    const onSubmit: SubmitHandler<RegFormInputs> = async (data) => {
        try {
            if (data.role === 'Company') {
                const res = await request('/api/auth/register', 'POST', {
                    email: data.email,
                    password: data.password,
                    role: data.role,
                    companyName: data.name,
                    companySize: data.companySize
                })
                callPopup(res.message, 'success')
            } else {
                const res = await request('/api/auth/register', 'POST', {
                    email: data.email,
                    password: data.password,
                    role: data.role,
                    personName: data.name,
                    personSecondName: data.secondName
                })
                callPopup(res.message, 'success')
            }
        } catch (e) {

        }
    };

    const isCompanyFieldsDisplayed = () => {
        const role = watch().role

        return role === 'Company';
    }

    const password = useRef({});
    password.current = watch("password", "");

    return (
        <React.Fragment>
            <h1 className='justify-center mb-6 font-logo text-white text-2xl'>Register:</h1>
            <form className='font-logo reg-form' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor='role'>Role:</label>
                    <select id='role' {...register('role')}>
                        <option>Patient</option>
                        <option>Doctor</option>
                        <option>Company</option>
                    </select>
                    {errors.role && <span>This field is required</span>}
                </div>
                {
                    isCompanyFieldsDisplayed() && (
                        <React.Fragment>
                            <div>
                                <label htmlFor='name'>Company name:</label>
                                <input id='name' placeholder='Enter your company name' {...register('name', {required: true})} />
                                {errors.name && <span>This field is required</span>}
                            </div>
                            <div>
                                <label htmlFor='companySize'>Choose your company size:</label>
                                <select id='companySize' {...register('companySize', {required: true})}>
                                    <option>1-10</option>
                                    <option>11-50</option>
                                    <option>51-100</option>
                                    <option>101-500</option>
                                    <option>501-1000</option>
                                </select>
                                {errors.companySize && <span>This field is required</span>}
                            </div>
                        </React.Fragment>
                    )
                }
                {
                    !isCompanyFieldsDisplayed() && (
                        <React.Fragment>
                            <div>
                                <label htmlFor='name'>Name:</label>
                                <input id='name' placeholder='Enter your name' {...register('name', {required: true})} />
                                {errors.name && <span>This field is required</span>}
                            </div>
                            <div>
                                <label htmlFor='secondName'>Second name:</label>
                                <input id='secondName' placeholder='Enter your second name' {...register('secondName', {required: true})} />
                                {errors.secondName && <span>This field is required</span>}
                            </div>
                        </React.Fragment>
                    )
                }
                <div>
                    <label htmlFor='email'>E-mail:</label>
                    <input type='email' id='email' placeholder='Enter your e-mail' {...register('email', {required: true, pattern: /^\S+@\S+$/i})} />
                    {errors.email && <span>This field is required</span>}
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' id='password' placeholder='Enter your password' {...register('password', { required: true, minLength: 6 })} />
                    {errors.password && <span>This field is required</span>}
                </div>
                <div>
                    <label htmlFor='passwordConfirm'>Confirm password:</label>
                    <input type='password' id='passwordConfirm' placeholder='Confirm your password'
                           {...register('passwordConfirm', { required: true, minLength: 6, validate: value => value === password.current || "The passwords do not match" })} />
                    {errors.passwordConfirm && <span>{errors.passwordConfirm.message}</span>}
                </div>
                <button type='submit' disabled={loading}>Register</button>
            </form>
        </React.Fragment>
    );
}

export default RegForm