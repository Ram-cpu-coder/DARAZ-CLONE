
const randomIdGenerator = () => {
  const string =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
  const len = 10;
  let randomID = "";
  for (let index = 0; index < len; index++) {
    const randomIndex = Math.ceil(Math.random() * string.length);
    randomID = randomID + string[randomIndex];
  }
  return randomID;
};
const flashSaleItems = [
  {
    id: randomIdGenerator(),
    imgSrc:
      "https://img.drz.lazcdn.com/static/np/p/d8ab600a56930bc61da564082187a45d.jpg_720x720q80.jpg_.webp",
    name: "Wireless Headphones",
    oldPrice: 120,
    discountPercentage: 25,
    newPrice: 120 - (120 * 25) / 100,
    ratings: 3,
  },
  {
    id: randomIdGenerator(),
    imgSrc:
      "https://img.drz.lazcdn.com/static/np/p/bcd0402f17eec6489186f425ac27772a.jpg_400x400q75.jpg_.webp",
    name: "Smartphone",
    oldPrice: 699,
    discountPercentage: 20,
    newPrice: 699 - (699 * 20) / 100,
    ratings: 4,
  },
  {
    id: randomIdGenerator(),
    imgSrc:
      "https://img.drz.lazcdn.com/static/np/p/729dcf4fd6c5a3d5ae0ddb6935d5c47a.jpg_400x400q75.jpg_.webp",
    name: "Gaming Laptop",
    oldPrice: 1500,
    discountPercentage: 30,
    newPrice: 1500 - (1500 * 30) / 100,
    ratings: 5,
  },
  {
    id: randomIdGenerator(),
    imgSrc:
      "https://img.drz.lazcdn.com/static/np/p/f117601fe41617a5f0c95db959a2a038.png_400x400q75.png_.webp",
    name: "4K TV",
    oldPrice: 899,
    discountPercentage: 15,
    newPrice: 899 - (899 * 15) / 100,
    ratings: 2,
  },
  {
    id: randomIdGenerator(),
    imgSrc:
      "https://img.drz.lazcdn.com/static/np/p/90195cb631fde2c93dde3cd58681dbb8.png_400x400q75.png_.webp",
    name: "Bluetooth Speaker",
    oldPrice: 75,
    discountPercentage: 40,
    newPrice: 75 - (75 * 40) / 100,
    ratings: 3,
  },
];

export default flashSaleItems;
