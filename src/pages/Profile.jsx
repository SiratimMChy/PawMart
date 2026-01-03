import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useState } from 'react';
import { updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';


const Profile = () => {
    const { setUser, user } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenform = () => {
        setIsOpen(!isOpen);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
        }).then(() => {
            setUser({ ...user, displayName: name, photoURL: photoUrl })
        }).catch((error) => {
            console.log(error);

        });
    }



    return (
        <div className="flex justify-center items-center min-h-screen px-4 py-10 md:py-20">
             <div className="card w-full max-w-xl md:max-w-lg bg-base-100 shadow-xl p-4 sm:p-6 md:p-8">
                <div className="flex flex-col items-center mb-6">
                    <div className="avatar">
                        <div className="w-28 rounded-full">
                            <img src={user?.photoURL} alt="User" />
                        </div>
                    </div>

                    <p className="text-xl font-semibold mt-3">{user?.displayName}</p>
                    <p className="text-gray-500">{user?.email}</p>
                </div>

                <button onClick={handleOpenform} className="btn bg-linear-to-r from-blue-600 to-cyan-600 text-white font-semibold w-50 mt-6 mx-auto">
                    Edit Profile
                </button>



                {
                    isOpen && (
                        <form onSubmit={handleUpdate} className="flex flex-col gap-4 mt-6">

                            <label className="label  text-sm font-semibold">Name</label>
                            <input
                                defaultValue={user?.displayName}
                                name="name"
                                type="text"
                                className="input input-bordered w-full"
                                placeholder="Enter Your Name"

                            />

                            <label className="label text-sm font-semibold mt-4">Photo URL</label>
                            <input
                                defaultValue={user?.photoURL}
                                name="photoUrl"
                                type="text"
                                referrerPolicy="no-referrer"
                                className="input input-bordered w-full"
                                placeholder="Update Your Photo URL"
                            />

                            <button
                                className="btn  btn-sm sm:btn-md bg-linear-to-r from-blue-600 to-cyan-600 text-white font-semibold w-50 mt-6 mx-auto"
                                type="submit"
                            >
                                Update
                            </button>
                        </form>
                    )}

            </div>
        </div>
    );
};

export default Profile;
