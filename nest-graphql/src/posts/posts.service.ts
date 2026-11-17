import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { CreatePostInput } from './dto/create-post.input';

@Injectable()
export class PostsService {
    constructor(@InjectRepository(Post) private postsRepository: 
    Repository<Post>,
    ) {}

    findAll(): Promise<Post[]> {
         return this.postsRepository.find();
    }

    async findProductById(id: number): Promise<Post | null> {
        return this.postsRepository.findOne({
            where: {
                id,
            },
        });
    }

    createPost(post: CreatePostInput): Promise<Post>{
        const newPost = this.postsRepository.create(post)
        return this.postsRepository.save(newPost);
    }
}
