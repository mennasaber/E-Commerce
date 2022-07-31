export interface IBaseService<T> {
  Create(entity: T): Promise<T>;
  ReadAll(): Promise<T[]>;
  Read(id: string): Promise<T>;
  Update(id: string, entity: T);
  Delete(id: string, entity: T);
}
