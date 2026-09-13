import { Query, Resolver } from "@nestjs/graphql";

@Resolver(() => Appointment)
export class AppointmentsResolver {
  constructor(private readonly httpService: HttpService) {

    @Query(() => [Appointment], {name: "appointments"})
    async getAppointments(): Promise<Appointment[]> {

      const {data} = await firstValueFrom(
        this.httpService.get<Appointment[]>("http://127.0.0.1:8080/appointments"),
      );
      return data;
    }
  }
}