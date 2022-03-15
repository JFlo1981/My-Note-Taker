const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.urlencoded({
    extended : true
})) 
app.use(express.json());
app.use(express.static('public'));

const apiRoutes = require("./routes/apiRoutes");
const HTMLroutes = require("./routes/HTMLroutes");
app.use(apiRoutes);
app.use(HTMLroutes);
app.listen(PORT, function(){
    console.log("app.listen", PORT);
})