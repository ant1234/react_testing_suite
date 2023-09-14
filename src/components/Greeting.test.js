import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe('Greeting component', () => {
    test('renders hello world as a test', () => {
        // arrange 
        render(<Greeting />);
        
        // act - n/a
    
        // assert 
        const helloWorldElement = screen.getByText('Hello world');
        expect(helloWorldElement).toBeInTheDocument();
    
    });

    test('renders it\'s good to see you IF the button\'s NOT clicked', () => {
        // arrange
        render(<Greeting />);

        // asset
        const uncheckedButtonText = screen.getByText('good to see you.', {exact: false});
        expect(uncheckedButtonText).toBeInTheDocument();
    });

    test('renders "Great" to see you / a slightly different greeting', () => {
        // arrange
        render(<Greeting />);

        // act
        const buttonClicked = screen.getByRole('button');
        userEvent.click(buttonClicked);

        // asset
        const outputText = screen.getByText('No, it\'s great to see you!', {exact: true});
        expect(outputText).toBeInTheDocument();
    });

    test('make sure the initial paragraph was removed when the button was clicked', () => {
        // arrange
        render(<Greeting />);

        // act
        const buttonClicked = screen.getByRole('button');
        userEvent.click(buttonClicked);

        // asset
        const outputText = screen.queryByText('good to see you.', {exact: false});
        expect(outputText).toBeNull();
    });
});

