import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "@components/layout";

export default function App({ Component, pageProps }: AppProps) {
    const [showChild, setShowChild] = useState(false);
    const [queryClient] = useState(() => new QueryClient());

    useEffect(() => {
        setShowChild(true);
    }, []);

    if (!showChild) {
        return null;
    }
    if (typeof window === "undefined") {
        return <></>;
    } else {
        return (
            <QueryClientProvider client={queryClient}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </QueryClientProvider>
        );
    }
}
