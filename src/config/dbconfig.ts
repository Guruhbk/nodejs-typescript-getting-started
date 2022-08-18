import { Sequelize } from "sequelize";


// export const dbConnect = new Sequelize("postgres", "postgres", "Masthu0816@", {
//     host: "localhost",
//     dialect: "postgres",
//     port: 5433,
// });

export const sequelize = new Sequelize("WlEAloZMxGDt", "29ce0acc4a39", "74d83b13c5de", {
    host: "localhost",
    dialect: "postgres",
    port: 63306,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});


