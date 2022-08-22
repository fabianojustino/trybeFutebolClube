export default interface IMatchService<T> {
  list(): Promise<T[]>;
  create(props: any, inProgress: boolean): Promise<T>;
  finished(id: number, inProgress: boolean): Promise<boolean>;
  update(id: number, homeTeamGolas: number, awayTeamGoals: boolean): Promise<boolean>;
  checkTeam(team1: number, team: number): Promise<boolean>;
}
