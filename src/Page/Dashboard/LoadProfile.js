import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const LoadProfile = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [user] = useAuthState();

    const imgStorageKey = 'ab4ebcd5f1e4f3b6eb095aa66b95920e';

    const navigate = useNavigate();

    const onSubmit = data => {
        const img = data.image[0];
        const formData = new FormData();
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        formData.append('image', img);
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            if(result.success){
                const image = result.data.url;
                const user ={
                    email: user.email,
                    name: data.yourName,
                    phoneNumber: data.phoneNumber,
                    education: data.education,
                    img: image
                }

                const url = `http://localhost:5000/myprofile`;
                fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(user),
                    headers: {
                        'content-type': 'application/json',
                    },
           
                })
                .then(res=>res.json())
                    .then(result => {
                    console.log(result);
                    if(result){
                        navigate('/dashboard')
                    }
                })
            }
        })
    }
    return (
        <div className='flex h-screen justify-center items-center lg:my-40'>
        <div className="card w-9/12 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-4xl font-bold text-lime-300 mb-5">Update your profile</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Email Address"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'provide a valid email'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className='level-text-alt text-rose-600'>{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className='level-text-alt text-rose-600'>{errors.email.message}</span>}
                    </label>
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input type="text" placeholder="Your name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("yourName", {
                            required: {
                                value: true,
                                message: 'Product name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.yourName?.type === 'required' && <span className='level-text-alt text-rose-600'>{errors.yourName.message}</span>}
                        </label>
                        <label className="label">
                        <span className="label-text">Phone Number</span>
                    </label>
                    <input
                        type="text"
                        placeholder="phone number"
                        className="input input-bordered w-full max-w-xs"
                        {...register("phoneNumber", {
                            required: {
                                value: true,
                                message: 'phone number is Required'
                            }
                        })}
                    />

                    <label className="label">
                        {errors.phoneNumber?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phoneNumber.message}</span>}
                    </label>
                    <label className="label">
                        <span className="label-text">Education</span>
                    </label>
                    <input
                        type="text"
                        placeholder="your education"
                        className="input input-bordered w-full max-w-xs"
                        {...register("education", {
                            required: {
                                value: true,
                                message: 'education is Required'
                            }
                        })}
                    />

                    <label className="label">
                        {errors.education?.type === 'required' && <span className="label-text-alt text-red-500">{errors.education.message}</span>}
                    </label>
                    <label className="label">
                        <span className="label-text">Picture</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />

                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                    </label>
                    <input className='btn mt-8' type="submit" value='Update' />
                </form>
            </div>
        </div>
    </div>
    );
};

export default LoadProfile;