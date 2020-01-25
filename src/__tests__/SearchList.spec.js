import React from "react";
import { create } from "react-test-renderer";
import ResultList from "../components/SearchResultList";

const params = {
    language: 'Javascript',
    stargazers_count: 142823,
    html_url: 'https://github.com/facebook/react',
    full_name: 'facebook/react',
    description: 'Some description',
    updated_at: '2020-01-24T15:24:40Z'
}

describe("SearchList component", () => {
  test("Matches the snapshot", () => {
    const list = create(<ResultList item={ params }/>);
    expect(list.toJSON()).toMatchSnapshot();
  });
});