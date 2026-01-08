import iphone15 from "../assets/iphone15.jpg";
import samsungS23 from "../assets/samsung-s23.jpg";
import redmi13 from "../assets/redmi-note13.jpg";
import realmeNarzo from "../assets/realme-narzo.jpg";
import oneplusNord from "../assets/oneplus-nord.jpg";
import vivoV29 from "../assets/vivo-v29.jpg";
import oppoReno from "../assets/oppo-reno.jpg";
import motoG from "../assets/moto-g.jpg";

import hpPavilion from "../assets/hp-pavilion.jpg";
import dellInspiron from "../assets/dell-inspiron.jpg";
import lenovoIdea from "../assets/lenovo-ideapad.jpg";
import asusVivo from "../assets/asus-vivobook.jpg";
import macbookAir from "../assets/macbook-air.jpg";
import acerAspire from "../assets/acer-aspire.jpg";

import wirelessHeadphones from "../assets/wireless-headphones.jpg";
import earbuds from "../assets/earbuds.jpg";
import gamingHeadset from "../assets/gaming-headset.jpg";
import boatRockerz from "../assets/boat-rockerz.jpg";
import sonyXM from "../assets/sony-xm.jpg";

import powerbank from "../assets/powerbank.jpg";
import usbC from "../assets/usb-c.jpg";
import mouse from "../assets/mouse.jpg";
import keyboard from "../assets/keyboard.jpg";
import laptopBag from "../assets/laptop-bag.jpg";
import phoneStand from "../assets/phone-stand.jpg";

/* 🔹 COMMON DEFAULT DATA (sir-ku romba pidikkum 😌) */
const defaultHighlights = [
  "High Quality Product",
  "Durable & Reliable",
  "Value for Money",
  "Best Performance"
];

const defaultSpecifications = {
  Warranty: "1 Year",
  Return: "7 Days Replacement",
  Delivery: "Free Delivery"
};

const defaultOffers = [
  "10% Bank Discount",
  "No Cost EMI Available"
];

