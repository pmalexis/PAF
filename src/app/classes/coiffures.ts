export class Coiffure {
  id: number;
  name: string;
  image: string;
  coiffeurName: string;

  constructor(name = '', image = '', coiffeurName = '') {
    this.name = name;
    this.image = image;
    this.coiffeurName = coiffeurName;
    this.id = null;
  }
}
