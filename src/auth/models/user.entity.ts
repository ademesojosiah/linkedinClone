import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import {Role} from './user.enum'
import { FeedPostEntity } from "src/feed/models/post.entity";

@Entity('users')
export class UserEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName:string;
    
    @Column()
    lastName:string;

    @Column()
    password:string;

    @Column({unique:true})
    email:string;
    
    @Column({type:"enum", enum: Role, default: Role.USER })
    role:Role;

    @OneToMany(()=> FeedPostEntity, (feedPostEntity)=>{feedPostEntity.author })
    feedPosts:FeedPostEntity[]
}