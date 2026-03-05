import { About } from "./About";
import { UserContext } from './UserContext';

export const Home = () => {

    const withBorder = (WrappedComponent) => {
        return function NewComponent(props) {
            return (
                <>
                    <div style={{ border: "2px solid red", padding: "10px" }}>
                        <WrappedComponent {...props} />
                    </div>
                </>
            )
        }
    }

    const AboutWithBorder = withBorder(About);

    return (
        <>
            <h2> I am Home page</h2>

            <UserContext.Provider value={{ message: "Context message from Home Component" }}>
                <About title="About: I am called from Home Component" />
            </UserContext.Provider>

            <AboutWithBorder title = "AboutWithBorder: I am called from Home Component with HOC" />
        </>
    )
}