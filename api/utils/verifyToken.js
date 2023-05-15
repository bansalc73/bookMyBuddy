import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  // console.log("woo")
  // console.log(req.body)
  
  // console.log(req.json)
  // const token = req.cookies.access_token; // get the token from the cookie

  // console.log(token)

  if (!req.body) {
    // if token doesn't exist, return an error response
    return res.status(401).json({ message: 'Unauthorized access.' });
  }

  try {
    // verify the token using the secret key
    // const decoded = jwt.verify(token,process.env.JWT);

    // set the user object in the request object
    req.user = req.body;

    // call the next middleware function
    next();
  } catch (err) {
    // if the token is invalid or has expired, return an error response
    return res.status(401).json({ message: 'Invalid token.' });
  }


};
  // const authHeader = req.headers.authorization || req.headers.Authorization;

  // if(!authHeader?.startsWith('Bearer ')){
  //   return next(createError(401, "You are not authenticated!"));
  // }
  // const token = authHeader.split(' ')[1];

  // console.log(token)

  // // const token = req.cookies.access_token;
  // // if (!token) {
  // //   return next(createError(401, "You are not authenticated!"));
  // // }
 
  // jwt.verify(token, process.env.JWT, (err, user) => {
  //   if (err) return next(createError(403, "Token is not valid!"));
  //   // const foundUser = 
  //    req.user = user;
  //    next();
  // });


export const verifyUser = (req, res, next) => {
// console.log("weeee")
// console.log(req.body)
// console.log(req.user)

  if (req.user.userdata._id || req.user.userdata.isAdmin || req.user.userdata.isDoctor) {
    next();
  } else {
    return next(createError(403, "You are not authorized!"));
  }
};
export const verifyAdmin = (req, res, next) => {
  if (req.user.userdata.isAdmin) {
    console.log("Conntected")
    next();
  } else {
    return next(createError(403, "You are not authorized!"));
  }
};