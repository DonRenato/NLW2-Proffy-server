import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('class_eschedule', table => {
        table.increments('id').primary();
        table.integer('weekday').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        table.integer('class_Id')
            .notNullable()
            .references('id')
            .inTable('classes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
    
}

export async function down(knex: Knex){
    return knex.schema.dropTable('class_schedule');
}