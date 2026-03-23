import { Routes, Route } from 'react-router-dom';
import {
    Home,
    About,
    AddEmployee,
    EmployeeList,
    Navbar,
    References,
    UseReducerExample,
    UseCallbackExample,
    UseMemoExample,
    ReduxExample,
    UseContextExample,
    HOCExample
} from './components';

export const Page = () => {
    return (
        <>
            <Navbar />
            <div className="page-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/addEmployee" element={<AddEmployee />} />
                    <Route path="/employeeList" element={<EmployeeList />} />
                    <Route path="/references" element={<References />} />
                    <Route path="/references/useContext" element={<UseContextExample />} />
                    <Route path="/references/useReducer" element={<UseReducerExample />} />
                    <Route path="/references/useCallback" element={<UseCallbackExample />} />
                    <Route path="/references/useMemo" element={<UseMemoExample />} />
                    <Route path="/references/redux" element={<ReduxExample />} />
                     <Route path="/references/hoc" element={<HOCExample />} />
                </Routes>
            </div>

        </>

    )
}