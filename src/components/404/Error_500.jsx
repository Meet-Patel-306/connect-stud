import "../../error_500.css"

export default function Error_500() {
    return (
         <>
 
  
 <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css'/>
<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Arvo'/>


 <section className="page_500">
 <div className="container">
   <div className="row"> 
   <div className="col-sm-12 ">
   <div className="col-sm-10 col-sm-offset-1  text-center">
   <div className="four_zero_four_bg">
     <h1 className="text-center ">500</h1>
   
   
   </div>
   
   <div className="contant_box_500">
   <h3 className="h2">
   Oops! Something went wrong.
   </h3>
   
   <p>We're sorry, but the server encountered an internal error. Please try again later.</p>
   
   <a href="http://localhost:5173/home" className="link_500">Go to Home</a>
 </div>
   </div>
   </div>
   </div>
 </div>
</section>
        </>
    );
}
