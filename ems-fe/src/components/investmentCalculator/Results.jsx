import { calculateInvestmentResults, formatter } from "./investment"

export const Results = ({ userInput }) => {
    const resultsData = calculateInvestmentResults(userInput);
    const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;

    return (
        <>
            <table id="result">
                <thead>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest Year</th>
                    <th>Total Interest</th>
                </thead>
                <tbody>
                    {
                        resultsData.map(result => {
                            const totalInterest = result.valueEndOfYear - result.annualInvestment * result.year - initialInvestment;
                            return <tr key={result.year}>
                                <td>{result.year}</td>
                                <td>{formatter.format(result.valueEndOfYear)}</td>
                                <td>{formatter.format(result.interest)}</td>
                                <td>{formatter.format(totalInterest)}</td>
                            </tr>


                        })
                    }
                </tbody>
            </table>

        </>
    )
}