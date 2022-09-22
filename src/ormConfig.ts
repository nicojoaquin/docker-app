import { join } from "path";

import dotenv from "dotenv";
import { DataSource } from "typeorm";

dotenv.config({ override: true });

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  timezone: "+00:00",
  entities: [join(__dirname, "entities", "*.{ts,js}")],
  logging: false,
  synchronize: process.env.NODE_ENV === "production" ? false : true,
  migrations: [join(__dirname, "migrations", "*.{ts,js}")],
  // cli: {
  //   migrationsDir: '../../dist/migrations',
  // },
  ssl:
    process.env.NODE_ENV === "development"
      ? false
      : {
          require: true,
          rejectUnauthorized: false,
        },
});

export const dbConnection = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Connected to database"); //eslint-disable-line
    return AppDataSource;
  } catch (error) {
    console.log("Database connection error", error); //eslint-disable-line
  }
};
