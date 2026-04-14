const step11 = (): Promise<number> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const nextStep = 1;
                console.log("Completed step 1");
                resolve(nextStep);
            } catch (error) {
                reject();
            }
        }, 1000);
    });
};

const step22 = (step: unknown): Promise<number> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const nextStep = (step as number) + 1;
                console.log(`Completed step ${nextStep}`);
                resolve(nextStep);
            } catch (error) {
                reject();
            }
        }, 1000);
    });
};

const step33 = (step: unknown): Promise<number> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const nextStep = (step as number) + 1;
                console.log(`Completed step ${nextStep}`); resolve(nextStep);
            } catch (error) {
                reject();
            }
        }, 1000);
    });
};

const build = async () => {
    try {
        const step1 = await step11();
        const step2 = await step22(step1);
        await step33(step2);
        console.log("Your house is done!");
    }
    catch (error) {
        console.log("there was an error building");
    }
};

build();