import { InferInput, maxValue, minValue, number, object, pipe, string } from "valibot";

const reviewsSchema = object({
    "productId": string(),
    "rating": pipe(number(), minValue(1), maxValue(10)),
    "comment": string()
});

export type CreateReview = InferInput<typeof reviewsSchema>;