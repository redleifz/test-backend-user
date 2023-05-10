import bcrypt from "bcryptjs";

const mockData = {

    users: [
        {
            username: "jongjate",
            password: bcrypt.hashSync("123456"),
            isAdmin: false,

        },
        {
            username: "admin",
            password: bcrypt.hashSync("admin"),
            isAdmin: true,
        },
    ]
}

export default mockData;