window.onload = function() {
    console.log("ready");

    var obj = {
        name: "number"
    };
    document.getElementById("add_watchers").addEventListener("click", my_numbers);


    function my_numbers() {
        for(var i =0; i<5000; i++){
            var node = document.createElement("div");                 // Create a <li> node
            var textnode = document.createTextNode(i);         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("watchers").appendChild(node);
        }
    }
};