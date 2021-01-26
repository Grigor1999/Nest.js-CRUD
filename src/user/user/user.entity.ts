import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, Generated, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import {IsOptional, IsString,IsEmail, IsNotEmpty, MaxLength, MinLength, Matches } from 'class-validator';
import { CrudValidationGroups } from '@nestjsx/crud';
import { ApiProperty } from '@nestjs/swagger';
import * as bcrypt from 'bcrypt';

import moment = require("moment");
import {TABLE_PREFIX} from "../../definitions";
import { Role } from "../../role/role/role.entity";

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity({ name: TABLE_PREFIX + 'users' })
export class User extends BaseEntity {

    @PrimaryColumn({ type: 'char', length: 36, nullable: false })
    @Generated('uuid')
    @ApiProperty({ example: '10ac3aed-4979-4fe8-82d1-c43c7183d446' })
    id!: string;

    @IsOptional({ groups: [UPDATE] })
    @IsNotEmpty({ groups: [CREATE] })
    @IsString({ always: true })
    @Column({ type: 'varchar', nullable: false, unique: true  })
    @ApiProperty()
    name!: string;

    @IsOptional({ groups: [UPDATE] })
    @IsNotEmpty({ groups: [CREATE] })
    @IsString({ always: true })
    @MaxLength(255, { always: true })
    @IsEmail({ require_tld: false }, { always: true })
    @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
    @ApiProperty()
    email!: string ;

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
    @Column( {type: 'varchar', nullable: false})
    @ApiProperty()
    password!: string;

    @CreateDateColumn({
        type: 'datetime',
        transformer: {
          from: (value: string) => moment.utc(value).toISOString(),
          to: (value: moment.MomentInput) => moment.utc(value).format('YYYY-MM-DD HH:mm:ss.SSS'),
        },
      })
    @ApiProperty({ example: new Date().toISOString() })
    createdAt!: string;

    @CreateDateColumn({
    type: 'datetime',
    transformer: {
        from: (value: string) => moment.utc(value).toISOString(),
        to: (value: moment.MomentInput) => moment.utc(value).format('YYYY-MM-DD HH:mm:ss.SSS'),
    },
    })
    @ApiProperty({ example: new Date().toISOString() })
    updatedAt!: string;
    @BeforeInsert()
    async hashPassword() {
       this.password = await bcrypt.hash(this.password,10);
    }

  
}
