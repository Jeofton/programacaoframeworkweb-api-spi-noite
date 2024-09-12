import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import User from "../../models/admin/userModel";


export class AutheController {
    public async register(request: Request, response: Response): Promise<void> {
        const { nome, email, password } = request.body;

        try {
            // Criptografar a senha
            const passwordCrpt = await bcrypt.hash(password, 10);
            const newUser = new User({nome, email, password: passwordCrpt});
            newUser.save();

            response.status(201).json({ message: `O usuário ${nome} foi criado com sucesso!` })
        } catch (error) {
            response.status(500).json({ error: (error as Error).message, name: (error as Error).name })
        }

    };
    // public async login();
}

export default new AutheController();