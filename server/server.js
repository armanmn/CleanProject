import express from 'express';
import { readdirSync } from "fs";

const app = express();

// route middleware
// import all files from routes
readdirSync("./routes").map((r) => app.use('/api', require(`./routes/${r}`)));
//app.use('/api', router);

app.listen(8000, () => console.log(`Server is running on 8000`));