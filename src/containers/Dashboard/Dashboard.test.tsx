import Dashboard from './Dashboard';
import LoginForm from '../Login/LoginForm';
import { fireEvent, render, waitFor } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import TestingRouter from '../../TestingRouter'


describe('Auth Tests', () => {
    test("login functionality", async () => {
        const mockFn = jest.fn();
        const { getByRole, getByTestId } = render(
            <LoginForm handleSubmit={mockFn} formError='' />
        );
        const username = getByTestId('username');
        const pass = getByTestId('password');
        fireEvent.change(username, { target: { value: 'admin' } });
        fireEvent.change(pass, { target: { value: 'password' } });
        userEvent.click(getByRole('button'))

        await waitFor(() => {
            expect(mockFn).toHaveBeenCalledWith({
                username: 'admin',
                password: 'password'
            });
        })
    })

    test("logout functionality", async () => {
        const mockFn = jest.fn();
        const { container, getByRole, getByTestId } = render(
            <LoginForm handleSubmit={mockFn} formError='' />
        );
        const username = getByTestId('username');
        const pass = getByTestId('password');
        fireEvent.change(username, { target: { value: 'admin' } });
        fireEvent.change(pass, { target: { value: 'password' } });
        userEvent.click(getByRole('button'))

        await waitFor(() => {
            expect(mockFn).toHaveBeenCalledWith({
                username: 'admin',
                password: 'password'
            });
        })

        Object.defineProperty(window.document, "cookie", {
            writable: true,
            value: "token=test123",
        });

        const redirectUrl = '/dashboard';
        const dashboard = render(
            <TestingRouter
                ComponentWithRedirection={() => <Dashboard history={''} />}
                RedirectUrl={redirectUrl}
            />
        )
        expect(dashboard.getByRole('logout-btn')).toBeInTheDocument();
        fireEvent.click(dashboard.getByRole('logout-btn'));
    })
})