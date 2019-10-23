describe("About page", () => {

	it("visit /about", () => {
		cy.visit("/about")
		cy.url().should("include", "/about")
		cy.title().should("eq", "About us")
		//cy.get("h1").should("eq", "About us")
	});

});