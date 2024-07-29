import axios from "axios";
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`;
export const SUBMISSIONS_API = `${REMOTE_SERVER}/api/submissions`;

const axiosWithCredentials = axios.create({ withCredentials: true });
export const findAllQuizzes = async () => {
    const response = await axios.get(QUIZZES_API);
    return response.data;
};

export const findQuizzesByPartialName = async (name: string) => {
    const { data } = await axios.get(`${QUIZZES_API}?title=${name}`);
    return data;
};

export const findQuizByCourseID = async (courseID: string) => {
    const { data } = await axios.get(`${QUIZZES_API}?courseID=${courseID}`);
    return data;
}
export const findQuizByID = async (id: string) => {
    const response = await axios.get(`${QUIZZES_API}/${id}`);
    return response.data;
};
export const deleteQuiz = async (quizID: string) => {
    const response = await axios.delete(`${QUIZZES_API}/${quizID}`);
    return response.data;
};
export const updateQuiz = async (quiz: any) => {
    console.log(quiz._id)
    const response = await axios.put(`${QUIZZES_API}/${quiz._id}`, quiz);
    return response.data;
};
export const createQuiz = async (quiz: any) => {
    const response = await axios.post(`${QUIZZES_API}`, quiz);
    return response.data;
};

export const createSubmission = async (submission: any) => {
    const response = await axiosWithCredentials.post(`${SUBMISSIONS_API}`, submission);
    return response.data;
}
export const updateSubmission = async (submission: any) => {
    const response = await axiosWithCredentials.put(`${SUBMISSIONS_API}/${submission._id}`, submission);
    return response.data;
};

export const deleteSubmission = async (submissionID: string) => {
    const response = await axios.delete(`${SUBMISSIONS_API}/${submissionID}`);
    return response.data;
};

export const findSubmissionByQuizID = async (id: string) => {
    const response = await axiosWithCredentials.get(`${SUBMISSIONS_API}/${id}`);
    return response.data;
};

