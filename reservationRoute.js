import express from "express"; 
import {sendReservation} from "../controller/reservation.js";
 const router = express.Router();
  router.post("/send", sendReservation); 
  router.get("/send", (req, res) => {
     res.json({ message: "GET route works!" }); 
    });
   export default router;