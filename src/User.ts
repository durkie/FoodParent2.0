import 'jquery';

export class User {
  handle: string;
  constructor(handle) {
    this.handle = 'ser';
    this.handle = handle;
    setTimeout(() => {
      console.log($('#container').html());
    }, 1000);
  }
}
