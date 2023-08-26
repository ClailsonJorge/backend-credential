import { User } from "../entities/User";
import { AppDataSource } from "../../data-source"

interface UserProps {
    email: string;
    name: string;
    password: string;
}

interface UserRepositoryType {
    find: () => Promise<User[]>;
    create: (user: UserProps) => Promise<User>;
    findByEmail: (email: string) => Promise<User>;
}

export class UserRepository implements UserRepositoryType {
    private photoRepository = AppDataSource.getRepository(User);

    async find(): Promise<User[]> {
        return await this.photoRepository.find();
    }

    async create({ email, name, password }: UserProps): Promise<User> {
        const newUser = await this.photoRepository.save({ email, name, password });

        return newUser;
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.photoRepository.findOneBy({ email });
        return user;
    }

}