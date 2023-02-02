xmlhttp = new XMLHttpRequest;
xmlhttp.open("GET", "xml/content.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;
services = xmlDoc.getElementsByTagName("card");
store = xmlDoc.getElementsByTagName("cardStore");

cards = () => {
    for (let i = 0; i < services.length; i++) {
        if (i == services.length - 1) {
            document.write(`
                <div class="card-body">
                <div class="card-item">
                <img src='images/` + services[i].getElementsByTagName("image")[0].childNodes[0].nodeValue + `'>
                <h3>`+ services[i].getElementsByTagName("cardTitle")[0].childNodes[0].nodeValue + `&
                <span>`+ services[i].getElementsByTagName("moreTitle")[0].childNodes[0].nodeValue + `</span>
                </h3>
                <p>`+ services[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + `</p>
                <button>`+ services[i].getElementsByTagName("button")[0].childNodes[0].nodeValue + `</button>
                </div>
                </div>
                
            `);
        } else {
            document.write(`
            <div class="card-body">
            <div class="card-item">
            <img src='images/` + services[i].getElementsByTagName("image")[0].childNodes[0].nodeValue + `'>
            <h3>`+ services[i].getElementsByTagName("cardTitle")[0].childNodes[0].nodeValue + `</h3>
            <p>`+ services[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + `</p>
            <button>`+ services[i].getElementsByTagName("button")[0].childNodes[0].nodeValue + `</button>
            </div>
            </div>
            
           `);
        }
    }
}

