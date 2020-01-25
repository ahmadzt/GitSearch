import mockAxios from "../__mocks__/axios";
import GitHub from "../services/github";

it("fetches data from GitHub", async () => {
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: { 
        total_count: 1166223,
        incomplete_results: false,
        items: []
       }
    })
  );

  const response = await GitHub.getRepo({
    per_page: 10, 
    page: 1, 
    q: 'react' 
  });

  expect(response).toEqual({
		data: {
			total_count: 1166223,
			incomplete_results: false,
			items: []
		}
	});
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith(
    "search/repositories",
    {
      params: {
        per_page: 10, 
        page: 1, 
        q: 'react' 
      }
    }
  );
});