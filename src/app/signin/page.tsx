'use client';

import Input from '@/components/Input';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaFacebook, FaGoogle, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const Signin = () => {
  const router = useRouter();

  type FormikValues = {
    email: string;
    password: string;
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const formik = useFormik<FormikValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log('Form values: ', values);
      try {
        console.log('Signed in!');
        // redirect to dashboard
        router.push('/dashboard');
      } catch (err) {
        console.log('Signin error: ', err);
      }
    },
  });

  return (
    <div className="flex justify-between">
      {/* Left side form */}
      <div className="md:w-1/2 w-full px-3 py-4 overflow-y-auto h-[100dvh]">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <img
            src="https://png.pngtree.com/png-vector/20190225/ourmid/pngtree-circuit-logo-template-vector-png-image_704226.jpg"
            alt="Logo"
            className="h-16 w-16"
          />
          <h1>Hope Ui</h1>
        </div>

        {/* Form Card */}
        <div className="flex flex-col gap-4 justify-center lg:px-10 sm:px-4 px-2">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-[24px]">Sign In</h1>
            <p className="text-gray-400">Login to stay connected</p>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
            {/* Email */}
            <div className="flex flex-col gap-2">
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

            {/* Password */}
            <div className="flex flex-col gap-2">
              <label>Password</label>
              <Input
                placeholder="Enter your Password"
                id="password"
                type="password"
                name="password"
                value={formik.values.password}
                onChangeFun={formik.handleChange}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500 text-sm mb-3">{formik.errors.password}</div>
              )}
            </div>

            {/* Remember + Forgot */}
            <div className="flex justify-between items-center sm:px-5 px-1">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="remember" name="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <a href="#" className="text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>

            <button type="submit" className="px-3 py-2 flex mx-auto bg-blue-400 text-white rounded-lg">
              Sign in
            </button>
          </form>

          {/* Social login */}
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
            Don’t have an account?
            <span className="text-blue-500 cursor-pointer ml-1" onClick={() => router.push('/signup')}>
              Sign Up
            </span>
          </h1>
        </div>
      </div>

      {/* Right image */}
      <div className="md:flex hidden w-full md:w-1/2">
        <img
          src="https://t3.ftcdn.net/jpg/02/32/24/48/360_F_232244890_8CJ7VJAU79lhGHg8D19Ch9JrfUCYOn7M.jpg"
          alt="Sign Image"
          className="h-screen w-full"
        />
      </div>
    </div>
  );
};

export default Signin;
