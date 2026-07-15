import {z} from "zod";

export const envSchema = z.object({
    DATABASE_URL: z.url(),
})

const env = envSchema.safeParse(process.env)

export default env;