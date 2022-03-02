import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserInput: CreateUserInput) {
    // find existing user by email if exists return error message else create new user and return success message
    const user = await this.prismaService.user.findUnique({
      where: { email: createUserInput.email },
    });

    if (user) {
      throw new Error('User already exists');
    } else {
      const createdUser = await this.prismaService.user.create({
        data: {
          ...createUserInput,
        },
      });
      return createdUser;
    }
  }

  async findAll() {
    const users = await await this.prismaService.user.findMany({});
    return users;
  }

  // async getRole(id: number) {
  //   return await this.prismaService.role.findUnique({
  //     where: { id },
  //   });
  // }

  async findOne(id: number): Promise<UserEntity> {
    return await this.prismaService.user.findUnique({
      where: { id },
    });
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
