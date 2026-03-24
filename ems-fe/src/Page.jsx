import { Routes, Route, Navigate } from 'react-router-dom';
import {
    EmployeePage,
    Navbar,
    References,
    Login
} from './components';
import { referencePages } from './components/references/referencePages';
import { Department } from './components/department/Department';
import About from './components/About';
import { ProtectedRoute } from './ProtectedRoute';
import { useAuth } from './auth/AuthProvider';
import { Signup } from './components/Signup';

export const Page = () => {

    const { isAuthenticated } = useAuth();
    return (
        <>
            <Navbar />
            <div className="page-content">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />

                    {/*Protected routes accessible after login success*/}
                    <Route element={<ProtectedRoute />}>
                        <Route path="/about" element={<About />} />
                        <Route path="/employee" element={<EmployeePage />} />
                        <Route path="/department" element={<Department />} />
                        <Route path="/references" element={<References />} />
                        {referencePages.map(page => (
                            <Route
                                key={page.path}
                                path={`/references/${page.path}`}
                                element={page.component}
                            />
                        ))}
                    </Route>

                    <Route
                        path="*"
                        element={
                            isAuthenticated ? (
                                <Navigate to="/about" replace />
                            ) : (
                                <Navigate to="/" replace />
                            )
                        }
                    />
                </Routes>
            </div>

        </>

    )
}