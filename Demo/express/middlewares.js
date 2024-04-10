const get_delete_mw = (req, res, next) => {
    const method = req.method;

    if (method === "GET" || method === "DELETE") {
        // process
        console.log("MW GET DELETE");
    }
    next();
};

const post_path_mw = (req, res, next) => {
    const method = req.method;

    if (method === "POST" || method === "PATCH") {
        // process
        console.log("MW POST PATCH");
    }
    next();
};

export default {
    get_delete_mw,
    post_path_mw,
};
