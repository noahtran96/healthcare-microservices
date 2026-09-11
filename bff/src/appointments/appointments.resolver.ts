import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Appointment } from './models/appointment.model';

@Resolver(() => Appointment)
export class AppointmentsResolver {
  constructor(private readonly httpService: HttpService) {}
}
