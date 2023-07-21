import { Name } from './name.vo';

test('should create a valid name', () => {
  const name = new Name('Loro')
  expect(name.value).toBe('Loro')
})
