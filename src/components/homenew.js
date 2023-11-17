import axios from 'axios';
import React, { useEffect, useState } from 'react';
//import { Modal } from 'react-bootstrap';

function Homenew() {

  const [data, setdata] = useState([]);
  const url = "https://fakestoreapi.com/products";
 

  //const [show, setShow] = useState(false);


  useEffect(() => {
    axios.get(url)
    .then((response) => {
      setdata(response.data);
    })

    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  }, []);




  const [user, setuser] = useState({

    title:"",
    description:"",
    image:"",
    price:""

  })

  const showdetail = (id) => {

    fetch('https://fakestoreapi.com/products/'+id)
    .then((response) => response.json())
    .then((res) => setuser(res));

  }



  // const [item, setitem] = useState([])

  // useEffect(() => {
  //   axios.get(url)
  //   .then((product) => {
  //     setitem(product.item);
  //   })

  //   .catch((error) => {
  //     console.error('Error fetching data:', error);
  //   });
  // }, []);





  return (

    <>
    <div style={{overflowX:"hidden"}}>




{/* <div style={{backgroundColor:"black"}}> */}
       <div style={{marginTop:"40px", display:"block", overflowX:"hidden"}}>
      <div style={{marginLeft:"50px"}} className="row">

      {data.map((item, index) => (

              <div style={{border: "1px solid #ffffff", marginTop:"10px", marginLeft:"25px"}} className="col-md-2" key={index}>
              <div style={{margin:"auto"}} className="card-md-3">
                {/* <img src="https://picsum.photos/200?random=${post.id" className="card-img-top" alt={item.title} /><br></br><br></br> */}
                <img style={{width:"100%", borderRadius:"10px", height:"210px", marginTop:"10px", cursor:"pointer"}} src={item.image} alt='title' onClick={(e) => showdetail(item.id)} data-toggle="modal" data-target="#exampleModal"/><br></br><br></br>
                

                
                 {/* <img style={{width:"100%", borderRadius:"10px", height:"210px", marginTop:"10px", cursor:"pointer"}} src={item.image} alt={item.title}/><br></br><br></br> */}
                <div style={{color:"black", cursor:"pointer"}} className="card-body">
                {/* <div style={{color:"black", cursor:"pointer"}} className="card-body"> */}
                  {/* <p className="card-title"><span style={{color:"red", fontWeight:"bold"}}>Id:</span> {item.id}</p> */}
                  {/* <p className="card-title"><span style={{color:"yellow"}}>User Id:</span> {item.userId}</p> */}
                  {/* <p className="card-title">{item.title.substring(0,15)}</p> */}
                  <p style={{textAlign:"center", fontWeight:"bold"}} className="card-title">{item.title.substring(0,20)}</p><br></br>
                  <p style={{textAlign:"center"}} className="card-title">${item.price} USD</p><br></br><br></br>
                  {/* <p className="card-title"><span style={{color:"red", fontWeight:"bold"}}>Description:</span> {item.description.substring(0,20)}</p> */}
                  {/* <p style={{textDecoration: "none", color: "blue", fontWeight: "bold", cursor: "pointer"}}>Read more</p> */}
                
                </div>
              </div>
            </div>
      ))}

      

            </div>
            </div>


            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{user.title}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div class="modal-body">


      {/* <div style={{marginTop:"30px"}}> */}

      <div>

            

<img style={{width:"180px", borderRadius:"10px", height:"180px", cursor:"pointer", marginLeft:"140px"}} src={user.image} alt='title'/>
 
 {/* <h4 style={{textAlign:"center", fontWeight:"bold", marginTop:"10px", color:"black"}}>wdasfsd</h4> */}
 
 <p style={{textAlign:"center", fontWeight:"bold", marginTop:"10px"}}>${user.price} USD</p>


<p><span style={{fontWeight:"bold"}}>Description: </span>{user.description}</p>

<button className='btn btn-primary' style={{marginLeft:"40%"}}>Add to cart</button>



</div>


        
      </div>
      
    </div>
  </div>
</div>


            
            








            {/* <Modal 
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
            >

        <Modal.Body>

          <div>

          <i style={{float:"right", cursor:"pointer"}} onClick={() => setShow(false)} className="fa fa-close"></i>
          
          </div>

          <div style={{marginTop:"30px"}}>

            

             <img style={{width:"180px", borderRadius:"10px", height:"180px", cursor:"pointer", marginLeft:"140px"}} src="https://picsum.photos/200?random=${post.id" alt='title' onClick={() => setShow(true)}/>
              
              <h4 style={{textAlign:"center", fontWeight:"bold", marginTop:"10px", color:"black"}}>wdasfsd</h4>
              
              <p style={{textAlign:"center", fontWeight:"bold", marginTop:"10px"}}>$19 USD</p>

            
          <p><span style={{fontWeight:"bold"}}>Description: </span>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>

          <button className='btn btn-primary' style={{marginLeft:"40%"}}>Add to cart</button>
          
          

          </div>

        </Modal.Body>
        
            </Modal> */}

            
      
    </div>
    

    

   </>
  

     




  )
}

export default Homenew;