const products = [
  {
    id: 1,
    name: "iPhone 15",
    price: 75000,
    image: iphone15,
    description: "Apple iPhone 15 with A16 Bionic chip and OLED display.",
    highlights: defaultHighlights,
    specifications: { Brand: "Apple", Category: "Mobile Phone", ...defaultSpecifications },
    offers: defaultOffers
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    price: 65000,
    image: samsungS23,
    description: "Samsung Galaxy S23 with Snapdragon processor and AMOLED display.",
    highlights: defaultHighlights,
    specifications: { Brand: "Samsung", Category: "Mobile Phone", ...defaultSpecifications },
    offers: defaultOffers
  },
  {
    id: 3,
    name: "Redmi Note 13",
    price: 25000,
    image: redmi13,
    description: "Redmi Note 13 with powerful performance and long battery life.",
    highlights: defaultHighlights,
    specifications: { Brand: "Redmi", Category: "Mobile Phone", ...defaultSpecifications },
    offers: defaultOffers
  },
  {
    id: 4,
    name: "Realme Narzo",
    price: 15000,
    image: realmeNarzo,
    description: "Realme Narzo smartphone for daily usage.",
    highlights: defaultHighlights,
    specifications: { Brand: "Realme", Category: "Mobile Phone", ...defaultSpecifications },
    offers: defaultOffers
  },
  {
    id: 5,
    name: "OnePlus Nord",
    price: 30000,
    image: oneplusNord,
    description: "OnePlus Nord with smooth performance and AMOLED display.",
    highlights: defaultHighlights,
    specifications: { Brand: "OnePlus", Category: "Mobile Phone", ...defaultSpecifications },
    offers: defaultOffers
  },
  {
    id: 6,
    name: "Vivo V29",
    price: 28000,
    image: vivoV29,
    description: "Vivo V29 with premium camera and stylish design.",
    highlights: defaultHighlights,
    specifications: { Brand: "Vivo", Category: "Mobile Phone", ...defaultSpecifications },
    offers: defaultOffers
  },
  {
    id: 7,
    name: "Oppo Reno",
    price: 32000,
    image: oppoReno,
    description: "Oppo Reno with fast charging and AMOLED display.",
    highlights: defaultHighlights,
    specifications: { Brand: "Oppo", Category: "Mobile Phone", ...defaultSpecifications },
    offers: defaultOffers
  },
  {
    id: 8,
    name: "Moto G Power",
    price: 17000,
    image: motoG,
    description: "Moto G Power with strong battery backup.",
    highlights: defaultHighlights,
    specifications: { Brand: "Motorola", Category: "Mobile Phone", ...defaultSpecifications },
    offers: defaultOffers
  },

  {
    id: 9,
    name: "HP Pavilion",
    price: 55000,
    image: hpPavilion,
    description: "HP Pavilion laptop for work and study.",
    highlights: defaultHighlights,
    specifications: { Brand: "HP", Category: "Laptop", ...defaultSpecifications },
    offers: defaultOffers
  },
  {
    id: 10,
    name: "Dell Inspiron",
    price: 60000,
    image: dellInspiron,
    description: "Dell Inspiron laptop with smooth performance.",
    highlights: defaultHighlights,
    specifications: { Brand: "Dell", Category: "Laptop", ...defaultSpecifications },
    offers: defaultOffers
  },
  {
    id: 11,
    name: "Lenovo IdeaPad",
    price: 52000,
    image: lenovoIdea,
    description: "Lenovo IdeaPad laptop for students.",
    highlights: defaultHighlights,
    specifications: { Brand: "Lenovo", Category: "Laptop", ...defaultSpecifications },
    offers: defaultOffers
  },
  {
    id: 12,
    name: "Asus VivoBook",
    price: 48000,
    image: asusVivo,
    description: "Asus VivoBook lightweight laptop.",
    highlights: defaultHighlights,
    specifications: { Brand: "Asus", Category: "Laptop", ...defaultSpecifications },
    offers: defaultOffers
  },
  {
    id: 13,
    name: "MacBook Air",
    price: 95000,
    image: macbookAir,
    description: "Apple MacBook Air with M2 chip.",
    highlights: defaultHighlights,
    specifications: { Brand: "Apple", Category: "Laptop", ...defaultSpecifications },
    offers: defaultOffers
  },
  {
    id: 14,
    name: "Acer Aspire",
    price: 50000,
    image: acerAspire,
    description: "Acer Aspire laptop with SSD storage.",
    highlights: defaultHighlights,
    specifications: { Brand: "Acer", Category: "Laptop", ...defaultSpecifications },
    offers: defaultOffers
  },

  {
    id: 15,
    name: "Wireless Headphones",
    price: 3000,
    image: wirelessHeadphones,
    description: "Wireless headphones with noise cancellation.",
    highlights: defaultHighlights,
    specifications: { Brand: "Generic", Category: "Audio", ...defaultSpecifications },
    offers: defaultOffers
  },
  {
    id: 16,
    name: "Bluetooth Earbuds",
    price: 2500,
    image: earbuds,
    description: "Compact earbuds with clear sound.",
    highlights: defaultHighlights,
    specifications: { Brand: "Generic", Category: "Audio", ...defaultSpecifications },
    offers: defaultOffers
  },
  {
    id: 17,
    name: "Gaming Headset",
    price: 4500,
    image: gamingHeadset,
    description: "Gaming headset with surround sound.",
    highlights: defaultHighlights,
    specifications: { Brand: "Generic", Category: "Audio", ...defaultSpecifications },
    offers: defaultOffers
  },
  {
    id: 18,
    name: "Boat Rockerz",
    price: 2000,
    image: boatRockerz,
    description: "Boat Rockerz wireless earphones.",
    highlights: defaultHighlights,
    specifications: { Brand: "Boat", Category: "Audio", ...defaultSpecifications },
    offers: defaultOffers
  },
  {
    id: 19,
    name: "Sony WH-1000XM",
    price: 18000,
    image: sonyXM,
    description: "Sony premium noise cancelling headphones.",
    highlights: defaultHighlights,
    specifications: { Brand: "Sony", Category: "Audio", ...defaultSpecifications },
    offers: defaultOffers
  },

  {
    id: 20,
    name: "Power Bank",
    price: 1500,
    image: powerbank,
    description: "10000mAh power bank with fast charging.",
    highlights: defaultHighlights,
    specifications: { Brand: "Generic", Category: "Accessories", ...defaultSpecifications },
    offers: defaultOffers
  },
  {
    id: 21,
    name: "USB Type-C Cable",
    price: 500,
    image: usbC,
    description: "Fast charging USB Type-C cable.",
    highlights: defaultHighlights,
    specifications: { Brand: "Generic", Category: "Accessories", ...defaultSpecifications },
    offers: defaultOffers
  },
  {
    id: 22,
    name: "Wireless Mouse",
    price: 900,
    image: mouse,
    description: "Ergonomic wireless mouse.",
    highlights: defaultHighlights,
    specifications: { Brand: "Generic", Category: "Accessories", ...defaultSpecifications },
    offers: defaultOffers
  },
  {
    id: 23,
    name: "Keyboard",
    price: 5000,
    image: keyboard,
    description: "Comfortable wired keyboard.",
    highlights: defaultHighlights,
    specifications: { Brand: "Generic", Category: "Accessories", ...defaultSpecifications },
    offers: defaultOffers
  },
  {
    id: 24,
    name: "Laptop Bag",
    price: 1800,
    image: laptopBag,
    description: "Durable laptop bag.",
    highlights: defaultHighlights,
    specifications: { Brand: "Generic", Category: "Accessories", ...defaultSpecifications },
    offers: defaultOffers
  },
  {
    id: 25,
    name: "Phone Stand",
    price: 400,
    image: phoneStand,
    description: "Adjustable phone stand.",
    highlights: defaultHighlights,
    specifications: { Brand: "Generic", Category: "Accessories", ...defaultSpecifications },
    offers: defaultOffers
  }
];

export default products;
