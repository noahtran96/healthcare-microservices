import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Appointment } from './models/appointment.model';
import { CreateAppointmentInput } from './dto/create-appointment.input';

@Resolver(() => Appointment)
export class AppointmentsResolver {
  private appointments: Appointment[] = [
    {
      id: 'app-1',
      doctorId: 'doc-1',
      doctorName: 'Dr. Alex Mercer, MD',
      patientName: 'John Doe',
      date: '2026-08-25',
      timeSlot: '08:00 AM - 08:30 AM',
      status: 'CONFIRMED',
    },
  ];

  @Query(() => [Appointment], { name: 'appointments' })
  getAppointments(): Appointment[] {
    return this.appointments;
  }

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
