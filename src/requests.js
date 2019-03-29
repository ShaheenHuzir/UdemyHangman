const getPuzzle = async ()=>{
    const response= await fetch('//puzzle.mead.io/puzzle',{})
        if(response.status===200){
            console.log(response);
            const dubai= await response.json()
             return dubai.puzzle;
             
        }}


const giveCountry= async(countryCode)=>{
    const response= await fetch('//restcountries.eu/rest/v2/all',{});
    {      if(response.status==200){
            const data= await response.json();
          const myCountry= data.find(element => { return (element["alpha2Code"]===countryCode); }) ;
        return myCountry;
    }
}
}

const getLocation=async()=>{
    const response= await fetch("//ipinfo.io/json?token=4c16c21bc502a4",{})
        if(response.status==200){
        const data= await response.json();
        return data
       }
       else{
           throw Error(" not a good way");
       }
    }

const getCountry= async()=>{
    const location= await getLocation();
    const country= await giveCountry(location.country);
    return country.name;
}    

export {getPuzzle as default};