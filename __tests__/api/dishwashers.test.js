import dishwashers from "../../pages/api/dishwashers";

xdescribe("dishwashers api", () => {
  test("should make a call to JL products api", (done) => {
    global.fetch = jest.fn();
    const mockSuccessResponse = {
        response: {
            status: 200,
            statusText: 'OK',
            headers: []
        }
    };
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

    dishwashers();
    expect(window.fetch).toHaveBeenCalledWith(
      "https://api.johnlewis.com/search/api/rest/v2/catalog/products/search/keyword?q=dishwasher&key=AIzaSyDD_6O5gUgC4tRW5f9kxC0_76XRC8W7_mI",
      {}
    );

    global.fetch.mockClear();
    delete global.fetch;

    done();
  });
});
