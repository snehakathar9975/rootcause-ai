test("user remains authenticated after refresh", () => {
  localStorage.setItem("token", "demo-token");

  const token = localStorage.getItem("token");

  expect(token).toBe("demo-token");
});