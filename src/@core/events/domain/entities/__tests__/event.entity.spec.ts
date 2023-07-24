import { Event } from '../event.entity';
import { PartnerId } from '../partner.entity';
import { EventSection } from '../event-section.entity';
import { EventSpot } from '../event-spot.entity';

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
