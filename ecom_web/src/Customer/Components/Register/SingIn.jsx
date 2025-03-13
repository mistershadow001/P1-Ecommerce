import { useState } from 'react';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch("http://localhost:8080/auth/signin", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const message = await response.text(); // Get the plain text message
            localStorage.setItem('email', email); // Save email to local storage
            // Assuming a token is still being returned, we can save it
            const token = response.headers.get("Authorization"); // If token is in response headers
            if (token) {
                localStorage.setItem('token', token);
            }
            setErrorMessage(''); // Clear error message on success
            alert(message);
            window.location.href="/" // Show success message
        } else {
            const errorData = await response.text(); // Fetch plain text error message
            setErrorMessage(errorData || 'Invalid credentials');
        }
    };

    return (
        <div className="max-w-sm mx-auto mt-10 p-4 border border-gray-300 rounded-lg shadow-lg bg-white">
            <h2 className="text-xl font-semibold mb-6 text-center">Sign In</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Email"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Password"
                        required
                    />
                </div>
                {errorMessage && <div className="text-red-500 text-sm mt-2">{errorMessage}</div>}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Sign In
                </button>
            </form>
        </div>
    );
}

export default SignIn;
