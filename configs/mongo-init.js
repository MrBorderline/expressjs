db.createUser(
    {
        user: "usuario",
        pwd: "usuario",
        roles: [
            {
                role: "readWrite",
                db: "js"
            }
        ]
    }
);