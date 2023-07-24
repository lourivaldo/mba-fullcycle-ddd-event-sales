import { Event } from '../event.entity';
import { PartnerId } from '../partner.entity';

test('should create event', () => {
  const event = Event.create({
    name: 'Any',
    description: 'any',
    date: new Date(),
    partner_id: new PartnerId()
  })

  event.addSection({
    name: 'Section 1',
    description: 'any',
    total_spots: 100,
    price: 1000
  })
  expect(event.sections.size).toBe(1);
  expect(event.total_spots).toBe(100);
  const [section] = event.sections
  expect(section.spots.size).toBe(100);
  console.dir(event.toJSON(), { depth: 10 })
})

test('should publish', () => {
  const event = Event.create({
    name: 'Any',
    description: 'any',
    date: new Date(),
    partner_id: new PartnerId()
  })

  event.addSection({
    name: 'Section 1',
    description: 'any',
    total_spots: 100,
    price: 1000
  })

  event.addSection({
    name: 'Section 2',
    description: 'any',
    total_spots: 200,
    price: 2000
  })

  event.publishAll()
  
  expect(event.is_published).toBe(true);
  const [section1, section2] = event.sections.values();
  expect(section1.is_published).toBe(true);
  [...section1.spots, ...section2.spots].forEach((spot) => {
    expect(spot.is_published).toBe(true);  
  })
})
