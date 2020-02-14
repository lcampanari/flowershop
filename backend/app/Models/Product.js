'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Env = use('Env')

class Product extends Model {
  static get computed () {
    return ['thumbnail_url']
  }

  getThumbnailUrl ({ image }) {
    const url = Env.get('APP_URL')
    return `${url}/uploads/product/${image}`
  }
}

module.exports = Product
