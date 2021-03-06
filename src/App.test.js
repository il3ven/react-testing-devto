import { render, screen } from "@testing-library/react";
import axios from "axios";
import App from "./App";

jest.mock("axios");

test("renders learn react link", async () => {
  axios.get.mockImplementation(() => {
    return {
      data: {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
      },
    };
  });

  render(<App />);

  expect(screen.getByText(/React App/i)).toBeInTheDocument();
  expect(screen.getByTestId('title').innerHTML).toBe('Title: delectus aut autem');
});
