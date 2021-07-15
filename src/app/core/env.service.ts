import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class EnvService {
  public apiUrl: string = "";
  public enableDebug: boolean = true;
  public title: string = "My scrum log";

  constructor() {}
}
