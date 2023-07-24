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

  const section = EventSection.create({
    name: 'Section 1',
    description: 'any',
    total_spots: 100,
    price: 1000
  })
  event.sections.add(section)
  const spot = EventSpot.create()
  section.spots.add(spot)
  
  console.dir(event.toJSON(), { depth: 10 })
})
