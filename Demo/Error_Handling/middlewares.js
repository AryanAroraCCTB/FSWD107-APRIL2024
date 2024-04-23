export const verifyAuthToken = (req, res, next) => {
    const { token: authToken } = req.query;
    if(authToken) {
        req.query['authToken'] = authToken;
        next();
    }
    // res.send("Error: authToken not found!");
}

export const logger = (req, res, next) => {
    console.log(`REQ RECV: ${new Date()}`);

    next();
}

