const step1 = (): Promise<number> => {
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

const step2 = (step: unknown): Promise<number> => {
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

const step3 = (step: unknown): Promise<number> => {
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

step1()
    .then((result: number) => {
        return step2(result);
    })
    .then((result: number) => {
        return step3(result);
    })
    .then(() => {
        console.log("Your house is done!");
    })
    .catch(() => {
        console.log("There was an error building");
    })