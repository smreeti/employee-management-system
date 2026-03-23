import { Routes, Route } from 'react-router-dom';
import {
    About,
    EmployeePage,
    Navbar,
    References
} from './components';
import { referencePages } from './components/references/referencePages';
import { Department } from './components/department/Department';

export const Page = () => {
    return (
        <>
            <Navbar />
            <div className="page-content">
                <Routes>
                    <Route path="/" element={<About />} />
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