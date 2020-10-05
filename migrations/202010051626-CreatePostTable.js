/*
 * @Copyright ParanoiA
 * @Created: 10/5/20, 4:27 PM
 * @Date : 2020.
 * @author : M.ALi Kheiry
 *
 *    /\_/\
 *  =( °w° )=       Meow
 *    )   (  //
 *   (__ __)//
 */

'use strict';
module.exports = {
	up: (QueryInterface, Sequelize) => {
		return QueryInterface.createTable('Posts', {
			id: {
				allowNull: false,
				primaryKey: false,
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4
			},
			createAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			title: {
				allowNull: false,
				type: Sequelize.STRING
			},
			content: {
				allowNull: true,
				type: Sequelize.STRING
			}
		})
	},
	down: (QueryInterface, Sequelize) => {
		return QueryInterface.dropTable('Posts');
	}
}
