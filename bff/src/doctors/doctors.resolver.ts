import { Query, Resolver } from '@nestjs/graphql';
import { Doctor } from './models/doctor.model';

@Resolver(() => Doctor)
export class DoctorsResolver {
  @Query(() => [Doctor], { name: 'doctors' })
  getDoctors(): Doctor[] {
    return [
      {
        id: 'doc-1',
        name: 'Dr. Alex Mercer, MD',
        specialty: 'Cardiology',
        hospital: 'St. Jude Medical Center',
        avatar: '/doc-1.png',
        rating: 4.9,
        price: 150,
      },
      {
        id: 'doc-2',
        name: 'Dr. Sarah Jenkins, PhD',
        specialty: 'Pediatrics',
        hospital: 'Mercy General Hospital',
        avatar: '/doc-2.png',
        rating: 4.8,
        price: 120,
      },
      {
        id: 'doc-3',
        name: 'Dr. Michael Chen',
        specialty: 'Dermatology',
        hospital: 'City Care Clinic',
        avatar: '/doc-3.png',
        rating: 4.7,
        price: 100,
      },
    ];
  }
}
