
import { UseContextExample } from "./UseContextExample";
import { HOCExample } from "./HOCExample";
import { UseReducerExample } from "./UseReducerExample";
import { UseCallbackExample } from "./UseCallbackExample";
import { UseMemoExample } from "./UseMemoExample";
import { ReduxExample } from "./ReduxExample";
import { ListExample } from "./ListExample";

export const referencePages = [
    { path: "hoc", component: <HOCExample />, label: "Higher Order Component" },
    { path: "lists", component: <ListExample />, label: "Lists" },
    { path: "useContext", component: <UseContextExample />, label: "useContext" },
    { path: "useReducer", component: <UseReducerExample />, label: "useReducer" },
    { path: "useCallback", component: <UseCallbackExample />, label: "useCallback" },
    { path: "useMemo", component: <UseMemoExample />, label: "useMemo" },
    { path: "redux", component: <ReduxExample />, label: "Redux" }
];