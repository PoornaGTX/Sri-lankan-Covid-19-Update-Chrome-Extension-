


    fetch('https://www.hpb.health.gov.lk/api/get-current-statistical').then( (apidata)
    
    => {
            console.log(apidata);
            return apidata.json();



    }).then((actualdata)=>{


    }).catch((error)=>{

    });




    










    document.getElementById('newcases').textContent = local_new_cases;
    document.getElementById('newtotal').textContent = local_total_cases;
    document.getElementById('newrecoverd').textContent = local_new_cases;
