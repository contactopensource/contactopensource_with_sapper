describe("Sign up", () => {

	it("visit", () => {
		cy.visit("/signup");
		cy.url().should("include", "/signup");
	});

	it("post", () => {
		cy.visit("/signup");
		cy.url().should("include", "/signup");
		cy.get("input[name=\"email\"]").type("cypress@example.com");
		cy.get("input[name=\"password\"]").type("secret");
		cy.get("button[type=\"submit\"]").click();
		cy.url().should("include", "/");
	});

});