import express from "express";
import compression from "compression"; // compresses requests
//import bodyParser from "body-parser";
import path from "path";
// import router from "./routes/index";
// import template from "./routes/template";
import routes from "./routes";
import cors from "./middleware/corsFilters";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors);

app.use("/api", routes);

//app.use("/api/WorkOrder", router);
//app.use("/api/template", template);

app.set("port", process.env.PORT || 8002);
app.use(compression());


app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

app.use(
    express.static(path.join(__dirname, "public"), {
        maxAge: 31557600000
    })
);

/**
 * Primary app routes.
 */

export default app;