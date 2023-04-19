import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { FeedPostEntity } from '../models/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedPost } from '../models/post.interface';

@Injectable()
export class FeedService {
    constructor(
        @InjectRepository(FeedPostEntity)
        private readonly feedPostRepository: Repository<FeedPostEntity>
    ){}

    createPost(feedPost: FeedPost): Promise<FeedPost> {
        return this.feedPostRepository.save(feedPost)

    }

    findAllPost(): Promise<FeedPost[]>{
        return this.feedPostRepository.find()
    }

    updatePost(id:number , feedPost:FeedPost ): Promise<UpdateResult>{
        return this.feedPostRepository.update(id,feedPost)
    }

    deletePost(id:number ):Promise<DeleteResult>{
        return this.feedPostRepository.delete(id);
    }

    async getPosts(take:number=1 ,skip : number=1):Promise<FeedPost[]>{
        const [posts, _] = await this.feedPostRepository.findAndCount({take, skip})
        return posts
    }
}
