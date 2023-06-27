import { Injectable } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { createUserDTO, updateUserDTO } from './dto/User.dto';
import { ErrorManager } from '../utils/error.manager';

@Injectable()
export class UsersService {
    /**
     *
     */
    constructor(
        @InjectRepository(UserEntity)
        private readonly repository: Repository<UserEntity>
    ) {

    }


    public async createUser(userDTO: createUserDTO): Promise<UserEntity> {
        try {
            return await this.repository.save(userDTO)
        } catch (error) {
            throw ErrorManager.createSignatureError(error.message);
        }
    }

    public async getUsers(): Promise<UserEntity[]> {
        try {
            const users: UserEntity[] = await this.repository.find();
            if (users.length === 0) {
                throw new ErrorManager({
                    type: 'BAD_REQUEST',
                    message: 'No se encontro resultado.'
                })
            }
            return users;
        } catch (error) {
            throw ErrorManager.createSignatureError(error.message);
        }
    }

    public async getUser(id: string): Promise<UserEntity> {
        try {
            const user: UserEntity = await this.repository.findOne({ where: { id: parseInt(id) } });
            if (!user) {
                throw new ErrorManager({
                    type: 'BAD_REQUEST',
                    message: 'No se encontro resultado.'
                })
            }
            return user;
        } catch (error) {
            throw ErrorManager.createSignatureError(error.message);
        }
    }

    public async updateUser(userDTO: updateUserDTO, id: string): Promise<UpdateResult> {
        try {
            const user = await this.repository.update(id, userDTO);
            if (user.affected === 0) {
                throw new ErrorManager({
                    type: 'BAD_REQUEST',
                    message: 'No se pudo actualizar el registro.'
                })
            }
            return user;
        } catch (error) {
            throw ErrorManager.createSignatureError(error.message);
        }
    }

    public async deleteUser(id: string): Promise<DeleteResult> {
        try {
            const user = await this.repository.delete(id);
            if (user.affected === 0) {
                throw new ErrorManager({
                    type: 'BAD_REQUEST',
                    message: 'No se pudo borrar el registro.'
                })
            }
            return user;
        } catch (error) {
            throw ErrorManager.createSignatureError(error.message);
        }
    }
}
