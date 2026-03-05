import { Routes, Route } from 'react-router-dom';
import { Home, About, AddEmployee, EmployeeList, Navbar } from './components';

export const Page = () => {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/addEmployee" element={<AddEmployee />} />
                <Route path="/employeeList" element={<EmployeeList />} />
            </Routes>
        </>

    )
}