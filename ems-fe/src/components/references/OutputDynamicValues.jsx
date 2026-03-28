import reactImg from '/src/assets/react.svg';
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

export const OutputDynamicValues = () => {
    const description = reactDescriptions[genRandomInt(2)];
    return (
        <header>
            <img src={reactImg} alt="react logo" />
            <h1>React Essentials</h1>
            <p>
                <b>{description} </b>react concepts you will need for almost any app you are going to build!
                <b> Refresh page to see dynamic description!!</b>
            </p>
        </header>
    )
}