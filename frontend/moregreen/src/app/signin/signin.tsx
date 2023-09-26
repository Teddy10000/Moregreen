<<<<<<< HEAD
'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import image from '../components/images/google.svg' 
import { signIn } from 'next-auth/react';

const SignIn = () => {
    const router = useRouter();
    const handleGoogleSignIn =  () => {
        signIn('google', {
            callbackUrl: '/', // Replace with the path to your home page
          });
      };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <div className="bg-white rounded-full p-4 shadow-lg">
      {/* Google Sign-In Button */}
      <button
        className="flex items-center justify-center rounded-full bg-white p-2 hover:bg-gray-100"
        onClick={handleGoogleSignIn}
      >
        <Image
        className="h-6 w-6 mr-2"
          width={6}
          height={6}
          src={image} // Replace with the actual Google logo image
          alt="Google Logo"
        />
        Sign in with Google
      </button>
    </div>
  </div>
);
  
}

=======
'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import image from '../components/images/google.svg' 
import { signIn } from 'next-auth/react';

const SignIn = () => {
    const router = useRouter();
    const handleGoogleSignIn =  () => {
        signIn('google', {
            callbackUrl: '/', // Replace with the path to your home page
          });
      };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <div className="bg-white rounded-full p-4 shadow-lg">
      {/* Google Sign-In Button */}
      <button
        className="flex items-center justify-center rounded-full bg-white p-2 hover:bg-gray-100"
        onClick={handleGoogleSignIn}
      >
        <Image
        className="h-6 w-6 mr-2"
          width={6}
          height={6}
          src={image} // Replace with the actual Google logo image
          alt="Google Logo"
        />
        Sign in with Google
      </button>
    </div>
  </div>
);
  
}

>>>>>>> 205af39edd9b980b34dc296111e7cfc7eb057a24
export default SignIn;