import { useEffect } from "react";
import { useParams } from "react-router";
import { Layout } from "src/components";
import { useAuthRedirect } from "src/hooks";
import { ExchangeService } from "src/services";

export type ConvertedRate = {
  currency: string;
  value: number;
  datetime: Date;
};

export const Home = () => {
  const { page } = useParams();

  useAuthRedirect();

  useEffect(() => {
    ExchangeService.getRates().then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <Layout>
      Table page - {page}
      {/* Table here */}
    </Layout>
  );
};
