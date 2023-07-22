import { Customer, CustomerId } from '../customer.entity';
import Cpf from '../../../../common/domain/value-objects/cpf.vo';

test('should create customer', () => {
  const customer = Customer.create({
    name: 'Any',
    cpf: '049.192.120-97'
  })

  expect(customer).toBeInstanceOf(Customer)
  expect(customer.id).toBeDefined()
  expect(customer.id).toBeInstanceOf(CustomerId)
  expect(customer.name).toBe('Any')
  expect(customer.cpf.value).toBe('04919212097')

  const customer2 = new Customer({
    id: new CustomerId(customer.id.value),
    name: 'Any',
    cpf: new Cpf('93863219040')
  })
  console.log(customer.equals(customer2))
  
  //  customer = new Customer({
  //    id: '123',
  //   name: 'Any',
  //   cpf: '049.192.120-97'
  // })
})
