
import { Header } from 'components/Header';

import { Layout, LayoutContent } from 'layouts/MainLayout/MainLayout.styled';



export const MainLayout = ({ children }) => (
  <Layout>
    <Header />
    <LayoutContent>{children}</LayoutContent>
  </Layout>
);
