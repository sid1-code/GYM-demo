
export interface Program {
    id: string;
    title: string;
    description: string;
    category: "strength" | "cardio" | "flexibility" | "hiit";
    duration: string;
    intensity: "beginner" | "intermediate" | "advanced";
    trainerId: string;
    image: string;
    features: string[];
}

export interface Trainer {
    id: string;
    name: string;
    role: string;
    bio: string;
    image: string;
    specialties: string[];
    socials: { twitter?: string; instagram?: string; linkedin?: string };
}

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    content: string;
    rating: number;
    image: string;
    programId?: string;
}

export const trainers: Trainer[] = [
    {
        id: "t1",
        name: "Alex Rivera",
        role: "Head Performance Coach",
        bio: "Former Olympian specializing in explosive power and athletic conditioning.",
        image: "/images/trainer-alex.jpg",
        specialties: ["Strength", "Athletics", "Powerlifting"],
        socials: { instagram: "@alexfit" }
    },
    {
        id: "t2",
        name: "Sarah Chen",
        role: "Yoga & Mobility Specialist",
        bio: "Integrating traditional yoga with modern mobility science for pain-free movement.",
        image: "/images/trainer-sarah.jpg",
        specialties: ["Yoga", "Mobility", "Recovery"],
        socials: { instagram: "@sarah.flow" }
    },
    {
        id: "t3",
        name: "Marcus Johnson",
        role: "HIIT & Endurance Coach",
        bio: "High-intensity expert focused on metabolic conditioning and fat loss.",
        image: "/images/trainer-marcus.jpg",
        specialties: ["HIIT", "Cardio", "Boxing"],
        socials: { instagram: "@marcus_hiit" }
    }
];

export const programs: Program[] = [
    {
        id: "p1",
        title: "Titan Strength",
        description: "Build raw power and muscle mass with this 12-week heavy lifting protocol.",
        category: "strength",
        duration: "12 Weeks",
        intensity: "advanced",
        trainerId: "t1",
        image: "/images/program-strength.jpg",
        features: ["4 days/week", "1RM Testing", "Hypertrophy Phases"]
    },
    {
        id: "p2",
        title: "Fluid Mobility",
        description: "Unlock your body's potential range of motion and reduce injury risk.",
        category: "flexibility",
        duration: "8 Weeks",
        intensity: "beginner",
        trainerId: "t2",
        image: "/images/program-mobility.jpg",
        features: ["Daily Routine", "Joint Health", "Postural Correction"]
    },
    {
        id: "p3",
        title: "Metabolic Shred",
        description: "Torch calories and boost your metabolism with high-intensity intervals.",
        category: "hiit",
        duration: "6 Weeks",
        intensity: "intermediate",
        trainerId: "t3",
        image: "/images/program-hiit.jpg",
        features: ["No Equipment needed", "20 min workouts", "Heart Rate Training"]
    }
];

export const testimonials: Testimonial[] = [
    {
        id: "tm1",
        name: "Jordan Lee",
        role: "Software Engineer",
        content: "Titan Strength completely changed my physique. I've never felt stronger.",
        rating: 5,
        image: "/images/user-jordan.jpg",
        programId: "p1"
    },
    {
        id: "tm2",
        name: "Emily Davis",
        role: "Designer",
        content: "The mobility program fixed my back pain from sitting all day. Life saver.",
        rating: 5,
        image: "/images/user-emily.jpg",
        programId: "p2"
    },
    {
        id: "tm3",
        name: "Michael Brown",
        role: "Accountant",
        content: "Quick, effective, and brutal. Exactly what I needed to get back in shape.",
        rating: 4,
        image: "/images/user-mike.jpg",
        programId: "p3"
    }
];
