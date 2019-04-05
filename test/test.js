var expect = chai.expect;

describe("Promise should complete operation", function(resolve) {
  const resolvingPromise = new Cow().fetchData().then(data => {
    return data;
  });

  it("resolves and returns city", () => {
    return resolvingPromise.then(result => {
      document.getElementById("messages").innerHTML = result.name;

      expect(result.name).to.equal("South Pasadena");
    });
  });
});
