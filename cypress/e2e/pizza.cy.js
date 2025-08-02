describe("Pizza Formu Testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/orderpizza"); // Gerekirse route güncelle
  });

  it("İsim inputuna metin girilebilir", () => {
    cy.get("input[type='text']")
      .should("exist")
      .type("Görkem Varol")
      .should("have.value", "Görkem Varol");
  });

  it("Birden fazla malzeme seçilebilir", () => {
    cy.get("input[type='checkbox'][value='Domates']").check().should("be.checked");
    cy.get("input[type='checkbox'][value='Mantar']").check().should("be.checked");
    cy.get("input[type='checkbox'][value='Pepperoni']").check().should("be.checked");
  });

  it("Form başarıyla gönderilebilir", () => {
    cy.get("input[type='text']").type("Test Kullanıcı");
    cy.get("input[type='radio'][value='Large']").check().should("be.checked");

    // En az 4 malzeme gerektiği için 4 tanesini seçiyoruz
    cy.get("input[type='checkbox'][value='Domates']").check();
    cy.get("input[type='checkbox'][value='Mantar']").check();
    cy.get("input[type='checkbox'][value='Pepperoni']").check();
    cy.get("input[type='checkbox'][value='Ananas']").check();

    // Eğer sayfada başka checkbox varsa 1 tane daha seç
    cy.get("input[type='checkbox']").eq(3).check(); // varsa dördüncü checkbox

    cy.get("[data-cy=increment-button]").click();

    cy.get("[data-cy=pizza-size-small]").click();
    cy.get("[data-cy=pizza-size-medium]").click();
    cy.get("[data-cy=pizza-size-large]").click();

    cy.get('select[name="dough-type"]').select('Normal');

    cy.get("button[type='submit']").should("not.be.disabled").click();
  });
});
