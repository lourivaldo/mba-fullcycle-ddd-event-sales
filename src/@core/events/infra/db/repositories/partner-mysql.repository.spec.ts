import { MySqlDriver } from '@mikro-orm/mysql';
import { MikroORM } from '@mikro-orm/mysql';
import { PartnerSchema } from '../schemas';
import { Partner } from '../../../domain/entities/partner.entity';
import { PartnerMysqlRepository } from './partner-mysql.repository';

test('partner repository', async () => {
  const orm = await MikroORM.init<MySqlDriver>({
    entities: [PartnerSchema],
    dbName: 'events',
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    type: 'mysql',
    forceEntityConstructor: true,
  });
  await orm.schema.refreshDatabase();
  const em = orm.em.fork();
  const partnerRepo = new PartnerMysqlRepository(em)
  const partner = Partner.create({ name: 'P1' })
  await partnerRepo.add(partner)
  await em.flush()
  await em.clear()
  
  let partnerFound = await partnerRepo.findById(partner.id)
  expect(partnerFound.id.equals(partner.id)).toBeTruthy()
  expect(partnerFound.name).toEqual('P1')

  partner.changeName('P1.1')
  await partnerRepo.add(partner)
  await em.flush()
  await em.clear()
  
  partnerFound = await partnerRepo.findById(partner.id)
  expect(partnerFound.id.equals(partner.id)).toBeTruthy()
  expect(partnerFound.name).toEqual('P1.1')

  let partners = await partnerRepo.findAll()
  expect(partners).toHaveLength(1)
  
  await partnerRepo.delete(partnerFound)
  await em.flush()
  await em.clear()

  partners = await partnerRepo.findAll()
  expect(partners).toHaveLength(0)

  await orm.close()
})
