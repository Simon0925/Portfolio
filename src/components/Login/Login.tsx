import { useState } from "react";
import UserIcon from "../../svg/UserSVG/UserSVG";
import validateForm from './services/validateForm';
import dataTosend from './services/dataTosend';
import { FormValues } from './interface';
import { useFormHandler } from "../../hooks/useFormHandler/useFormHandler";
import { useDispatch } from "react-redux";
import { login } from "../../store/auth/auth.slice";

export default function Login() {
    const [password, setPassword] = useState(false);
    const dispatch = useDispatch();

    const {
        formValues,
        errors,
        serverMessage,
        handleChange,
        handleSubmit,
    } = useFormHandler<FormValues>({
        initialValues: { email: '', password: '' },
        validate: validateForm,
        onSubmit: async (values) => {
            const response = await dataTosend(values);
            const token = response.token;
            if(token){
                document.cookie = `accessToken=${token}; path=/; max-age=2592000; secure; samesite=lax;`;//for test 
                // TODO: change for deploy
                // document.cookie = `token=${token}; path=/; max-age=2592000; secure; samesite=strict;`; for deploy
                dispatch(login({ login: true }));
            }
           
            return response;
        },
    });

    return (
        <div className="rounded-lg transition-transform duration-300 transform hover:scale-105 bg-green-50 p-5 w-full shadow-2xl bg-opacity-10 backdrop-blur-lg flex flex-col items-center">
            <h1 className="text-2xl text-black dark:text-white font-bold transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400">
                Log in to admin panel
            </h1>
            <UserIcon />
            {serverMessage && (
                <p className="text-center text-blue-600 font-medium">
                    {serverMessage}
                </p>
            )}
            <form onSubmit={handleSubmit} className="flex w-full flex-col gap-8">
                {!password ? (
                    <div className="flex w-full flex-col gap-2">
                        <label htmlFor="email" className="text-black dark:text-white">
                            Email:
                        </label>
                        {errors.email && <p className="text-red-500">{errors.email}</p>}
                        <input
                            className="bg-gray-800 p-4 rounded shadow-md w-full text-gray-400 outline-none"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            value={formValues.email}
                            onChange={handleChange}
                        />
                    </div>
                ) : (
                    <div className="flex w-full flex-col gap-2">
                        <label htmlFor="password" className="text-black dark:text-white">
                            Password:
                        </label>
                        {errors.password && <p className="text-red-500">{errors.password}</p>}
                        <input
                            className="bg-gray-800 p-4 text-gray-400 rounded shadow-md w-full outline-none"
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            value={formValues.password}
                            onChange={handleChange}
                        />
                    </div>
                )}
                <div className="flex w-full flex-col">
                    <button
                        type="button"
                        className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition duration-200"
                        onClick={() => setPassword((prev) => !prev)}
                    >
                        {password ? "Back" : "Next"}
                    </button>
                </div>
                {password && (
                    <div className="flex w-full flex-col">
                        <button
                            type="submit"
                            className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600 transition duration-200"
                        >
                            Login
                        </button>
                    </div>
                )}
            </form>
        </div>
    );
}
