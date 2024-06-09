import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from "@vercel/postgres";
import * as schema from './schema'

//use this to send drizzle queries
export const db = drizzle(sql,{schema});