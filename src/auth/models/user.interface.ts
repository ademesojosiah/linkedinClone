import { FeedPost } from "src/feed/models/post.interface";
import { Role } from "./user.enum";

export interface User{
    id?:number;
    firstName?:string;
    lastName?:string;
    email?:string;
    password?:string;
    role:Role;
    feedPosts?:FeedPost[];

}