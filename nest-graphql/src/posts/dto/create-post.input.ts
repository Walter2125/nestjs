import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator'

@InputType()
export class CreatePostInput {
    @MinLength(3, {
        message: 'Title is too short',
    })
    @MaxLength(100, {
        message: 'Title is too long',
    })
    @IsNotEmpty({
        message: 'Title is requerid',
    })
    @Field()
    title: string;

    @MaxLength(400)
    @Field({ nullable: true})
    content?: string;
}