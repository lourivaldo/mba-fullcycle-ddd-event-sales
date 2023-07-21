import { Customer, CustomerId } from '../customer.entity';

test('should create customer', () => {
  let customer = Customer.create({
    name: 'Any',
    cpf: '049.192.120-97'
  })

  console.log(customer)
  expect(customer).toBeInstanceOf(Customer)
  expect(customer.id).toBeDefined()
  expect(customer.id).toBeInstanceOf(CustomerId)
  expect(customer.name).toBe('Any')
  expect(customer.cpf.value).toBe('04919212097')

  //  customer = new Customer({
  //    id: '123',
  //   name: 'Any',
  //   cpf: '049.192.120-97'
  // })
})
