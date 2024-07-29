import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENT_API = `${REMOTE_SERVER}/api/enrollments`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const fetchAllEnrollments = async () => {
    const { data } = await axiosWithCredentials.get(ENROLLMENT_API);
    return data;
};

export const createEnrollment = async (courses: any) => {
    const { data } = await axiosWithCredentials.post(`${ENROLLMENT_API}`, courses)
    return data;
}

export const deleteEnrollment = async (course_id: string) => {
    const { status } = await axiosWithCredentials.delete(`${ENROLLMENT_API}/${course_id}`);
    return status;
}