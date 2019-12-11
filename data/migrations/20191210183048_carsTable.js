exports.up = function(knex) {
	return knex.schema.createTable("car_dealer", tbl => {
		// primary key, called "id", an integer, auto-increments
		tbl.increments();

		// .unique() is a constraint (rules we define to protect against invalid data)
		tbl
			.string("VIN")
			.notNullable()
			.unique();

		tbl
			.string("make")
			.notNullable()
			.index(); // makes searching for vegetables using this column faster

		tbl
			.string("model")
			.notNullable()
			.index();

		tbl.integer("mileage").notNullable();

		tbl.string("trans_type", 128);
		tbl.string("title", 128);
    });
    
    // return knex.schema.table('cars', table=>{

    //     table.increments()
    //     table.renameColumn("Make", "make")
    //     table.renameColumn("Model", "model")
    //     table.renameColumn("Mileage", "mileage")
    //     table.renameColumn("Transmission Type", "trans_type")
    //     table.renameColumn("Title", "title")




    // })
};

exports.down = function(knex) {};
