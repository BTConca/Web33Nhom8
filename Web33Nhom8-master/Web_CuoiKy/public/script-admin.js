function rm() {
    $(event.target).closest("tr").remove();
}

function add() {
    $("table").append("<tr><td>New Thing</td><td><button onclick='rm()'>remove</button></td></tr>");
}