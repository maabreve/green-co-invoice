import React, { useEffect } from 'react';
import dateUtil from '../services/dateUtil';

const Invoice = ({invoices}) => {
  useEffect(() => {

  }, [invoices]);

  const getInvoiceStatus = (invoice) => {
    if (!Object.prototype.toString.call(invoice.dueDate) === "[object Date]") {
      return -1;
    }

    if (!invoice.paid) {
      return Math.floor((new Date() - invoice.dueDate) / (1000*60*60*24)) > 0 ? 2 : 0;
    } else {
      return 1;
    }
  }

  const getInvoiceStatusName = (invoice) => {
    switch(getInvoiceStatus(invoice)) {
      case 0:
        return 'Aberta';
      case 1:
        return 'Pago';
      case 2:
        return 'Em Atraso';
      default:
        return ''
    }
  }

  const getInvoiceClassName = (invoice) => {
    switch(getInvoiceStatus(invoice)) {
      case 0:
        return 'bg-purple-200 text-purple-800';
      case 1:
        return 'bg-green-200 text-green-800';
      case 2:
        return 'bg-red-200 text-red-800';
      default:
        return ''
    }
  }

  return (
    <div className="scrolling-wrapper">
    <div className="card-container">
      {invoices && invoices.length > 0 && invoices.map(invoice => (
        <div className="card-inner h-screen" key={`div1${invoice.id}`}>
          <div className="flex items-center h-24 content">
            <div className="card" >
              <div id="invoice-row-1" className="grid gap-4">
                <div className="col-start-1 col-end-3">
                  <span className="font-bold text-2xl">Fatura</span>&nbsp;
                    <span className="text-gray-600 uppercase">
                      {dateUtil.getFormatDate(invoice.dueDate)}
                    </span>
                </div>
                <div id="invoice-badge" className="col-end-6 col-span-2 text-right">
                  <span className={"inline-block text-xs px-2 rounded-full tracking-wide text-lg " + getInvoiceClassName(invoice)}>
                    {getInvoiceStatusName(invoice)}
                  </span>
                </div>
              </div>
              <div id="invoice-row-2">
                <div>
                  <span className="font-bold text-6xl">
                    {invoice.megaBytes.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
                  </span>
                  <span className="text-gray-600">MB</span>
                </div>
                <div>
                  <span className="text-gray-600">R$</span>&nbsp;
                  <span className="font-bold text-red-600 text-3xl">
                    {invoice.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </div>
              </div>
              <div id="invoice-row-3">
                <div className="text-gray-600 text-xl">
                  VENCIMENTO
                </div>
                <div>
                  <span className="font-bold text-2xl">
                    {dateUtil.getDueDate(invoice.dueDate)}
                  </span>&nbsp;
                  <span>
                    {dateUtil.getWeekName(invoice.dueDate)}
                  </span>
                </div>
              </div>
              <div id="invoice-row-4" className="grid gap-4">
                { !invoice.paid ?
                  <div className="col-end-6 col-span-2 text-right text-green-600 ">EFETUAR PAGAMENTO</div>
                : null }
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
};

export default Invoice;
