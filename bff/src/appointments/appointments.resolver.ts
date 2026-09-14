import { Query, Resolver } from "@nestjs/graphql";

@Resolver(() => Appointment)
export class AppointmentsResolver {
  constructor(private readonly httpService: HttpService) {

    @Query(() => [Appointment], {name: "appointments"})
    async getAppointments(): Promise<Appointment[]> {

     
    }
  }
}