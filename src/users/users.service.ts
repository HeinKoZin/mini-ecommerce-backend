import { UserCreateInput } from '@dtos/user/user-create.input';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@prisma.service';
import { UpdateUserInput } from './dto/update-user.input';

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
    const shops = [];
    const res = await this.prismaService.usersOnShops.findMany({
      where: {
        userId,
      },
      select: {
        shop: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    res.forEach(async (shop) => {
      await shops.push(shop.shop);
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

  async update(updateUserInput: UpdateUserInput) {
    const updatedUser = await this.prismaService.user.update({
      where: { id: updateUserInput.id },
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
