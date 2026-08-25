import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateAppointmentInput {
  @Field()
  doctorId: string;

  @Field()
  patientName: string;

  @Field()
  date: string;

  @Field()
  timeSlot: string;
}
