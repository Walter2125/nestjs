import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from '../../posts/post.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

// Relacion de uno a mucho
// muchas publicaciones pertenecen a un autor; un autor puede tener muchas publicaciones

@Entity()
@ObjectType()
export class Author {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => Post, (post) => post.author)
  @Field(() => [Post], {nullable: true})
  posts: Post[];
}

