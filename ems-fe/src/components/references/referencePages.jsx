
import { UseContextExample } from "./UseContextExample";
import { HOCExample } from "./HOCExample";
import { UseReducerExample } from "./UseReducerExample";
import { UseCallbackExample } from "./UseCallbackExample";
import { UseMemoExample } from "./UseMemoExample";
import { ReduxExample } from "./ReduxExample";
import { ListExample } from "./ListExample";
import { UseRefExample } from "./UseRefExample";
import { UseStateExample } from "./UseStateExample";
import UseEffectExample from "./UseEffectExample";
import { CustomHooksExample } from "./CustomHooksExample";
import { LazyLoadExample } from "./LazyLoadExample";
import { TanStackQuery } from "./TanStackQuery";
import { ModalExample } from "./ModalExample";
import { OutputDynamicValues } from "./OutputDynamicValues";
import { InvestmentCalculator } from "../investmentCalculator/InvestmentCalculator";
import { ScopingCSSExample } from "./ScopingCSSExample";
import { FormActionsExample } from "./FormActionsExample";
import { TodoComponent } from "./typescript/TodoComponent";

export const referencePages = [
    { path: "dynamicValues", component: <OutputDynamicValues />, label: "Using and Outputting Dynamic Values" },
    { path: "scopingCSS", component: <ScopingCSSExample />, label: "Scoping CSS Rules with CSS Modules" },
    { path: "lists", component: <ListExample />, label: "Lists" },
    { path: "formActions", component: <FormActionsExample />, label: "Form Actions" },
    { path: "hoc", component: <HOCExample />, label: "Higher Order Component" },
    { path: "useRef", component: <UseRefExample />, label: "useRef" },
    { path: "useState", component: <UseStateExample />, label: "useState" },
    { path: "useEffect", component: <UseEffectExample />, label: "useEffect" },
    { path: "useContext", component: <UseContextExample />, label: "useContext" },
    { path: "useReducer", component: <UseReducerExample />, label: "useReducer" },
    { path: "useCallback", component: <UseCallbackExample />, label: "useCallback" },
    { path: "useMemo", component: <UseMemoExample />, label: "useMemo" },
    { path: "customHooks", component: <CustomHooksExample />, label: "customHooks" },
    { path: "redux", component: <ReduxExample />, label: "Redux" },
    { path: "lazyLoading", component: <LazyLoadExample />, label: "Lazy Loading" },
    { path: "tanStackQuery", component: <TanStackQuery />, label: "Tan Stack Query" },
    { path: "modal", component: <ModalExample />, label: "Modal (create portal)" },
    { path: "calc", component: <InvestmentCalculator />, label: "Investment Calculator (Practice Project)" },
    { path: "todoTsx", component: <TodoComponent />, label: "React with Typescript (Simple To Do app)" }

];