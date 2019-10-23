describe("index", () => {

	it("title", () => {
		cy.visit("/");
		cy.url().should("include", "/");
		cy.title().should("eq", "Contact Open Source");
	});

});