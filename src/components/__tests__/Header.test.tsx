import { render, screen } from '@testing-library/react';
import Header from '../Header/Header';

// Mock the next/link component
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
});

describe('Header', () => {
  it('renders the header with title and navigation links', () => {
    render(<Header />);
    
    // Check if the title is rendered
    expect(screen.getByText('Sticky Notes')).toBeInTheDocument();
    
    // Check if navigation links are rendered
    const homeLink = screen.getByRole('link', { name: /home/i });
    const contactLink = screen.getByRole('link', { name: /contact/i });
    
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
    
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute('href', '/contact');
  });

  it('renders with proper structure and styling', () => {
    const { container } = render(<Header />);
    
    // Check if header exists
    const header = container.querySelector('header');
    expect(header).toBeInTheDocument();
    
    // Check if logo div exists
    const logo = container.querySelector('div');
    expect(logo).toBeInTheDocument();
    
    // Check if nav exists
    const nav = container.querySelector('nav');
    expect(nav).toBeInTheDocument();
    
    // Check if links are inside nav
    const links = nav?.querySelectorAll('a');
    expect(links?.length).toBe(2);
  });

  it('matches snapshot', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
}); 