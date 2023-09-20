const mongoose = require('mongoose');
const Product = require('./models/products');

mongoose.connect('mongodb://127.0.0.1:27017/GLA-DB')
    .then(() => console.log('DB connected'))
    .catch((err) => console.log(err));



const dummyProducts = [
    {
        name: "iPhone 10",
        image: "https://imagineonline.store/cdn/shop/products/MPXV3HN_A_1.jpg?v=1662718673",
        price: 200,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        name: "MacBook Air",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359481",
        price: 1000,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        name: "Nike Shoes",
        image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7b12d5de-4b27-41ec-b05f-fa3bdb71e4d4/pegasus-40-road-running-shoes-ztffW8.png",
        price: 200,
        description: "Nike shoes offers great comfort and maintain your feet posture every time you walk. Nike is one of the most popular brands of footwear"
    },
    {
        name: "MI Deluxe",
        image: "https://i.gadgets360cdn.com/products/large/oneplus-nord-buds-ce-db-612x800-1659342014.jpg",
        price: 80,
        description: "The all-new OnePlus Nord Buds2r with enhanced deep bass and seamless connectivity. Get over a ful day of gaming and jamming"
    },
    {
        name: "Knife",
        image: "https://images-cdn.ubuy.co.in/6342f332199f1c3fd90c1659-kitchen-knife-set-with-wooden-block.jpg",
        price: 50,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Buy Knife Set Kitchen Knives Online: It depends upon you, which kind of Kitchen... Check Knife Set Kitchen Knives Prices"
    },
    {
        name: "Camera",
        image: "https://m.media-amazon.com/images/I/81LskAU5h1L._AC_UF1000,1000_QL80_.jpg",
        price: 800,
        description: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy galley of type and scrambled it to make a type specimen book.cover Canon's line up of Cinema Cameras suitable for every"
    },
    {
        name: "SS Drone",
        image: "https://5.imimg.com/data5/VH/LT/MY-2499554/drone-dji-inspire-2.jpg",
        price: 1500,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    
]


async function seedData() {
    await Product.deleteMany({});
    await Product.create(dummyProducts);
    console.log('DB Seeded Successfully');
}

seedData();