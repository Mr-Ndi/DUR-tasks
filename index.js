import { all_authors, Single_author, Create_author, Deleting_author } from "./database.js";
import { bodyParse } from "body-parser";
import express2 from "express"

const route = express2();
route.use(bodyParse.json())

route.get('/author', async(que, ans) => {
    const answer = await all_authors();
    
    ans.send(answer)
    console.log("This will be all authors")
});

route.get('/author/id', async(que, ans) => {
    const id = que.params(id)
    const answer = await Single_author(id)

    ans.send(answer)
    console.log("This will be single author")
});

route.put('/author', (que, ans) => {
    const {id,fname,lname,dob} = que.body;
    const answer = Create_author(id,fname,lname,dob)

    ans.send(answer)
    console.log("This will be adding a single author")
});


route.delete('/author', (que, ans) => {
    const id = que.params(id)
    const answer = Deleting_author(id)

    ans.send(answer)
    console.log("This will be removing a single author")
});
route.listen(2000, () => {
    console.log("\n  This route is working on port 2000\n|-------------------------------------|")
});