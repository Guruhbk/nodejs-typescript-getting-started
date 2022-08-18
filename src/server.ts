import errorHandler from "errorhandler";

import app from "./app";

import { sequelize } from "./config/dbConfig";

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), () => {
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
    console.log("entering");
    sequelize.authenticate().then(async () => {
        console.log("database connected");
        try {
            await sequelize.sync();
            console.log("sync completed");
        } catch (error) {
            console.log(error.message);
        }
    }).catch((e: any) => {
        console.log(e.message);
    });
    console.log("  Press CTRL-C to stop\n");
});

export default server;
