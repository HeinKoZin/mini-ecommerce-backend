import { Module } from '@nestjs/common';
import { ShopsService } from './shops.service';
import { ShopsResolver } from './shops.resolver';
import { PrismaService } from '@prisma.service';

@Module({
  providers: [ShopsResolver, ShopsService, PrismaService],
})
export class ShopsModule {}
