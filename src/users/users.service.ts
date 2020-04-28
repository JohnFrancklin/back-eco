import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interface/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { Model } from 'mongoose';
import { debug } from 'console';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private userModel: Model<User>) {}

    async create(createUserDto: CreateUserDto) {
        let createdUser = new this.userModel(createUserDto);
        return await createdUser.save();
     }

     async findOne(options: object): Promise<User> {
        return await this.userModel.findOne(options).exec();
    }

    async findOneByUsername(username): Model<User> {
        return await this.userModel.findOne({username: username});
    }

    async findAll(): Promise<User[]> {
        return await this.userModel.find().exec();
    }

    async findById(ID: number): Promise<User> {
        return await this.userModel.findById(ID).exec();
    }

    async update(ID: number, newValue: User): Promise<User> {
        const user = await this.userModel.findById(ID).exec();

        if (!user._id) {
            debug('user not found');
        }

        await this.userModel.findByIdAndUpdate(ID, newValue).exec();
        return await this.userModel.findById(ID).exec();
    }

    async delete(ID: number): Promise<string> {
        try {
            await this.userModel.findByIdAndRemove(ID).exec();
            return 'The user has been deleted';
        }
        catch (err){
            debug(err);
            return 'The user could not be deleted';
        }
    }
    
}
