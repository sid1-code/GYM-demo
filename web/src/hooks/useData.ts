import { programs, trainers, testimonials, Program, Trainer, Testimonial } from "@/lib/data";

export function usePrograms() {
    const getAllPrograms = () => programs;
    const getProgramById = (id: string) => programs.find((p) => p.id === id);
    const getProgramsByCategory = (category: string) =>
        category === "all" ? programs : programs.filter((p) => p.category === category.toLowerCase());
    const getProgramsByTrainer = (trainerId: string) =>
        programs.filter((p) => p.trainerId === trainerId);

    return { getAllPrograms, getProgramById, getProgramsByCategory, getProgramsByTrainer };
}

export function useTrainers() {
    const getAllTrainers = () => trainers;
    const getTrainerById = (id: string) => trainers.find((t) => t.id === id);

    return { getAllTrainers, getTrainerById };
}

export function useTestimonials() {
    const getAllTestimonials = () => testimonials;
    const getTestimonialsByProgram = (programId: string) =>
        testimonials.filter((t) => t.programId === programId);

    return { getAllTestimonials, getTestimonialsByProgram };
}
