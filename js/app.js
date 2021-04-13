'use strict'
// console.log('hello js')

function Employee(name,email,dep){
    this.name=name;
    this.email=email;
    this.dep=dep;
    this.prices=[];
    Employee.all.push(this);
    Setting();
    console.log(Employee.all)
}
Employee.all=[];

Employee.prototype.getPrice=function(){

    
    for(let i=0;i<Employee.all.length;i++){
           let  price=getRndom(100,500);

           this.prices.push(price);
       }
       
     
}





let myForm=document.getElementById('myform');
let tableEl=document.getElementById('myResult');
let totalEl=document.getElementById('total');
 myForm.addEventListener('submit',handleClick)

  function handleClick(event){
      event.preventDefault();
      const emp=event.target;
      let name=emp.name.value;
      let email=emp.email.value;
      let dep=emp.dep.value;
   
     let newEM=new Employee(name,email,dep);
     newEM.getPrice(100,500);
      
      
      renderEmp();
  }

  let headings=['Name','Email','Department','Salary']
  function renderEmp(){
      let total=0;
      tableEl.textContent="";
      let trHeading=document.createElement('tr');
      tableEl.appendChild(trHeading);
      for(let i=0;i<headings.length;i++){
          let thHeading=document.createElement('th');
          trHeading.appendChild(thHeading)
          thHeading.textContent=headings[i];
      }

      for(let i=0;i<Employee.all.length;i++){

      let price=getRndom(100,500);
        
       let trData=document.createElement('tr');
       tableEl.appendChild(trData)
       let tdData=document.createElement('td');
       trData.appendChild(tdData);
       tdData.textContent=Employee.all[i].name;

     
       let tdDataEm=document.createElement('td');
       trData.appendChild(tdDataEm);
       tdDataEm.textContent=Employee.all[i].email;

      
       let tdDatadep=document.createElement('td');
       trData.appendChild(tdDatadep);
       tdDatadep.textContent=Employee.all[i].dep;
    
       let tdDataprice=document.createElement('td');
       trData.appendChild(tdDataprice);
       tdDataprice.textContent=price
//        tdDataprice.textContent=price;
   total+=price
      }
      totalEl.innerHTML=` Total ${total}`;
  }
  
function getRndom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
};

function Setting(){
    let data=JSON.stringify(Employee.all);
    localStorage.setItem('employee',data)
}

function getting(){
    let stringObj=localStorage.getItem('employee');
    let normalObj=JSON.parse(stringObj);
    if(normalObj!==null){
        Employee.all=normalObj;
    }
    renderEmp();
}
getting();