import { useState } from "react"
import { Header } from "./Header"
import { UserInput } from "./UserInput"
import { Results } from "./Results";

export const InvestmentCalculator = () => {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    const handleChange = (inputIdentifier, newValue) => {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: +newValue
            }
        })
    }

    return (
        <>
            <Header />
            <UserInput
                onChange={handleChange}
                userInput={userInput}

            />
            <Results
                userInput={userInput}
            />
        </>
    )
}