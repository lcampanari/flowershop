'use strict'

/*
|--------------------------------------------------------------------------
| ProductSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class ProductSeeder {
  async run () {
    // const products = await Database.table('products')
    // console.log(products)
    await Factory.model('App/Models/Product').create({
      color: 'Blue',
      price: 80,
      rating: 4,
      image: 'product-1.png'
    })
    await Factory.model('App/Models/Product').create({
      color: 'Orange',
      price: 17.6,
      rating: 4.6,
      image: 'product-2.png'
    })
    await Factory.model('App/Models/Product').create({
      color: 'Pink',
      price: 40,
      rating: 5,
      image: 'product-3.png'
    })
  }
}

module.exports = ProductSeeder
