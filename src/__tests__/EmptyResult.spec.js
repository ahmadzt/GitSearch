import React from "react";
import { create } from "react-test-renderer";
import EmptyResult from "../components/SearchEmptyResult";

describe("EmptyResult component", () => {
  test("Matches the snapshot", () => {
    const result = create(<EmptyResult searchKey="react"/>);
    expect(result.toJSON()).toMatchSnapshot();
  });
});