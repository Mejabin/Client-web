import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
import { Link, useLocation } from "react-router-dom";

  
  const DashboardAsidebar = () => {
    const location = useLocation();
    return (
      <div className="space-y-10 pb-20 ">
        <div className="flex items-center">
          <div>
            {/* <img className="mr-2" src={logo} alt="Logo" /> */}

          </div>
          <p className="text-3xl font-bold">Madrasah</p>
        </div>
        <div>
          <div
            className={`w-full flex p-2.5 hover:text-ac_primary_1 hover:bg-black/5 rounded-[6px]  ${
              location.pathname === "/" &&
              "bg-black/5  text-ac_primary_1 font-semibold"
            }`}
          >
            <Link to={""} className="flex gap-2 items-center w-full">
              Dashboard
            </Link>
          </div>
          <div
            className={`w-full flex p-2.5  hover:text-ac_primary_1 hover:bg-black/5 rounded-[6px] ${
              location.pathname === "/accounts" &&
              "bg-black/5 text-ac_primary_1 font-semibold"
            }`}
          >
            <Link to={"/accounts"} className="flex gap-1 items-center  w-full">
              {/* <AccountsIcon /> */}
              
              Accounts
            </Link>
          </div>
  
          <div
            className={`w-full flex p-2.5  hover:text-ac_primary_1 hover:bg-black/5 rounded-[6px] ${
              location.pathname === "/transaction" &&
              "bg-black/5 text-ac_primary_1 font-semibold"
            }`}
          >
            <Link to={"/transaction"} className="flex gap-2 items-center  w-full">
            Transaction
            </Link>
          </div>
  
          <div
            className={`w-full flex p-2.5  hover:text-ac_primary_1 hover:bg-black/5 rounded-[6px] ${
              location.pathname === "/assets" &&
              "bg-black/5 text-ac_primary_1 font-semibold"
            }`}
          >
            <Link to={"/assets"} className="flex gap-2 items-center  w-full">
         Assets
            </Link>
          </div>
  
          <div
            className={`w-full flex p-2.5  hover:text-ac_primary_1 hover:bg-black/5 rounded-[6px] ${
              location.pathname === "/supplier" &&
              "bg-black/5 text-ac_primary_1 font-semibold"
            }`}
          >
            <Link to={"/supplier"} className="flex gap-2 items-center  w-full">
          Supplier
            </Link>
          </div>
          <div
            className={`w-full flex p-2.5  hover:text-ac_primary_1 hover:bg-black/5 rounded-[6px] ${
              location.pathname === "/customers" &&
              "bg-black/5 text-ac_primary_1 font-semibold"
            }`}
          >
            <Link to={"/customers"} className="flex gap-2 items-center  w-full">
    Customers
            </Link>
          </div>
          {/* reports */}
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="Reports">
                <AccordionTrigger>
                  <div className="flex gap-2">
                Reports
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div
                    className={`w-full flex p-2.5  hover:text-ac_primary_1 hover:bg-black/5 rounded-[6px] 
                    ${
                      location.pathname === "/all-transaction-reports" &&
                      "bg-black/5 text-ac_primary_1 font-semibold"
                    }`}
                  >
                    <Link
                      to={"/all-transaction-reports"}
                      className="flex gap-2 items-center  w-full"
                    >
                   All Transactions
                    </Link>
                  </div>
                </AccordionContent>
                {/* <AccordionContent>
                  <div
                    className={`w-full flex p-2.5  hover:text-ac_primary_1 hover:bg-black/5 rounded-[6px] 
                    ${
                      location.pathname === "/ledger-reports" &&
                      "bg-black/5 text-ac_primary_1 font-semibold"
                    }`}
                  >
                    <Link
                      to={"/ledger-reports"}
                      className="flex gap-2 items-center w-full"
                    >
                      <CircleIcon height={12} width={12} /> Ledger Reports
                    </Link>
                  </div>
                </AccordionContent> */}
                <AccordionContent>
                  <div
                    className={`w-full flex p-2.5  hover:text-ac_primary_1 hover:bg-black/5 rounded-[6px] 
                    ${
                      location.pathname === "/income-expense-reports" &&
                      "bg-black/5 text-ac_primary_1 font-semibold"
                    }`}
                  >
                    <Link
                      to={"/income-expense-reports"}
                      className="flex gap-2 items-center w-full"
                    >
             Income & Expense
                      Reports
                    </Link>
                  </div>
                </AccordionContent>
                <AccordionContent>
                  <div
                    className={`w-full flex p-2.5  hover:text-ac_primary_1 hover:bg-black/5 rounded-[6px] 
                    ${
                      location.pathname === "/receivable-reports" &&
                      "bg-black/5 text-ac_primary_1 font-semibold"
                    }`}
                  >
                    <Link
                      to={"/receivable-reports"}
                      className="flex gap-2 items-center w-full"
                    >
             Receivable Reports
                    </Link>
                  </div>
                </AccordionContent>
                <AccordionContent>
                  <div
                    className={`w-full flex p-2.5  hover:text-ac_primary_1 hover:bg-black/5 rounded-[6px] 
                    ${
                      location.pathname === "/payable-reports" &&
                      "bg-black/5 text-ac_primary_1 font-semibold"
                    }`}
                  >
                    <Link
                      to={"/payable-reports"}
                      className="flex gap-2 items-center w-full"
                    >
    Payable Reports
                    </Link>
                  </div>
                </AccordionContent>
                <AccordionContent>
                  <div
                    className={`w-full flex p-2.5  hover:text-ac_primary_1 hover:bg-black/5 rounded-[6px] 
                    ${
                      location.pathname === "/sales-purchase-reports" &&
                      "bg-black/5 text-ac_primary_1 font-semibold"
                    }`}
                  >
                    <Link
                      to={"/sales-purchase-reports"}
                      className="flex gap-2 items-center w-full"
                    >
                 Sales & Purchase
                      Reports
                    </Link>
                  </div>
                </AccordionContent>
                <AccordionContent>
                  <div
                    className={`w-full flex p-2.5  hover:text-ac_primary_1 hover:bg-black/5 rounded-[6px] 
                    ${
                      location.pathname === "/fixed-assets-reports" &&
                      "bg-black/5 text-ac_primary_1 font-semibold"
                    }`}
                  >
                    <Link
                      to={"/fixed-assets-reports"}
                      className="flex gap-2 items-center w-full"
                    >
           Fixed Assets Reports
                    </Link>
                  </div>
                </AccordionContent>
                {/* <AccordionContent>
                  <div
                    className={`w-full flex p-2.5  hover:text-ac_primary_1 hover:bg-black/5 rounded-[6px] 
                    ${
                      location.pathname === "/profitandloss-reports" &&
                      "bg-black/5 text-ac_primary_1 font-semibold"
                    }`}
                  >
                    <Link
                      to={"/profitandloss-reports"}
                      className="flex gap-2 items-center w-full"
                    >
                      <CircleIcon height={12} width={12} /> Profit&Loss Reports
                    </Link>
                  </div>
                </AccordionContent> */}
                {/* <AccordionContent>
                  <div
                    className={`w-full flex p-2.5  hover:text-ac_primary_1 hover:bg-black/5 rounded-[6px] 
                    ${
                      location.pathname === "/balancesheet-reports" &&
                      "bg-black/5 text-ac_primary_1 font-semibold"
                    }`}
                  >
                    <Link
                      to={"/balancesheet-reports"}
                      className="flex gap-2 items-center w-full"
                    >
                      <CircleIcon height={12} width={12} /> BalanceSheet Reports
                    </Link>
                  </div>
                </AccordionContent> */}
              </AccordionItem>
            </Accordion>
          </div>
  
          {/* settings */}
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="Settings">
                <AccordionTrigger>
                  <div className="flex gap-2">
                 Settings
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div
                    className={`w-full flex p-2.5  hover:text-ac_primary_1 hover:bg-black/5 rounded-[6px] ${
                      location.pathname === "/companies" &&
                      "bg-black/5 text-ac_primary_1 font-semibold"
                    }`}
                  >
                    <Link
                      to={"/companies"}
                      className="flex gap-2 items-center  w-full"
                    >
                  Create Company
                    </Link>
                  </div>
                </AccordionContent>
                <AccordionContent>
                  <div
                    className={`w-full flex p-2.5  hover:text-ac_primary_1 hover:bg-black/5 rounded-[6px] ${
                      location.pathname === "/projects" &&
                      "bg-black/5 text-ac_primary_1 font-semibold"
                    }`}
                  >
                    <Link
                      to={"/projects"}
                      className="flex gap-2 items-center  w-full"
                    >
                   Create Projects
                    </Link>
                  </div>
                </AccordionContent>
                <AccordionContent>
                  <div
                    className={`w-full flex p-2.5  hover:text-ac_primary_1 hover:bg-black/5 rounded-[6px] ${
                      location.pathname === "/ledgers" &&
                      "bg-black/5 text-ac_primary_1 font-semibold"
                    }`}
                  >
                    <Link
                      to={"/ledgers"}
                      className="flex gap-2 items-center  w-full"
                    >
                  Ledger Create
                    </Link>
                  </div>
                </AccordionContent>
                <AccordionContent>
                  <div
                    className={`w-full flex p-2.5  hover:text-ac_primary_1 hover:bg-black/5 rounded-[6px] ${
                      location.pathname === "/sub-ledgers" &&
                      "bg-black/5 text-ac_primary_1 font-semibold"
                    }`}
                  >
                    <Link
                      to={"/sub-ledgers"}
                      className="flex gap-2 items-center  w-full"
                    >
                  Sub Ledger Create
                    </Link>
                  </div>
                </AccordionContent>
                <AccordionContent>
                  <div
                    className={`w-full flex p-2.5  hover:text-ac_primary_1 hover:bg-black/5 rounded-[6px] ${
                      location.pathname === "/profile" &&
                      "bg-black/5 text-ac_primary_1 font-semibold"
                    }`}
                  >
                    <Link
                      to={"/profile"}
                      className="flex gap-2 items-center  w-full"
                    >
                  Profile
                    </Link>
                  </div>
                </AccordionContent>
                <AccordionContent>
                  <div
                    className={`w-full flex p-2.5  hover:text-ac_primary_1 hover:bg-black/5 rounded-[6px] ${
                      location.pathname === "/users" &&
                      "bg-black/5 text-ac_primary_1 font-semibold"
                    }`}
                  >
                    <Link
                      to={"/users"}
                      className="flex gap-2 items-center  w-full"
                    >
                  Users
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    );
  };
  
  export default DashboardAsidebar;
  