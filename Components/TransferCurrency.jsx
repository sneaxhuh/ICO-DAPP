import React, { useState, useEffect } from "react";

const TransferCurrency = ({
  setTransferCurrency,
  TRANSFER_ETHER,
  detail,
  currency,
  CHECK_ACCOUNT_BALANCE,
  setLoader,
}) => {
  const [transfer, setTransfer] = useState({
   
    _amount: "",
    _receiver: "",
  });
  const [receiver, setReceiver] = useState();
  const [address, setAddress] = useState();

  useEffect(() => {
    if (address) {
      const loadToken = async () => {
        setLoader(true);
        try {
          const balance = await CHECK_ACCOUNT_BALANCE(address);
          if (!balance) {
            console.log("No balance");
          } else {
            setTokenDetails(balance);
            console.log(balance);
          }
        } catch (error) {
          console.error("Error loading token:", error);
        }
        setLoader(false);
      };
      loadToken();
    }
  }, [address]);

  return (
    <section className="new-margin ico-contact pos-rel">
      <div className="container">
        <div className="ico-contact__wrap">
          <h2 className="title">
            Transfer {currency}
            <strong onClick={() => setTransferCurrency(false)}>X</strong>
          </h2>
          <div className="row">
            <div className="col-lg-12">
              {receiver ? (
                <input
                  type="text"
                  value={`Account Balance ${receiver.slice(0,8)} ${currency}`}
                  readOnly
                />
              ) : (
                <input
                  type="text"
                  placeholder="_receiver"
                  onChange={(e) => {
                    setToken({ ...token,_receiver: e.target.value });
                    setAddress(e.target.value);
                  }}
                />
              )}
            </div>

            <div className="col-lg-12">
              <input
                type="text"
                placeholder="Recipient Address"
                onChange={(e) => {
                  setTransfer({ ...transfer, _amount: e.target.value });
                }}
              />
            </div>
                <p><strong>balance:</strong> {detail?.maticBal} {currency}</p>
                
                <div className="ico-contract__btn text-center mt-10">
              <button onClick={() => TRANSFER_ETHER(transfer)} className="thm-btn">
                Transfer Currency
              </button>
            </div>

          </div>

          <div className="ico-contact__shape-img">
            <div className="shape shape--1"></div>
            <div className="shape shape--2"></div>
            <div>
              <img src="assets/img/shape/c_shape2.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="ico-contact__shape">
        <div className="shape shape--1">
          <img src="assets/img/shape/c_shape1.png" alt="" />
        </div>
        <div className="shape shape--2">
          <img src="assets/img/shape/c_shape2.png" alt="" />
        </div>
        <div className="shape shape--3">
          <img src="assets/img/shape/c_shape3.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default TransferCurrency;
