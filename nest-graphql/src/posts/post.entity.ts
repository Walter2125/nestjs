import { ObjectType, Field, Int } from '@nestjs/graphql'
import { Column, PrimaryGeneratedColumn, Entity, ManyToOne } from 'typeorm'
import { Author } from '../authors/entities/author.entity';

// Relacion de uno a mucho
// muchas publicaciones pertenecen a un autor; un autor puede tener muchas publicaciones

@Entity()
@ObjectType()
export class Post {
    @PrimaryGeneratedColumn()
    @Field((type) => Int)
    id: number;

    @Column()
    @Field()
    title: string;

    @Column({type: 'text', nullable: true })
    @Field({nullable: true})
    content?: string;

    @Column()
    @Field(() => Int)
    authorId: number;

    @ManyToOne(() => Author, (author) => author.posts)
    @Field(() => Author)
    author: Author
}