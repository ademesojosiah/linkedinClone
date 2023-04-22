import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt'
import { User } from '../models/user.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../models/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository:Repository<UserEntity>,
        private jwtServices:JwtService,

    ){}

    async hashPassword(password:string):Promise<string>{
       return await bcrypt.hash(password,12)
    }


    async registerAccount(user:User): Promise<User>{
        const {firstName,lastName,email,password} = user

       user.password = await this.hashPassword(password)
       
      const newUser = this.userRepository.create(user)

      return this.userRepository.save(newUser)
    }

    async validateUser(email:string,passwword:string):Promise<User>{

        const userInfo = await this.userRepository.findOne({where:{email}})

        const isValidPassword = userInfo ? bcrypt.compare(passwword,userInfo.password): false

        if(isValidPassword){
            delete userInfo.password
            return userInfo
        }

    }
    async login(user:User):Promise<string>{
        const {email, password} = user

        const userInfo = await this.validateUser(email,password)

        const jwt = await this.jwtServices.signAsync({userInfo})

        return jwt

    }

}
