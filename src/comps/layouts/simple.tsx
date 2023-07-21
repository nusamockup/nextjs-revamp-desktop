import { ReactNode } from 'react';
// import useSWR from 'swr';
// import Navbar from './navbar';
// import Footer from './footer';

interface Props {
    children?: ReactNode;
    // any props that come into the component
}

export default function Layout({ children }: Props) {
    // const { data, error } = useSWR('/api/navigation', fetcher);

    // if (error) return <div>Failed to load</div>;
    // if (!data) return <div>Loading...</div>;

    return (
        <>
            {/* <Navbar links={data.links} /> */}
            <main>{children}</main>
            {/* <Footer /> */}
        </>
    );
}
