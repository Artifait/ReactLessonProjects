import { Tag } from './tag';

export interface Task {
  id: string;
  title: string;
  description?: string;
  tags: Tag[];
  createdAt: Date;
}
