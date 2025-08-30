import { type LucideIcon, Wrench, Droplets, ShieldCheck, Heater, Wind, Pipette } from 'lucide-react';

export interface Service {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    slug: 'emergency-plumbing',
    title: 'Emergency Plumbing',
    description: '24/7 rapid response for all plumbing emergencies.',
    longDescription: 'Our emergency plumbing team is available 24/7 to handle any crisis, from burst pipes to severe clogs. We guarantee a rapid response to minimize damage and restore your plumbing system as quickly as possible. Our vans are fully stocked to handle most repairs on the first visit.',
    icon: ShieldCheck,
  },
  {
    slug: 'drain-cleaning',
    title: 'Drain Cleaning',
    description: 'Expert cleaning for clogged and slow drains.',
    longDescription: 'Using state-of-the-art equipment, we can clear any blockage in your drains, from kitchen sinks to main sewer lines. We offer hydro-jetting services for a thorough clean that removes grease, scale, and other debris, preventing future clogs and ensuring smooth flow.',
    icon: Droplets,
  },
  {
    slug: 'water-heater-services',
    title: 'Water Heater Services',
    description: 'Installation, repair, and maintenance of water heaters.',
    longDescription: 'Whether you have a traditional tank or a modern tankless water heater, our certified technicians can handle it all. We provide expert installation, timely repairs, and preventative maintenance to ensure you always have reliable access to hot water.',
    icon: Heater,
  },
  {
    slug: 'leak-detection',
    title: 'Leak Detection & Repair',
    description: 'Advanced detection and repair of hidden water leaks.',
    longDescription: 'Hidden water leaks can cause significant damage to your property. We use non-invasive, advanced technology like acoustic sensors and thermal imaging to accurately locate leaks behind walls, under floors, and in your foundation. Once found, we offer efficient and lasting repair solutions.',
    icon: Pipette,
  },
  {
    slug: 'gas-line-services',
    title: 'Gas Line Services',
    description: 'Safe installation and repair of gas lines.',
    longDescription: 'Our licensed professionals are trained to safely install, repair, and maintain gas lines for your appliances. We adhere to the strictest safety codes to protect your home and family. If you suspect a gas leak, call us immediately for emergency service.',
    icon: Wind,
  },
  {
    slug: 'fixture-installation',
    title: 'Fixture Installation',
    description: 'Professional installation of faucets, toilets, and sinks.',
    longDescription: 'Upgrade your kitchen or bathroom with our professional fixture installation services. We can install a wide range of fixtures, including faucets, sinks, toilets, and showerheads, ensuring a perfect fit and leak-free operation for years to come.',
    icon: Wrench,
  },
];
