import React, {useContext, useEffect} from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import {useHttp} from "../hooks/http.hook";
import {EditUserCardFormInputs, EditUserCardProps} from "../types";
import {AuthContext} from "../context/AuthContext";


const EditUserCard = ({data, changeMode}: EditUserCardProps) => {

    const {token, callPopup} = useContext(AuthContext)
    const user = data.user
    const preloadedValues = {
        companySize: user.companySize,
        phoneNumber: user.phoneNumber,
        position: user.position,
        address: user.address,
        location: user.location,
        email: user.email
    }
    console.log(preloadedValues)
    const {loading, error, request, clearError} = useHttp()
    const { register, handleSubmit, watch, formState: { errors } } = useForm<EditUserCardFormInputs>({
        defaultValues: preloadedValues
    });

    useEffect(() => {
        if (error != null) {
            callPopup(error, 'error')
            clearError()
        }
    }, [error, clearError, callPopup])

    const onSubmit: SubmitHandler<EditUserCardFormInputs> = async (data) => {
        try {
            const type = user.companyName ? 'company' : 'user'
            const formData = new FormData()

            console.log('TOKEN:', token)
            // @ts-ignore
            formData.append('token', token)
            formData.append('type', type)
            if (data.companySize){
                formData.append('companySize', data.companySize)
            }
            if (data.email){
                formData.append('email', data.email)
            }
            if (data.password){
                formData.append('password', data.password)
            }
            if (data.confirmPassword){
                formData.append('confirmPassword', data.confirmPassword)
            }
            if (data.location){
                formData.append('location', data.location)
            }
            if (data.address){
                formData.append('address', data.address)
            }
            if (data.phoneNumber){
                formData.append('phoneNumber', data.phoneNumber)
            }
            if (data.avatar[0]){
                formData.append('avatar', data.avatar[0])
            }
            if (data.position){
                formData.append('position', data.position)
            }

            console.log(formData.get('avatar'))

            const res = await fetch('/api/profile/edit', {
                method: 'POST',
                body: formData,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(
                (res) => {
                    console.log(res)
                    if (res.status === 201) {
                        callPopup('Your data has been saved', 'success')
                    } else {
                        callPopup('Data was not saved', 'error')
                    }
                }
            )
        } catch (e) {
            callPopup('Data was not saved', 'error')
        }
    };

    return (
        <React.Fragment>
            <h1 className='pl-10 mt-10 justify-center mb-6 font-logo text-black text-2xl'>Edit profile:</h1>
            <form className='edit-form font-logo' encType='multipart/form-data' onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-3 gap-5'>
                    <div>
                        <label htmlFor='email'>New e-mail:</label>
                        <input type='email' id='email' placeholder='Enter new e-mail ...' {...register('email', {required: true, pattern: /^\S+@\S+$/i})} />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    { user.companyName &&
                        <div>
                            <label htmlFor='companySize'>Company size:</label>
                            <select id='companySize' {...register('companySize', {required: true})}>
                                <option>1-10</option>
                                <option>11-50</option>
                                <option>51-100</option>
                                <option>101-500</option>
                                <option>501-1000</option>
                            </select>
                            {errors.companySize && <span>This field is required</span>}
                        </div>
                    }
                    { user.companyName &&
                        <div>
                            <label htmlFor='location'>Enter your coordinates:</label>
                            <input id='location' placeholder='Enter coordinates ...' {...register('location')} />
                        </div>
                    }
                    { user.companyName &&
                        <div>
                            <label htmlFor='address'>Enter company address:</label>
                            <input id='address' placeholder='Enter company address ...' {...register('address')} />
                        </div>
                    }
                    { user.role === 'doctor' &&
                        <div>
                            <label htmlFor='position'>Enter your position:</label>
                            <input id='position' placeholder='Enter position ...' {...register('position')} />
                        </div>
                    }
                    <div>
                        <label htmlFor='phoneNumber'>Phone number:</label>
                        <input id='phoneNumber' placeholder='Enter your phone number ...' {...register('phoneNumber')} />
                    </div>
                    <div>
                        <label htmlFor='avatar'>Avatar:</label>
                        <input type='file' id='avatar' placeholder='Choose your avatar' {...register('avatar')} />
                    </div>
                    <div>
                        <label htmlFor='password'>New password:</label>
                        <input type='password' id='password' placeholder='Enter new password' {...register('password', { minLength: 6 })} />
                        {errors.password && <span>Minimum 6 symbols</span>}
                    </div>
                    <div>
                        <label htmlFor='confirmPassword'>Confirm password:</label>
                        <input type='password' id='confirmPassword' placeholder='Confirm new password' {...register('confirmPassword', { minLength: 6 })} />
                        {errors.password && <span>Minimum 6 symbols</span>}
                    </div>
                </div>
                <div className='flex flex-row gap-12 px-12'>
                    <button onClick={() => {
                        changeMode('view')
                    }}>Go back</button>
                    <button type='submit' disabled={loading}>Save changes</button>
                </div>
            </form>
        </React.Fragment>
    );
}

export default EditUserCard