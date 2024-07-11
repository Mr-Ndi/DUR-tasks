import { allBooks } from "./database.js";
import express2 from "express"

const route = express2();

route.get('/', (que, ans) => {
    ans.send("This will be all books")
})

route.listen(2000, () => {
    console.log("\n  This route is working on port 2000\n|-------------------------------------|")
});