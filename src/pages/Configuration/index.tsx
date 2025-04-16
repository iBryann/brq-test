import { Layout } from "src/components";
import { useAuthRedirect } from "src/hooks";

export const Configuration = () => {
  useAuthRedirect();

  return <Layout>Olá</Layout>;
};
