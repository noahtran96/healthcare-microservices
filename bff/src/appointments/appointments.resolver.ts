import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Appointment } from './models/appointment.model';
import { CreateAppointmentInput } from './dto/create-appointment.input';

@Resolver(() => Appointment)
export class AppointmentsResolver {
  constructor(private readonly httpService: HttpService) {}

  @Query(() => [Appointment], { name: 'appointments' })
  getAppointments(): Appointment[] {
    return this.appointments;
  }
  testing;
  testing;
  testing;
}
