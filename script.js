
// Serch Function //

(function (document) {
    'use strict';

    var TableFilter = (function (myArray) {
        var search_input;

        function _onInputSearch(e) {
            search_input = e.target;
            var tables = document.getElementsByClassName(search_input.getAttribute('data-table'));
            myArray.forEach.call(tables, function (table) {
                myArray.forEach.call(table.tBodies, function (tbody) {
                    myArray.forEach.call(tbody.rows, function (row) {
                        var text_content = row.textContent.toLowerCase();
                        var search_val = search_input.value.toLowerCase();
                        row.style.display = text_content.indexOf(search_val) > -1 ? '' : 'none';
                    });
                });
            });
        }

        return {
            init: function () {
                var inputs = document.getElementsByClassName('search-input');
                myArray.forEach.call(inputs, function (input) {
                    input.oninput = _onInputSearch;
                });
            }
        };
    })(Array.prototype);

    document.addEventListener('readystatechange', function () {
        if (document.readyState === 'complete') {
            TableFilter.init();
        }
    });

})(document);



// Insert Function//
function add_row() {
    var new_no = document.getElementById("new_no").value;
    var new_movie = document.getElementById("new_movie").value;
    var new_theater = document.getElementById("new_theater").value;
    var new_state = document.getElementById("new_state").value;


    var table = document.getElementById("data_table");
    var table_len = table.rows.length - 1;
    var row = (table.insertRow(table_len).outerHTML =
        "<tr id='row" +
        table_len +
        "'><td id='no_row" +
        table_len +
        "'>" +
        new_no +
        "</td><td id='movie_row" +
        table_len +
        "'>" +
        new_movie +
        "</td><td id='theater_row" +
        table_len +
        "'>" +
        new_theater +
        "</td><td id='state_row" +
        table_len +
        "'>" +
        new_state +
        "</td><td><input type='button' id='edit_button" +
        table_len +
        "' value='Edit' class='edit' onclick='edit_row(" +
        table_len +
        ")'> <input type='button' id='save_button" +
        table_len +
        "' value='Save' class='save' onclick='save_row(" +
        table_len +
        ")'> <input type='button' value='Delete' class='delete' onclick='delete_row(" + table_len + ")'></td></tr>");

    document.getElementById("new_no").value = "";
    document.getElementById("new_movie").value = "";
    document.getElementById("new_theater").value = "";
    document.getElementById("new_state").value = "";
}


// Update Function//

function edit_row(no) {
    
    document.getElementById("edit_button" + no).style.display = "none";
    document.getElementById("save_button" + no).style.display = "block";

    var number = document.getElementById("no_row" + no);
    var movie = document.getElementById("movie_row" + no);
    var theater = document.getElementById("theater_row" + no);
    var state = document.getElementById("state_row" + no);

    var no_data = number.innerHTML;
    var movie_data = movie.innerHTML;
    var theater_data = theater.innerHTML;
    var state_data = state.innerHTML;

    number.innerHTML =
        "<input type='text' id='no_text" + no + "' value='" + no_data + "'>";
    movie.innerHTML =
        "<input type='text' id='movie_text" + no + "' value='" + movie_data + "'>";
    theater.innerHTML =
        "<input type='text' id='theater_text" + no + "' value='" + theater_data + "'>";
    state.innerHTML =
        "<input type='text' id='state_text" + no + "' value='" + state_data + "'>";
}
// Save Function//
function save_row(no) {
    var no_val = document.getElementById("no_text" + no).value;
    var movie_val = document.getElementById("movie_text" + no).value;
    var theater_val = document.getElementById("theater_text" + no).value;
    var state_val = document.getElementById("state_text" + no).value;
   
    document.getElementById("no_row" + no).innerHTML = no_val;
    document.getElementById("movie_row" + no).innerHTML = movie_val;
    document.getElementById("theater_row" + no).innerHTML = theater_val;
    document.getElementById("state_row" + no).innerHTML = state_val;

    document.getElementById("edit_button" + no).style.display = "block";
    document.getElementById("save_button" + no).style.display = "none";
   }


// Delet Function//
function delete_row(no) {
    document.getElementById("row" + no + "").outerHTML = "";
}