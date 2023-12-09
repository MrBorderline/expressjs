require('./db')
const Product = require('./models/product')

async function main() {
    const product = new Product({
        name:'keyboard',
        description: 'kingstong  gamming keynboard',
        price: 150
    })
    
    const productSaved = await product.save();
    console.log(productSaved)
    

    // await product.save();
    // console.log(product)    
}

main();