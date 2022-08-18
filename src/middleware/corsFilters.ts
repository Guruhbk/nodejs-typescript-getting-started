import { Response, Request, NextFunction } from "express";

const corsFilter = (req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Authorization, Accept, auth-token, address");

    res.header("Access-Control-Allow-Headers", "*");

      next();
  };
  
  export default corsFilter;
  