import { UserCreateInput } from '@dtos/user/user-create.input';
import { UserUpdateInput } from '@dtos/user/user-update.input';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserInput: UserCreateInput) {
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
    const users = await this.prismaService.user.findMany({
      include: {
        _count: true,
      },
    });
    return users;
  }

  async getShops(userId: number) {
    const shops = await this.prismaService.usersOnShops.findMany({
      where: {
        userId,
      },
      include: {
        shop: true,
        user: true,
      },
    });
    return shops;
  }

  async findOne(id: number) {
    return await this.prismaService.user.findUnique({
      where: { id },
      include: {
        _count: true,
      },
    });
  }

  async update(id: number, updateUserInput: UserUpdateInput) {
    const updatedUser = await this.prismaService.user.update({
      where: { id },
      data: {
        ...updateUserInput,
      },
    });
    return updatedUser;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
