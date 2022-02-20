import express from "express";
import { newUser } from "./newusers.js";
import cors from "cors";
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  const { q } = req.query;
 
//   const keys = ["first_name", "last_name", "email"];
 const keys = ["image", "title", "description"]
     function search(data){
        return data.filter((item) =>
         keys.some((key) => item[key].toLowerCase().includes(q))
        );
     };
//   const search = (data) => {
//     return data.filter((item) =>
//       keys.some((key) => item[key].toLowerCase().includes(q))
   res.json(search(newUser).splice(0,10))
//     );
//   };

//   q ? res.json(search(Users).slice(0, 10)) : res.json(Users.slice(0, 10));
});

app.listen(5000, () => console.log("API is working!"));