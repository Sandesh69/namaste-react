import { Sum } from "../sum"

test("sum of two numbers",()=>{
    const result=Sum(3,4);
    expect(result).toBe(7)
})