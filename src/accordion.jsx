import React,{useState} from 'react';

///task
const Accordion=(props)=>{
   

    const [active,setActive]=useState(0);

    const renderItems=props.items.map((item,index)=>{
        const show=active===index?'show' :'';
        const Down=active===index?'up':'down';
        
        return(
            <React.Fragment key={item.title}>
                <div class="accordion" id="accordionExample" style={{marginTop:'10px'}} onClick={()=>setActive(index)}>
  <div className="card">
      
    <div className="card-header " id="headingOne">
    
      <h2 className="mb-0">
      {/* <i className="fa fa-caret-right fa-2x"> */}
        <button className="btn btn-link btn-block text-left  " type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
         <h1 className={`fa fa-caret-${Down} fa-1x`} > {item.title} </h1>
          
        </button>
        {/* </i> */}
      </h2>
    
     
    </div>
{/* <i class="fas fa-caret-square-down"></i> */}
    <div id="collapseOne" className={`collapse  ${show}`} aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body">
      {item.description}
     
      </div>
    </div>
  </div>
  </div>
            </React.Fragment>
        )
    })
    return(
        <React.Fragment>
<div className="container">
            <div className="row">
                <div className="col-md-8">
              
                {renderItems}
                
                <h1> {active}</h1>
               
                </div>
            </div>
        </div>
        </React.Fragment>
        
     
    )
}


export default Accordion;