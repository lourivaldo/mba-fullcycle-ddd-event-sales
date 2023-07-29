import { IRepository } from '../../../common/domain/repository-interface';
import { Partner } from '../entities/partner.entity';

export interface IEventRepository extends IRepository<Partner> {}
