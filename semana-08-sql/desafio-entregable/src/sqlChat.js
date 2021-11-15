import knexLib from 'knex'

class ClienteSqlChat {
  constructor(options, tableName) {
    this.knex = knexLib(options)
    this.tableName = tableName
  }

  crearTabla() {
    return this.knex.schema.dropTableIfExists(this.tableName)
      .finally(() => {
        return this.knex.schema.createTable(this.tableName, table => {
          table.increments('id').primary();
          table.string('mail', 100).notNullable();
          table.string('hora', 100).notNullable();
          table.string('msg', 500);
        })
      })
  }

  pushItems(items) {
    return this.knex(this.tableName).insert(items)
  }

  getItems() {
    return this.knex(this.tableName).select('*')
  }

  deleteItemById(id) {
    return this.knex.from(this.tableName).where('id', id).del()
  }

  close() {
    this.knex.destroy();
  }
}

export default ClienteSqlChat