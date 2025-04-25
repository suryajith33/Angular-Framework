import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LoginComponent } from "./login.component";
import { ReactiveFormsModule } from "@angular/forms";

describe("LoginComponent", () => {
	let component: LoginComponent;
	let fixture: ComponentFixture<LoginComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [LoginComponent, ReactiveFormsModule],
		}).compileComponents();

		fixture = TestBed.createComponent(LoginComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	it("should initialize the login form", () => {
		expect(component.loginForm).toBeTruthy();
		expect(component.loginForm.get("email")).toBeTruthy();
		expect(component.loginForm.get("password")).toBeTruthy();
	});

	it("should validate email field", () => {
		const emailControl = component.loginForm.get("email");
		emailControl?.setValue("");
		expect(emailControl?.valid).toBeFalsy();
		expect(emailControl?.errors?.["required"]).toBeTruthy();

		emailControl?.setValue("invalid-email");
		expect(emailControl?.valid).toBeFalsy();
		expect(emailControl?.errors?.["email"]).toBeTruthy();

		emailControl?.setValue("valid@email.com");
		expect(emailControl?.valid).toBeTruthy();
	});

	it("should validate password field", () => {
		const passwordControl = component.loginForm.get("password");
		passwordControl?.setValue("");
		expect(passwordControl?.valid).toBeFalsy();
		expect(passwordControl?.errors?.["required"]).toBeTruthy();

		passwordControl?.setValue("12345");
		expect(passwordControl?.valid).toBeFalsy();
		expect(passwordControl?.errors?.["minlength"]).toBeTruthy();

		passwordControl?.setValue("123456");
		expect(passwordControl?.valid).toBeTruthy();
	});
});
