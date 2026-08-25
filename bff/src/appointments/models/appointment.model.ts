import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Appointment {
  @Field(() => ID)
  id: string;

  @Field()
  doctorId: string;

  @Field()
  doctorName: string;

  @Field()
  patientName: string;

  @Field()
  date: string;

  @Field()
  timeSlot: string;

  @Field()
  status: string;
}
