import { UserCreateInput } from '@dtos/user/user-create.input';
import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma.service';
// import { LoginResponse } from './dto/login-response';
// import { LoginUserInput } from '../auth/dto/login-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserInput: UserCreateInput) {
    // find existing user by email if exists return error message else create new user and return success message
    const user = await this.prismaService.user.findUnique({
      where: { email: createUserInput.email },
    });
    // if user exists return error message
    if (user) {
      throw new HttpException('User already exists', 400);
    } else {
      const createdUser = await this.prismaService.user.create({
        data: {
          ...createUserInput,
        },
        include: {
          _count: true,
        },
      });
      return createdUser;
    }
  }

  async findAll(take = 10) {
    const users = await this.prismaService.user.findMany({
      include: {
        _count: true,
      },
      take,
    });
    return users;
  }

  async getShops(ownerId: number, take = 10) {
    const shops = await this.prismaService.shop.findMany({
      where: {
        owners: {
          some: {
            userId: ownerId,
          },
        },
      },
      include: {
        _count: true,
        // products: true,
        // owners: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      take,
    });
    return shops;
  }

  async findOne(id: number) {
    const shop = await this.prismaService.user.findUnique({
      where: { id },
      include: {
        _count: true,
      },
    });
    return shop;
  }

  async findOneByEmail(email: string) {
    const user = await this.prismaService.user.findUnique({
      where: { email },
    });
    return user;
  }

  async update(updateUserInput: UpdateUserInput) {
    const updatedUser = await this.prismaService.user.update({
      where: { id: updateUserInput.id },
      data: {
        ...updateUserInput,
      },
    });
    return updatedUser;
  }

  async remove(id: number) {
    const deletedUser = await this.prismaService.user.delete({
      where: { id },
    });
    return deletedUser;
  }
}
