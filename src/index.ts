import app from "app";
import dotenv from "dotenv";
// import { dbConnection } from "ormConfig";

dotenv.config();

// dbConnection();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`); //eslint-disable-line
});
