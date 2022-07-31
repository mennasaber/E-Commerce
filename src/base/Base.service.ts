import { IBaseService } from './IBase.service';
import { Model } from 'mongoose';
export class BaseService<T> implements IBaseService<T> {
  constructor(private entityModel: Model<T>) {}
  Create(entity: T): Promise<T> {
    return this.entityModel.create(entity);
  }
  ReadAll(): Promise<T[]> {
    return this.entityModel.find().exec();
  }
  Read(id: string): Promise<T> {
    return this.entityModel.findById(id).exec();
  }
  Update(id: string, entity: T) {
    return this.entityModel.findByIdAndUpdate(id, entity, { new: true });
  }
  Delete(id: string) {
    return this.entityModel.findByIdAndUpdate(id, { IsDeleted: true });
  }
}
