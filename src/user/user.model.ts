import { Column, Model, Table } from 'sequelize-typescript';

@Table({
    tableName: 'user'
})
export class User extends Model {
    @Column({ primaryKey: true })
    id: number;

    @Column
    firstName: string;

    @Column
    lastName: string;

    @Column
    email: string;

    @Column
    createdOn: Date;

    @Column
    modifiedOn: Date;
}