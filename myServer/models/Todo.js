import Sequelize from 'sequelize';
import { sequelize } from '../databases/database';
import Task from './Task';

// const Task =require ('./Task');


const Todo = sequelize.define( 'todo', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type : Sequelize.STRING
    },
    priority: {
        type: Sequelize.TINYINT
    },
    description: {
        type: Sequelize.TEXT
    },
    duedate:{
        type: Sequelize.DATE
    }
}, {
    // Don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
});

// Tdod has many  task
Todo.hasMany(Task, { foreignKey: 'todoid', sourceKey: 'id'});

// task belong to one todo
Task.belongsTo(Todo, { foreignKey: 'todoid', targetKey: 'id'}); 
 
export default Todo;