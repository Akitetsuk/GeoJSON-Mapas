
//funcio fetch recull les dades del geojson
async function cargarDatos(){
    let data = await fetch("./comarques-compressed.geojson");
    let resp = await data.json();
    console.log(resp);
    return resp;
    }
     
    //aqui montarem la tabla
    function printTable(data){
        console.log("Se ejecuta datos")
        let table = document.getElementById("table");
        let tbody = document.createElement("tbody");
        table.appendChild(tbody);
        tbody.innerHTML += "<tr><th>Nº Comarca</th><th>Capital de comarca</th><th>Comarca</th><th>Cordenades</th></tr>";
        //recorrem tots els camps  geojson  que hem especificat amb un for i acaba quan no hi ha ningun element 
        for(let i = 0; i < data.features.length; i++){       
     
            let comarca = data.features[i].properties.comarca;
            let cap_comar = data.features[i].properties.cap_comar;
            let nom_comar = data.features[i].properties.nom_comar;
            let coordinates =  data.features[i].geometry.coordinates;

            //aqui he probat de separar les coordenades i ordenarles ja que esta al reves per utilitzar la app 
            //pero nomes m'ha surtit la lng i la lat deia NAN 
            //era per utilitzar la API que no s'ha pugut utiitzar per aquest motiu 
            /*  let lng =parseFloat(data.features[i].geometry.coordinates.slice(0,14));
            let lat =parseFloat(data.features[i].geometry.coordinates.slice(14,24));*/
            
            //aqui li diem que ho introdueixi
            let linea = `<tr><td>${comarca}</td><td>${cap_comar}</td><td>${nom_comar}</td><td>${coordinates}</td></tr>`;
            tbody.innerHTML += linea;
        }    
    }
     
    //creamos una funcion per omplir les dades 
     //que han sigut recullides pel fetch
    async function iniciar(){
        let datos = await cargarDatos();
        printTable(datos);
    }
     
    iniciar();
     