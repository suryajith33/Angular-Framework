import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginResponse } from "./store/login.model";
import { environment } from "../../../../environments/environment";

@Injectable({
	providedIn: "root",
})
export class LoginService {
	constructor(private http: HttpClient) {}

	login(username: string, password: string): Observable<LoginResponse> {
		return this.http.post<LoginResponse>(environment.apiUrl + "api/login", { username, password });
	}
}
