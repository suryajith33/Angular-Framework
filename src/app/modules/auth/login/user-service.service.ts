import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginResponse } from "./store/login.model";

@Injectable({
	providedIn: "root",
})
export class LoginService {
	constructor(private http: HttpClient) {}

	//remove after setting up config file
	private loginUrl = "/api/login";

	login(username: string, password: string): Observable<LoginResponse> {
		return this.http.post<LoginResponse>(this.loginUrl, { username, password });
	}
}
