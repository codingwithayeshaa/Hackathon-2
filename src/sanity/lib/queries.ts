import { defineQuery } from "next-sanity";

export const allcars = defineQuery(`
    *[_type == "car"]{
      _id,
      name,
      description,
      brand,
      type,
      fuelCapacity,
      transmission,
      seatingapacity,
      pricePerDay,
      originalPrice,
      tags,
      "imageUrl": image.asset->url 
    } `)

    export const carById = defineQuery(`
        *[_type == "car"][0..3]{
      _id,
      name,
      description,
      brand,
      type,
      fuelCapacity,
      transmission,
      seatingapacity,
      pricePerDay,
      originalPrice,
      tags,
      "imageUrl": image.asset->url 
     } `)