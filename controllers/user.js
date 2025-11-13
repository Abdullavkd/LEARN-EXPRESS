function getUser(req, res) {
    try {
        // How to get body data from request object
        const body = req.body;
        console.log("User data received:", body);
        
        // Write save in mongodb.

    } catch (error) {
        res.status(error.status || 500).json({
            message: error.message || "Something went wrong",
        })

    }
}

export { getUser };