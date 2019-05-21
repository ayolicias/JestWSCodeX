import rp from "request-promise-native";

test.skip("Initial snapshot", async () => {
  const response = await rp({
    uri: "https://api.publicapis.org/entries?Category=Books&https=true",
    json: true,
    resolveWithFullResponse: true,
    rejectUnauthorized: true
  });
  expect(response.body).toMatchInlineSnapshot();
});
