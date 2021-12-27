import BarChart from "components/barcharts";
import Datatable from "components/Datatable";
import DonutChart from "components/DonutChart";
import Footer from "components/footer";
import Navbar from "components/navbar";

export default function Dashboard() {
    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="text-primary py-3">Dashboard de vendas</h1>
                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
                        <BarChart />
                    </div>
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Todas as vendas</h5>
                        <DonutChart />
                    </div>
                </div>
                <div className="py-3">
                    <h2 className="text-primary">Todas as vendas</h2>
                </div>
                <Datatable />
            </div>
            <Footer />
        </>
    );
}
