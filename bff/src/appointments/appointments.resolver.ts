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
  @Mutation(() => Appointment)
  createAppointment(@Args('input') input: CreateAppointmentInput): Appointment {
    const newAppointment: Appointment = {
      id: `app-${Date.now()}`,
      doctorId: input.doctorId,
      doctorName: 'Dr. Alex Mercer, MD',
      patientName: input.patientName,
      date: input.date,
      timeSlot: input.timeSlot,
      status: 'CONFIRMED',
    };
    this.appointments.push(newAppointment);
    return newAppointment;
  }

  @Mutation(() => Appointment)
  cancelAppointment(@Args('id', { type: () => ID }) id: string): Appointment {
    const appointment = this.appointments.find(
      (appointment) => appointment.id === id,
    );
    if (!appointment) {
      throw new Error('Appointment not found');
    }
    appointment.status = 'CANCELLED';
    return appointment;
  }
}
