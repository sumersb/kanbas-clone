import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router";
import Courses from "./Courses";
import "./styles.css";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as courseAPI from "./Courses/client";
import Account from "./Account";
import ProtectedRoute from "./ProtectedRoute";
import Enrollment from "./Enrollment";


export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  const navigate = useNavigate();
  const fetchCourses = async () => {
    try {
      const classes = await courseAPI.fetchAllCourses();
      setCourses(classes);
    } catch (err: any) {
      navigate("/Kanbas/Account/Signin");
    }
  };
  useEffect(() => {
    fetchCourses();
  }, []);




  return (
    <Provider store={store}>
      <div id="wd-kanbas" className="h-100">
        <div className="d-flex h-100">
          <div className="d-none d-md-block bg-black">
            <KanbasNavigation />
          </div>
          <div className="flex-fill p-4">
            <Routes>
              <Route path="Account/*" element={<Account />} />
              {/* <Route path="Account/" element={<Account />} /> */}
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="Dashboard" element={<ProtectedRoute><Dashboard/>
              </ProtectedRoute>} />
              <Route path="Enrollments" element={<ProtectedRoute><Enrollment/></ProtectedRoute>} />
              <Route path="Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute>} />
              <Route path="Calendar" element={<h1>Calendar</h1>} />
              <Route path="Inbox" element={<h1>Inbox</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </Provider>
  );
}

