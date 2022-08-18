import { Response, Request, NextFunction } from "express";



export const home = (req: Request, res: Response) => {
    res.send("Welcome to Drone Management");
};
