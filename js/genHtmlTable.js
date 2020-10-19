function genHtmlTable(data) {
    //Assumes data is a 2D-array, where first row is the header of the generated html table

    console.log(data)

    //number of columns
    var n_cols = data[0].length;

    //number of rows
    var n_rows = data.length;

    var i = 0;
    var j = 0;
    var table = "<table class='table table-hover'><tr>"

    for (i = 0; i < n_cols; i++) {
        table = table + "<th>" + data[0][i] + "</th>";
    }

    table = table + "</tr>"

    if (n_rows > 0) {

        for (i = 1; i < n_rows - 1; i++) {

            table += "<tr>"
            for (j = 0; j < n_cols; j++) {
                table += "<td>" + data[i][j] + "</td>";
            }
            table += "</tr>"

        }
    }

    //add closing table tag
    table += "</table>"

    return table;

}
