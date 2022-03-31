import { CurrenciesOnProducts } from '@generated/prisma-nestjs-graphql/currencies-on-products/currencies-on-products.model';
import {
  PrismaClient,
  Product,
  ProductStatus,
  Shop,
  User,
  UserType,
} from '@prisma/client';
import { faker } from '@faker-js/faker';
import { CreateShopInput } from '@shops/dto/create-shop.input';

type InputUserType = Omit<User, 'id' | 'createdAt' | 'updatedAt'>;
type InputShopType = Omit<Shop, 'id' | 'createdAt' | 'updatedAt'>;
type InputProductType = Omit<Product, 'id' | 'createdAt' | 'updatedAt'>;

// generate fake data of a user
const generateUser = () => {
  return {
    name: faker.name.findName(),
    email: faker.internet.email().toLowerCase(),
    password: faker.internet.password(),
    role: faker.random.arrayElement([UserType.USER]),
  };
};

// generate fake data of a shop
const generateShop = () => {
  return {
    name: faker.company.companyName(),
    address: faker.address.streetAddress(),

    // generate unique company name without spaces
    slug: faker.company
      .companyName()
      .toLowerCase()
      .replace(',', '')
      .replace(/\s/g, ''),
  };
};

// generate fake data of a product
const generateProduct = () => {
  return {
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    // quantity: faker.datatype.number({ max: 25 }),
    // stock: {
    //   quantity: faker.datatype.number({ max: 25 }),
    // },
    product_code: faker.random.alphaNumeric(10).toUpperCase(),
    status: faker.random.arrayElement([
      ProductStatus.AVAILABLE,
      ProductStatus.STOCK_OUT,
      ProductStatus.PRE_ORDER,
    ]),
    cover_photo: faker.image.imageUrl(),
    shopId: 1,
  };
};

const prisma = new PrismaClient();
const products = prisma.product.findMany({});
const currencies = prisma.currency.findMany({});
const users = prisma.user.findMany({});
const shops = prisma.shop.findMany({});

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

  const isUserExist = prisma.user.findMany({});

  isUserExist ? seedShops() : console.log('User not found');
};

const seedShops = async () => {
  const prisma = new PrismaClient();
  const shops: CreateShopInput[] = [
    {
      name: 'Kay Kay',
      address: 'No.253, St.51, Botahtaung',
      // phone: '0941097449',
      slug: 'kaykay',
    },
    {
      name: 'Hein Hein',
      address: 'No.253, St.51, Botahtaung',
      // phone: '09950668891',
      slug: 'heinhein',
    },
  ];

  for (let i = 0; i < 100; i++) {
    shops.push(generateShop());
  }
  await prisma.shop.createMany({ data: shops, skipDuplicates: true });

  const isShopExist = prisma.shop.findMany({});

  isShopExist ? seedProducts() : console.log('Shop not found');
};

const seedProducts = async () => {
  const prisma = new PrismaClient();
  const products: InputProductType[] = [];

  for (let i = 0; i < 100; i++) {
    products.push(generateProduct());
  }
  await prisma.product.createMany({ data: products, skipDuplicates: true });

  const isProductExist = prisma.product.findMany({});
  isProductExist ? seedCurrencies() : console.log('Product not found');
};

const seedCurrencies = async () => {
  const isCurrencyExist = await prisma.currency.create({
    data: {
      name: 'Kyat',
      code: 'MMK',
    },
  });

  isCurrencyExist ? seedPrices() : console.log('Currency not found');
};

const seedPrices = async () => {
  const prisma = new PrismaClient();
  const pro = [];

  (await products).forEach((product) => {
    pro.push(product);
  });

  pro.forEach(async (product) => {
    await prisma.currenciesOnProducts.create({
      data: {
        sell_price: +faker.commerce.price(),
        productId: product.id,
        currencyId: 1,
      },
    });
  });
};

seedUsers();
