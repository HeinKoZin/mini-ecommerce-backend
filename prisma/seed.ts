import { PrismaClient, Shop, User, UserType } from '@prisma/client';
import { faker } from '@faker-js/faker';

type InputUserType = Omit<User, 'id' | 'createdAt' | 'updatedAt'>;
type InputShopType = Omit<Shop, 'id' | 'createdAt' | 'updatedAt'>;

// generate fake data of a user
const generateUser = () => {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    role: faker.random.arrayElement([UserType.USER]),
  };
};

// generate fake data of a shop
const generateShop = () => {
  return {
    name: faker.company.companyName(),
    address: faker.address.streetAddress(),
    phone: faker.phone.phoneNumber(),
  };
};

// insert data into database with prisma
const seedUsers = async () => {
  const prisma = new PrismaClient();
  const users: InputUserType[] = [
    {
      name: 'Hein Ko Zin',
      email: 'heinkozin4@gmail.com',
      password: 'eikaykhine',
      role: 'ADMIN',
    },
    {
      name: 'Ei Kay Khine',
      email: 'eikaykhine71@gmail.com',
      password: 'eikaykhine',
      role: 'ADMIN',
    },
  ];

  for (let i = 0; i < 100; i++) {
    users.push(generateUser());
  }
  await prisma.user.createMany({ data: users, skipDuplicates: true });
};

const seedShops = async () => {
  const prisma = new PrismaClient();
  const shops: InputShopType[] = [
    {
      name: 'Kay Kay',
      address: 'No.253, St.51, Botahtaung',
      phone: '0941097449',
    },
    {
      name: 'Hein Hein',
      address: 'No.253, St.51, Botahtaung',
      phone: '09950668891',
    },
  ];

  for (let i = 0; i < 100; i++) {
    shops.push(generateShop());
  }
  await prisma.shop.createMany({ data: shops, skipDuplicates: true });
};

seedUsers();
seedShops();
