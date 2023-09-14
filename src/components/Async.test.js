import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe('Test async code', () => {
    test('renders posts if request succeeds', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'first post'}],
        });
        render(<Async/>);
        const listItem = await screen.findAllByRole('listitem');
        expect(listItem).not.toHaveLength(0);
    });
});