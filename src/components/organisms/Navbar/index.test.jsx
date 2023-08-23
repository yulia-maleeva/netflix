import {render, screen} from "@testing-library/react"
import { describe, test } from "node:test";
import Navbar from "~/components/organisms/Navbar";

test('renders Navbar component', () => {
    render(<Navbar />);
  });