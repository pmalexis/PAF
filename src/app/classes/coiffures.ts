export class Coiffure {
  id: number;
  name: string;
  image: string;
  coiffeurName: string;
  coiffureDesc: string;
  coiffureDate: string;

  constructor(name = '', image = '', coiffeurName = '', coiffureDesc = '', coiffureDate = '') {
    this.name = name;
    this.image = image;
    this.coiffeurName = coiffeurName;
    this.id = null;
    this.coiffureDesc = coiffureDesc;
    this.coiffureDate = coiffureDate;
  }
}
