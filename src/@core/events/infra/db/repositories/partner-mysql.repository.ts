import { IPartnerRepository } from '../../../domain/repositories/partner.repository.interface';
import { EntityManager } from '@mikro-orm/mysql';
import { Partner, PartnerId } from '../../../domain/entities/partner.entity';

export class PartnerMysqlRepository implements IPartnerRepository {
  constructor(private entityManager: EntityManager) {
  }
  async add(entity: Partner): Promise<void> {
    this.entityManager.persist(entity)
  }

  async findById(id: string | PartnerId): Promise<Partner | null> {
    return this.entityManager.findOneOrFail(Partner, {
      id: typeof id === 'string' ? new PartnerId(id) : id
    });
  }

  async findAll(): Promise<Partner[]> {
    return this.entityManager.find(Partner, {});
  }

  async delete(partner: Partner): Promise<void> {
    this.entityManager.remove(partner);
  }
}
