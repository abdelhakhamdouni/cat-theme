fetch("./assistance.json").then(data => data.json())
    .then(dataJSON => {
        let _valeur = '<div class="accordion" id="accordionExample3">'
        dataJSON.forEach((d, index) => {
            _valeur += `
            <div class="accordion-item">
                <div class="valeur"> 
                    <h2 class="accordion-header" id="heading${"_" +index}">
                        <button
                            class="accordion-button text-success font-weight-bold"
                            type="button"
                            data-mdb-toggle="collapse"
                            aria-expanded="true"
                            >${d.title}
                        </button>
                    </h2>
                    <div id="collapse${"_" +index}"
                            class="accordion-collapse collapse show"
                            aria-labelledby="heading${"_" +index}"
                            data-mdb-parent="#accordionExample3"
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
        document.querySelector('.assistance').innerHTML = _valeur
    });