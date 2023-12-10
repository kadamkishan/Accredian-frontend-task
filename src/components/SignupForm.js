import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfPassword, setShowConfPassword] = useState(false);

    const[accountType,setAccountType]=useState("student");

    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }));
    }

    function submitHandler(event) {
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            toast.error('Password do not match');
            return;
        }

        setIsLoggedIn(true);
        toast.success('Account Created');

        const accountData = {
            ...formData,
        };

        const finalData={
            ...accountData,
            accountType
        }
        console.log(finalData);
        navigate('/dashboard');
    }

    return (
        <div >
            {/* Student-instructor tab */}
            <div className='bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
                <button className={`${accountType==="student" ?
                "bg-richblack-900 text-richblack-5":
                "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all
                duration-200`}
                onClick={()=> setAccountType("student")}>
                    Student
                </button>

                <button className={`${accountType==="instructor" ?
                "bg-richblack-900 text-richblack-5":
                "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all
                duration-200`}
                onClick={()=> setAccountType("instructor")}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}>
                {/* first name and lastname */}
                <div className='flex justify-between mt-[10px]'>
                    <label >
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            First Name <sup>*</sup>
                        </p>
                        <input
                            required
                            type='text'
                            name='firstname'
                            onChange={changeHandler}
                            placeholder='Enter First Name'
                            value={formData.firstname}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>

                    <label>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Last Name <sup>*</sup>
                        </p>
                        <input
                            required
                            type='text'
                            name='lastname'
                            onChange={changeHandler}
                            placeholder='Enter Last Name'
                            value={formData.lastname}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>
                </div>

                {/* email address */}
                <div className='mt-[10px]'>
                    <label>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 
                        leading-[1.375rem]'>
                            Email Address <sup>*</sup>
                        </p>
                        <input
                            required
                            type='email'
                            name='email'
                            onChange={changeHandler}
                            placeholder='Enter Email Address'
                            value={formData.email}
                            className='bg-richblack-800 rounded-[0.5rem] 
                            text-richblack-5 w-full p-[12px]'
                        />
                    </label>
                </div>
               

                {/* create and confirm password */}
                <div className='flex justify-between mt-[10px]'>
                    <label className='relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Create Password <sup>*</sup>
                        </p>
                        <input
                            required
                            name='password'
                            type={showPassword ? 'text' : 'password'}
                            onChange={changeHandler}
                            placeholder='Enter Password'
                            value={formData.password}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                        <span className='absolute right-3 top-[40px] cursor-pointer' onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
                        </span>
                    </label>

                    <label className='relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Confirm Password <sup>*</sup>
                        </p>
                        <input
                            required
                            name='confirmPassword'
                            type={showConfPassword ? 'text' : 'password'}
                            onChange={changeHandler}
                            placeholder='Confirm Password'
                            value={formData.confirmPassword}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                        <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setShowConfPassword((prev) => !prev)}>
                            {showConfPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
                        </span>
                    </label>
                </div>

                <button className='bg-yellow-500 w-full rounded-[8px] font-medium text-richblack-900
            px-[12px] py-[8px] mt-6'>Create Account</button>
            </form>
        </div>
    );
};

export default SignupForm;