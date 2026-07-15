import {describe, it, expect} from "vitest";
import {envSchema} from "./config";

describe("envSchema", ()=>{
    it("empty", ()=>{
        const result = envSchema.safeParse({});
        expect(result.success).toBe(false);
    })
    it("wrong", ()=>{
        const result = envSchema.safeParse({DATABASE_URL: "hello"})
        expect(result.success).toBe(false);
    })
    it("right", ()=>{
        const result = envSchema.safeParse({DATABASE_URL:"postgresql://user:pass@localhost:5432/db"})
        expect(result.success).toBe(true);
    })
})


