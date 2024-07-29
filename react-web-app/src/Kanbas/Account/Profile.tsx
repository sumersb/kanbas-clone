import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./reducer";
export default function Profile() {
    const [profile, setProfile] = useState<any>({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const fetchProfile = async () => {
        try {
            const account = await client.profile();
            setProfile(account);
        } catch (err: any) {
            navigate("/Kanbas/Account/Signin");
        }
    };
    const signout = async () => {
        await client.signout();
        dispatch(setCurrentUser(null));
        navigate("/Kanbas/Account/Signin");
    };
    const updateProfile = async (profile: any) => {
        await client.updateProfile(profile);
        navigate("/Kanbas/Account/Profile")
    }
    useEffect(() => { fetchProfile(); }, []);
    return (
        <div>
            <h1>Profile</h1>
            {profile && (
                <div className="form w-50">
                    <div className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="username" className="form-label">Username</label>

                            <input className="form-control" value={profile.username} onChange={(e) => setProfile({ ...profile, username: e.target.value })} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="password" className="form-label">Password</label>

                            <input className="form-control" value={profile.password} onChange={(e) => setProfile({ ...profile, password: e.target.value })} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="firstName" className="form-label">First Name</label>

                            <input className="form-control" value={profile.firstName} onChange={(e) => setProfile({ ...profile, firstName: e.target.value })} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="lastName" className="form-label">Last Name</label>

                            <input className="form-control" value={profile.lastName} onChange={(e) => setProfile({ ...profile, lastName: e.target.value })} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="dob" className="form-label">Date of Birth</label>

                            <input className="form-control" value={profile.dob} onChange={(e) => setProfile({ ...profile, dob: e.target.value })} type="date" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label">Email</label>

                            <input className="form-control" value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="role" className="form-label">Role</label>

                            <select value={profile.role} className="form-control mb-2" onChange={(e) => setProfile({ ...profile, role: e.target.value })}>
                                <option value="USER">User</option>            <option value="ADMIN">Admin</option>
                                <option value="FACULTY">Faculty</option>      <option value="STUDENT">Student</option>
                            </select>
                        </div>
                    </div>
                </div>
            )}
            <button onClick={() => updateProfile(profile)} className="btn btn-secondary mb-2 w-100">
                Update Profile
            </button>
            <button onClick={signout} className="btn btn-danger w-100">
                Sign out
            </button>
        </div>
    );
}
