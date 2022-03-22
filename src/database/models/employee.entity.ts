import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany } from "typeorm";
import { Company } from './company.entity';

@Entity('employees')
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: false })
  name: string

  @Column({ type: 'bigint', unique: true, nullable: false})
  cpf: number

  @Column({ nullable: false, unique: true })
  email: string

  @Column({ nullable: false })
  address: string

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string

  @UpdateDateColumn({ name: 'updated_at '})
  updatedAt: string

  @ManyToMany(() => Company, (company: Company) => company.employees)
  companies: Company[];
}

export default Employee;