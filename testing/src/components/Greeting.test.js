import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Greeting from "./Greeting";

describe('Greeting component', () => {
    test('renders Hello World as a text', () => {
        //Arrange
        render(<Greeting />);

        //Act
        //No action needed

        //Assert
        const helloWorldElement = screen.getByText('Hello World!');
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders "It\'s good to see you!" if the button was NOT clicked', () => {
        render(<Greeting />);
        const greetingText = screen.getByText("It's good to see you!", { exact: true});
        expect(greetingText).toBeInTheDocument();
    });

    test('renders "Changed!" if the button was clicked', () => {
        render(<Greeting />);
        userEvent.click(screen.getByRole('button'));
        const changedText = screen.getByText('Changed!', { exact: true });
        expect(changedText).toBeInTheDocument();
    });

    test('does not render "It\'s good to see you!" if the button was clicked', () => {
        render(<Greeting />);
        userEvent.click(screen.getByRole('button'));
        const greetingText = screen.queryByText("It's good to see you!", { exact: true });
        expect(greetingText).not.toBeInTheDocument();
    });

    test('does not render "Changed!" if the button was NOT clicked', () => {
        render(<Greeting />);
        const changedText = screen.queryByText('Changed!');
        expect(changedText).not.toBeInTheDocument();
    });
});
