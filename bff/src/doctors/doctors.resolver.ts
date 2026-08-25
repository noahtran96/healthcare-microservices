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
        avatar: 'frontend/public/doc-1.png',
        rating: 4.9,
        price: 150,
      },
      {
        id: 'doc-2',
        name: 'Dr. Sarah Jenkins, PhD',
        specialty: 'Pediatrics',
        hospital: 'Mercy General Hospital',
        avatar: 'frontend/public/doc-2.png',
        rating: 4.8,
        price: 120,
      },
    ];
  }
}
