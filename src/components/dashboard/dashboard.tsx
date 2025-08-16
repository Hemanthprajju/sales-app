// Login.tsx
import React from 'react';
import Topnav from '../topnav/topnav';
import homeBanner from '../../assets/dashboard/hp_banner.png'
import salesBanner from '../../assets/dashboard/scott-graham-5fNmWej4tAA-unsplash.jpg'
import purchaseImg from '../../assets/dashboard/vidar-nordli-mathisen-y8TMoCzw87E-unsplash.jpg'
import './dashBoard.scss';
import Footer from '../footer/footer';


const Dashboard: React.FC = () => {

    return (
        <div>
            <Topnav />
            <div className='container-fluid p-0 bannerDiv'>
                <img className='myBanner' src={homeBanner} alt="" />
                <div className='titleName'>
                    <h4>
                        Sales and Purchase PVT LTD
                    </h4>
                </div>
            </div>
            <div className="container-fluid py-4">
                <div className="row justify-content-center align-items-center gap-4">
                    <div className="col-12 col-md-5">
                        <img className="img-fluid salesImg" src={salesBanner} alt="Sales Banner" />
                    </div>
                    <div className="col-12 col-md-5">
                        <h3>Sales Resposibilities</h3>
                        <p className="text-center text-md-start">
                            <strong>Function:</strong> The sales department within a company is responsible for driving these sales by identifying potential customers, presenting products or services, negotiating deals, and closing sales.
                            <br />
                            <strong>Impact on Business:</strong> Strong sales are crucial for a company's financial health as they directly contribute to revenue, allowing companies to cover operational costs and invest in growth initiatives.
                            <br />
                            <strong>Measurement:</strong> Sales figures are typically tracked and analyzed through sales reports, which detail information like total sales revenue, individual product sales, customer demographics, and sales trends over time.
                            <br />
                            <strong>Sales Cycle:</strong> The process of selling a product or service can involve various stages like lead generation, qualification, presentations, negotiation, and closing the deal.
                            <br /><br />
                            <strong>How to Access Sales Information About a Company:</strong>
                            <br />
                            <strong>Financial Statements:</strong> Companies usually disclose their sales figures in their annual reports and financial statements, which are publicly available.
                            <br />
                            <strong>Market Research Reports:</strong> Industry reports from market research firms provide insights into a company's sales performance compared to competitors.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-4">
                <div className="row justify-content-center align-items-center gap-4">
                    <div className="col-12 col-md-5">
                        <h3>Purchase Resposibilities</h3>
                        <p>
                            <strong>Procurement vs. Purchasing:</strong> While often used interchangeably, "procurement" is a broader term encompassing the entire process of identifying needs, sourcing vendors, negotiating contracts, and acquiring goods or services, while "purchasing" is the more transactional act of placing an order with a supplier.
                            <br /><br />
                            <strong>Purchase Order (PO):</strong> A document issued by a company to a vendor specifying the items needed, quantity, price, and delivery terms, essentially formalizing the purchase request.
                            <br /><br />
                            <strong>Purchasing Department:</strong> A dedicated team within a company responsible for managing the purchasing process, including vendor evaluation, price negotiations, and ensuring timely delivery of goods and services.
                            <br /><br />
                            <strong>Steps in the Purchasing Process:</strong>
                            <br />
                            <strong>Need Identification:</strong> Recognizing the need for a particular good or service.
                            <br />
                            <strong>Vendor Selection:</strong> Researching and choosing suitable suppliers.
                            <br />
                            <strong>Request for Quotation (RFQ):</strong> Sending out requests for pricing information from potential vendors.
                            <br />
                            <strong>Purchase Order Creation:</strong> Generating a purchase order with detailed specifications.
                            <br />
                            <strong>Delivery and Receipt of Goods:</strong> Receiving the purchased items and verifying quality and quantity.
                        </p>
                    </div>
                    <div className="col-12 col-md-5">
                        <img className="img-fluid salesImg" src={purchaseImg} alt="Sales Banner" />


                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Dashboard;