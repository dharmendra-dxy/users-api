import app from "./app";
import { config } from "./config";

const PORT= config.port;

app.listen(PORT , ()=>{
  console.log(`The server is running at : http://localhost:${PORT}`);
})