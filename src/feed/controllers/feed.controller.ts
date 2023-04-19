import { Body, Controller, Post, Get, Put, Param, Delete } from '@nestjs/common';
import { FeedService } from '../services/feed.service';
import { FeedPost } from '../models/post.interface';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('feed')
export class FeedController {
    constructor(
        private feedService: FeedService
    ){}

  @Post()
  create(@Body() post:FeedPost):Promise<FeedPost>{
    return this.feedService.createPost(post)
  }

  @Get()
  findAll():Promise<FeedPost[]>{
    return this.feedService.findAllPost()
  }

  @Put(':id')
  update(
    @Body() post:FeedPost, 
    @Param('id') postId:number
    ):Promise<UpdateResult> {
    return this.feedService.updatePost(postId,post)
  }

  @Delete(':id')
  delete(
    @Param('id') postId:number
  ):Promise<DeleteResult>{
    return this.feedService.deletePost(postId)
  }

}