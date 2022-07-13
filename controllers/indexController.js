const indexController = {
    viewCadastro: (req, res) => {
        return res.render('index');
},
salvarCadastro: (req, res) => {
    return res.send('foi se agota');
    
}
};

module.exports = indexController;