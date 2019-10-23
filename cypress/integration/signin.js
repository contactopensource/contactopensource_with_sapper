describe("Sign in", () => {

	it("visit", () => {
		cy.visit("/signin");
		cy.url().should("include", "/signin");
	});

	it("post", () => {
		cy.visit("/signin");
		cy.url().should("include", "/signin");
		cy.get("input[name=\"email\"]").type("cypress@example.com");
		cy.get("input[name=\"password\"]").type("secret");
		cy.get("button[type=\"submit\"]").click();
		cy.url().should("include", "/");
	});

});