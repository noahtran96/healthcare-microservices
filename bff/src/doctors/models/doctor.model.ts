import { Field, Float, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Doctor {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  specialty: string;

  @Field()
  hospital: string;

  @Field()
  avatar: string;

  @Field(() => Float)
  rating: number;

  @Field(() => Float)
  price: number;
}
