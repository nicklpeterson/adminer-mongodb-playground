db = db.getSiblingDB('my-retail-db');

db.createUser(
    {
        user: "admin",
        pwd: "admin",
        roles: [
            {
                role: "readWrite",
                db :"my-db"
            }
        ]
    }
)