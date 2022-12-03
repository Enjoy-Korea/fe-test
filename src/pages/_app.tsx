import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {
    Component: NextPageWithLayout;
}

export default function App({ Component, pageProps }: MyAppProps) {
    const getLayout = Component.getLayout ?? ((page) => page);
    return <>{getLayout(<Component {...pageProps} />)}</>;
}
