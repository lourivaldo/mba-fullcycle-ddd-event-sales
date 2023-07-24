import { Partner } from '../partner.entity';

test('should create event', () => {
  const partner = Partner.create({
    name: 'any'
  })

  const event = partner.initEvent({
    name: 'Any',
    description: 'any',
    date: new Date(),
  })

  expect(event).toBeDefined()
})

test('should create event', () => {
  const partner = Partner.create({
    name: 'any'
  })
  partner.changeName('any 2')

  expect(partner.name).toBe('any 2')
})
