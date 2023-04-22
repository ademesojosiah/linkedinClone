import { Body, Controller, Post, Get, Put, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { FeedService } from '../services/feed.service';
import { FeedPost } from '../models/post.interface';
import { DeleteResult, UpdateResult } from 'typeorm';
import { JwtGuard } from 'src/auth/guard/jwt.guard';

@Controller('feed')
export class FeedController {
    constructor(
        private feedService: FeedService
    ){}


  @UseGuards(JwtGuard) 
  @Post()
  create(@Body() post:FeedPost):Promise<FeedPost>{
    return this.feedService.createPost(post)
  }

  @Get()
  findAll():Promise<FeedPost[]>{
    return this.feedService.findAllPost()
  }

  @Get('all')
  async getAllPosts(@Query('take') take:number= 20, @Query('skip') skip:number = 0): Promise<FeedPost[]>{ 
    take = take >20 ? 20 : take;
    return await this.feedService.getPosts(take,skip)

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
