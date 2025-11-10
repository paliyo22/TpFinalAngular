import { InferInput, object, optional, string } from "valibot";

const addressSchema = object({
    "address": string(),
    "apartment": optional(string()),
    "city": string(),
    "zip": string(),
    "country": string()
});

const storeSchema = object({
    ...addressSchema.entries,
    "phone": string()
});

export type CreateAddress = InferInput<typeof addressSchema>;

export type CreateStore = InferInput<typeof storeSchema>;