import * as dotenv from "dotenv";

const envFile = `.env.${process.env.NODE_ENV || "development"}`;
export default dotenv.config({ path: envFile });
