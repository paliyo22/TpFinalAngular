import { array, date, InferInput, nullable, object, optional, safeParse, string } from "valibot";
    
const metaSchema = object({
    "created": date(),
    "updated": date(),
    "deletedBy": nullable(string()),
    "status": string() 
});

const userSchema = object({
    "firstname": string(),
    "lastname": string(),
    "birth": nullable(date()),
    "phone": nullable(string())
});

const businessSchema = object({
    "title": string(),
    "bio": nullable(string()),
    "phone": string(),
    "contactEmail": string()
});

const adminSchema = object({
    "publicName": string()
});

const addressSchema = object({
    "address": string(),
    "apartment": string(),
    "city": string(),
    "zip": string(),
    "country": string() 
});

const storeSchema = object({
    "address": addressSchema,
    "phone": string()
});

const accountSchema = object({
    "role": string(),
    "email": string(),
    "username": string(),
    "meta": metaSchema,
    "userProfile": optional(userSchema),
    "businessProfile": optional(businessSchema),
    "adminProfile": optional(adminSchema),
    "address": optional(array(addressSchema)),
    "store": optional(array(storeSchema))
});

export type AccountSchema = InferInput<typeof accountSchema>;

export const validateAccount = (imput: unknown) => {
    return safeParse(accountSchema, imput)
};