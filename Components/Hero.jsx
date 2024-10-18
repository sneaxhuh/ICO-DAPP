import React, {useEffect,useState} from "react";
import toast from "react-hot-toast";
const Hero = ({setBuyModel,account,
  CONNECT_WALLET,
   setAccount,setLoader,
   detail,
   addTokenToMetamask,} ) => {

const notifySuccess=(msg) => toast.success(msg,
  {duration:2000});

  const notifyError=(msg) => toast.error(msg,
    {duration:2000});
  
    const coonnectWallet = async () => {
setLoader(true);
const address=await CONNECT_WALLET();
setAccount(address);
    };
    const [percentage, setPercentage] = useState();
    useEffect (() => {
    const calaulatePercentage = () => {
    const tokenSold = detail?.soldTokens ?? 0; 
    const tokenTotalSupply =
    detail?.soldTokens + Number (detail?. tokenBal) * 1 ?? 1;
    
  const percentageNew=(tokenSold/tokenTotalSupply)*100;
if(tokenTotalSupply ===0)
{
  console.log("token sale balance is zero cannot calculate percentage");
}
else
{
  setPercentage(percentageNew);
}
const timer=setTimeout(calaulatePercentage,
  1000
);
return()=> clearTimeout(timer);
  };
    }, [detail]);
    const ADD_TOKEN_METAMASK = async () => {
    
    setLoader (true);
    const response = await addtokenToMetaMask();
    setLoader(false); 
    notifySuccess (response);

    };
    return(
      <section className="hero hero_ico pos-rel">
      <div className="hero_bg"
      data-background="assets/img/bg/hero_bg.png" />
      <div className="container">
      <div className="row">
      <div className="col-lg-7">
      <div className="hero__content"> <h1 className="title mb-45"> Participate in the <span>Ongoing ICO Token</span> Sale
      </h1>
      <div className="btns">
        {
          account ? (
            <a className="thm-btn" onClick={()=> setBuyModel(true)}>  PURCHASE TOKEN </a> 
                 
            ):(
              <a className="thm-btn" onClick={()=> coonnectWallet()}>  CONNECT WALLET </a> 
                 
            )
            }

<a className="thm-btn thm-btn--dark" onClick={()=> addTokenToMetamask()}>  ADD TOKEN METAMASK</a> 
                 
      </div>
      <div className="hero_progress mt-50"> <div className="progress-title
ul_li_between">
<span>
<span>Raised </span> {detail?.
soldTokens} Tokens
</span>
<span>
<span>Total ICO -</span>
{detail?.soldTokens +Number(detail?.tokenBal)} {" "}
{detail?.symbol}
</span>
</div>
<div className="progress">
<div
className="progress-bar" role="progressbar"
style={{
  width: '${percentage}',
}}
/>  </div>
<ul className="ul_li_between">
  <li>Pre Sell</li>
  <li>Soft Cap</li>
  <li>Bonus</li>
</ul>
</div>

      </div>
      </div>
      <div className="col-lg-5">
<div className="hero_explore-wrap
text-center">
Ediv className="hero_explore text-center"
<div className="scroll-down" />
<span>Explore Causes</span>
</div>
<div className="hero__countdown">
  <h6 className="text-center">ICO Will Start in...</h6>
</div>

</div>
      </div>

      </div>
      <div className="hero_shape">
<div className="shape shape--1">
<img src="assets/img/shape/h_shape.png"
alt="" srcset=""/>
</div>
<div className="shape shape--2">
<img src="assets/img/shape/h_shape2.png" alt="" srcset="" />
</div>
<div className="shape shape--3">
<img src="assets/img/shape/h_shape3.png" alt="" srcset="" />
</div>

</div>


<div className="hero_coin">
<div className="coin coin--1">
<img src="assets/img/icon/coin1.png"
alt="" srcset=""/>
</div>
<div className="coin coin--2">
<img src="assets/img/icon/coin2.png" alt="" srcset="" />
</div>
<div className="coin coin--3">
<img src="assets/img/icon/coin3.png" alt="" srcset="" />
</div>
<div className="coin coin--4">
<img src="assets/img/icon/coin4.png" alt="" srcset="" />
</div>
<div className="coin coin--5">
<img src="assets/img/icon/coin5.png" alt="" srcset="" />
</div>
<div className="coin coin--6">
<img src="assets/img/icon/coin6.png" alt="" srcset="" />
</div>
</div>



      </section>
    );
};

export default Hero;
