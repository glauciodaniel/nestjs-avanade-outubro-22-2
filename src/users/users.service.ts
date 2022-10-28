import { Injectable } from '@nestjs/common';
import { users } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(data): Promise<users> {
    const { name, email, password } = data;

    const user = await this.prisma.users.create({
      data: {
        name,
        email,
        password,
      },
    });

    if (!user) {
      throw new Error('Erro ao criar usuário');
    }
    return user;
  }

  async findAll() {
    return 'Lista de usuários';
  }

  async findOne(id: string) {
    return `Usuário ${id}`;
  }

  async update(id: string, req) {
    return `Usuário ${id} atualizado com sucesso!`;
  }
}
