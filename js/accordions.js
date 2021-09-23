fetch("./valeurs.json").then(data => data.json())
    .then(dataJSON => {
        let valeur = '<div class="accordion" id="accordionExample">'
        dataJSON.forEach((d, index) => {
            valeur += `
            <div class="accordion-item">
                <div class="valeur"> 
                    <h2 class="accordion-header" id="heading${index}">
                        <button
                            class="accordion-button text-success font-weight-bold"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#collapse${index}"
                            aria-expanded="${index == 0 ? "true" : "false"}"
                            aria-controls="collapse${index}"
                            >${d.title}
                        </button>
                    </h2>
                    <div id="collapse${index}"
                        class="accordion-collapse collapse ${index == 0 ? "show" : ""}"
                        aria-labelledby="heading${index}"
                        data-mdb-parent="#accordionExample"
                        >
                        <div class="accordion-body">
                            <p>
                            ${d.content}

                            </p>
                        </div>
                    </div>
                </div>
            </div>
                            `
        })
        valeur += "</div>"
        document.querySelector('.valeurs').innerHTML = valeur
    });

fetch("./engagements.json").then(data => data.json())
    .then(dataJSON => {
        let _valeur = '<div class="accordion" id="accordionExample2">'
        dataJSON.forEach((d, index) => {
            _valeur += `
            <div class="accordion-item">
                <div class="valeur"> 
                    <h2 class="accordion-header" id="heading${"_" +index}">
                        <button
                            class="accordion-button text-success font-weight-bold"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#collapse${"_" +index}"
                            aria-expanded="${index == 0 ? "true" : "false"}"
                            aria-controls="collapse${"_" +index}"
                            >${d.title}
                        </button>
                    </h2>
                    <div id="collapse${"_" +index}"
                            class="accordion-collapse collapse ${index == 0 ? "show" : ""}"
                            aria-labelledby="heading${"_" +index}"
                            data-mdb-parent="#accordionExample2"
                            >
                        <div class="accordion-body">
                            <p>
                                ${d.content}
    
                            </p>
                        </div>
                    </div>
                </div>
            </div>
                            `
        })
        _valeur += "</div>"
        document.querySelector('.engagements').innerHTML = _valeur
    });