let actualHour = moment().format('H')

//Not to be mistaken with JavaScript map
//jQuery map will turn the elements into an array, and here were returning EACH id from all classes
let setHour = $('div').map(function () {
    return this.id;
}).get()

function checkTime() {

    for (var i = 0; i < setHour.length; i++) {
        if (parseInt(actualHour) > parseInt(setHour[i])) {
            $("#" + setHour[i]).addClass("past");
        }
        if (parseInt(actualHour) < parseInt(setHour[i])) {
            $("#" + setHour[i]).addClass("future");
        }
        if (parseInt(actualHour) === parseInt(setHour[i])) {
            $("#" + setHour[i]).addClass("present");
        }
    }
}

function saveEntry() {
    
        $('.saveBtn').on('click', function (e) {

            for (var i = 0; i < setHour.length; i++) {
                
                let test = $('textarea').val();

                console.log(test)
    
                let saveToStorage = localStorage.setItem('Plans', test)
    
                console.log(saveToStorage)
            }
        })

}

saveEntry();

checkTime();