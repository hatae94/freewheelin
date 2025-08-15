export default class Request {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get(url: string) {
    const res = await fetch(`${this.baseUrl}/${url}`);
    return res.json();
  }
}
