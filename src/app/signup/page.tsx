'use client';

import Input from '@/components/Input';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaFacebook, FaGoogle, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const Signup = () => {
  const router = useRouter();

type FormikValues = {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  phonenumber: string | number;
  confirmpassword: string;
  [key: string]: string | number; 
};


  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    firstname: Yup.string().required('First name is required'),
    lastname: Yup.string().required('Last name is required'),
    phonenumber: Yup.number().min(10, 'Phone number must be at least 10 digits').required('Phone number is required'),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Confirm password is required'),
  });

  const formik = useFormik<FormikValues>({
    initialValues: {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      phonenumber: '',
      confirmpassword: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log('Form values: ', values);
      try {
        // send request here
        console.log('Signup successful');
      } catch (err) {
        console.log('Signup error: ', err);
      }
    },
  });

  return (
    <div className="flex justify-between h-[100dvh]">
      {/* Left image panel */}
      <div className="md:flex hidden w-full h-full md:w-1/2">
        <img
          src="https://t3.ftcdn.net/jpg/02/32/24/48/360_F_232244890_8CJ7VJAU79lhGHg8D19Ch9JrfUCYOn7M.jpg"
          alt="Sign Image"
          className="h-[100%] w-full"
        />
      </div>

      {/* Right form panel */}
      <div className="md:w-1/2 w-full px-3 py-1 h-[100dvh] overflow-y-auto">
        <div className="flex items-center gap-1">
          <img
            src="https://png.pngtree.com/png-vector/20190225/ourmid/pngtree-circuit-logo-template-vector-png-image_704226.jpg"
            alt="Logo"
            className="h-16 w-16"
          />
          <h1>Hope Ui</h1>
        </div>

        <div className="flex flex-col gap-4 justify-center lg:px-10 sm:px-4 px-2">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-[24px]">Sign Up</h1>
            <p className="text-gray-400">Create your Hope Ui Account</p>
          </div>

          <form className="flex flex-col gap-3" onSubmit={formik.handleSubmit}>
            {/* First + Last name */}
            <div className="flex items-center w-full gap-4 sm:flex-row flex-col">
              {['firstname', 'lastname'].map((field) => (
                <div key={field} className="flex flex-col gap-2 w-full">
                  <label>{field === 'firstname' ? 'First Name' : 'Last Name'}</label>
                  <Input
                    placeholder={`Enter your ${field === 'firstname' ? 'First' : 'Last'} name`}
                    id={field}
                    type="text"
                    name={field}
                    value={formik.values[field]}
                    onChangeFun={formik.handleChange}
                  />
                  {formik.touched[field] && formik.errors[field] && (
                    <div className="text-red-500 text-sm mb-3">{formik.errors[field]}</div>
                  )}
                </div>
              ))}
            </div>

            {/* Email + Phone */}
            <div className="flex items-center w-full gap-4 sm:flex-row flex-col">
              <div className="flex flex-col gap-2 w-full">
                <label>Email</label>
                <Input
                  placeholder="Enter your Email"
                  id="email"
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChangeFun={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500 text-sm mb-3">{formik.errors.email}</div>
                )}
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label>Phone Number</label>
                <Input
                  placeholder="Enter your Phone Number"
                  id="phonenumber"
                  type="number"
                  name="phonenumber"
                  value={formik.values.phonenumber}
                  onChangeFun={formik.handleChange}
                />
                {formik.touched.phonenumber && formik.errors.phonenumber && (
                  <div className="text-red-500 text-sm mb-3">{formik.errors.phonenumber}</div>
                )}
              </div>
            </div>

            {/* Password + Confirm */}
            <div className="flex items-center w-full gap-4 sm:flex-row flex-col">
              {['password', 'confirmpassword'].map((field) => (
                <div key={field} className="flex flex-col gap-2 w-full">
                  <label>{field === 'password' ? 'Password' : 'Confirm Password'}</label>
                  <Input
                    placeholder={field === 'password' ? 'Enter your Password' : 'Confirm your Password'}
                    id={field}
                    type="password"
                    name={field}
                    value={formik.values[field]}
                    onChangeFun={formik.handleChange}
                  />
                  {formik.touched[field] && formik.errors[field] && (
                    <div className="text-red-500 text-sm mb-3">{formik.errors[field]}</div>
                  )}
                </div>
              ))}
            </div>

            {/* Terms Checkbox */}
            <div className="flex justify-center items-center sm:px-5 px-1">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="remember" name="remember" />
                <label htmlFor="remember">I agree with the terms of use</label>
              </div>
            </div>

            <button type="submit" className="px-3 py-2 flex mx-auto bg-blue-400 text-white rounded-lg">
              Sign up
            </button>
          </form>

          <h1 className="flex text-gray-400 mx-auto sm:text-[16px] text-[14px]">
            or sign in with other accounts?
          </h1>

          <div className="flex items-center gap-4 mx-auto text-xl">
            <FaFacebook />
            <FaGoogle />
            <FaInstagramSquare />
            <FaLinkedin />
          </div>

          <h1 className="flex text-gray-400 mx-auto sm:text-[16px] text-[14px]">
            Already have an account?
            <span className="text-blue-500 cursor-pointer ml-1" onClick={() => router.push('/signin')}>
              Sign In
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Signup;
