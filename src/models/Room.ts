export interface Match {
  [key: string]: string;
}

export interface Room {
  name: string;
  players: string[];
  matches: Match[];
}
