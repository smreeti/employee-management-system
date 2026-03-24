import { Routes, Route } from 'react-router-dom';
import {
    EmployeePage,
    Navbar,
    References,
    Login
} from './components';
import { referencePages } from './components/references/referencePages';
import { Department } from './components/department/Department';
import About from './components/About';

export const Page = () => {
    return (
        <>
            <Navbar />
            <div className="page-content">
                <Routes>
                    <Route path="/" element={<Login />} />
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
                </Routes>
            </div>

        </>

    )
}