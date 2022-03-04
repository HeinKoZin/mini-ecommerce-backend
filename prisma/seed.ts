import { PrismaClient, User, UserType } from '@prisma/client';
import { faker } from '@faker-js/faker';

type InputUserType = Omit<User, 'id' | 'createdAt' | 'updatedAt'>;

// generate fake data
const generateUser = () => {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    role: faker.random.arrayElement([UserType.USER]),
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

seedUsers();
