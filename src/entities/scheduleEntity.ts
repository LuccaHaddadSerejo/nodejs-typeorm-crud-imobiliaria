import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { RealEstate } from "./realEstateEntity";
import { User } from "./userEntity";

@Entity("schedules_users_properties")
class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date" })
  date: Date;

  @Column({ type: "time" })
  hour: number | string;

  @ManyToOne(() => RealEstate, (estates) => estates.id)
  realEstate: RealEstate;

  @ManyToOne(() => User, (users) => users.id)
  user: User;
}

export { Schedule };
